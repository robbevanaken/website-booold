import { ref } from 'vue'

const spotifyToken = ref<string | null>(null)
const spotifyPlayer = ref<any>(null)
const deviceId = ref<string | null>(null)

export function useSpotify() {
  const config = useRuntimeConfig()

  const login = () => {
    const scopes = [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
    ]

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${
      config.public.spotifyClientId
    }&response_type=token&redirect_uri=${encodeURIComponent(
      config.public.spotifyRedirectUri
    )}&scope=${encodeURIComponent(scopes.join(' '))}`

    window.location.href = authUrl
  }

  const extractTokenFromHash = () => {
    if (process.client && window.location.hash) {
      const params = new URLSearchParams(window.location.hash.substring(1))
      const token = params.get('access_token')
      if (token) {
        localStorage.setItem('spotify_token', token)
        spotifyToken.value = token
        navigateTo('/')
      }
    }
  }

  const initSpotifyPlayer = () => {
    if (!process.client) return
    spotifyToken.value = localStorage.getItem('spotify_token')

    if (!spotifyToken.value) return

    window.onSpotifyWebPlaybackSDKReady = () => {
      spotifyPlayer.value = new window.Spotify.Player({
        name: 'Booold Web Player',
        getOAuthToken: cb => cb(spotifyToken.value!),
        volume: 0.5,
      })

      spotifyPlayer.value.addListener('ready', ({ device_id }) => {
        deviceId.value = device_id
        console.log('Spotify player ready with device id', device_id)
      })

      spotifyPlayer.value.addListener('initialization_error', e => console.error(e))
      spotifyPlayer.value.addListener('authentication_error', e => console.error(e))
      spotifyPlayer.value.addListener('account_error', e => console.error(e))
      spotifyPlayer.value.addListener('playback_error', e => console.error(e))

      spotifyPlayer.value.connect()
    }

    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    document.body.appendChild(script)
  }

  const play = async (playlistUri: string) => {
    if (!spotifyToken.value || !deviceId.value) {
      console.warn('Spotify not ready, please log in')
      return
    }

    await fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${deviceId.value}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${spotifyToken.value}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ context_uri: playlistUri }),
      }
    )
  }

  const pause = async () => {
    if (!spotifyToken.value || !deviceId.value) return

    await fetch(
      `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId.value}`,
      {
        method: 'PUT',
        headers: { Authorization: `Bearer ${spotifyToken.value}` },
      }
    )
  }

  return {
    spotifyToken,
    login,
    extractTokenFromHash,
    initSpotifyPlayer,
    play,
    pause,
  }
}
