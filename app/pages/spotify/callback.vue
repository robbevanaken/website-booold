<template>
  <div class="flex h-screen items-center justify-center">
    <p>Connecting to Spotify…</p>
  </div>
</template>

<script setup lang="ts">
import { useSpotify } from "../../../composables/useSpotify"

const { extractTokenFromHash } = useSpotify()

onMounted(() => {
  extractTokenFromHash()
})
</script>