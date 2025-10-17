<template>
  <div class="c-hero-home">
    <div ref="gradientCanvas" class="c-gradient-canvas"></div>
    <div class="o-container">
      <div class="c-hero-home__content">
        <h1 data-fadein="2" class="c-hero-home__title">
          <span class="c-hero-home__title-line">Booold Design And</span>
          <br>
          <span class="c-hero-home__title-line">Solid Web development</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const gradientCanvas = ref(null)
const heroTitle = ref(null)

const shaders = {
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  
  fluidShader: `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec4 iMouse;
    uniform int iFrame;
    uniform sampler2D iPreviousFrame;
    uniform float uBrushSize;
    uniform float uBrushStrength;
    uniform float uFluidDecay;
    uniform float uTrailLength;
    uniform float uStopDecay;
    varying vec2 vUv;
    
    vec2 ur, U;
    
    float ln(vec2 p, vec2 a, vec2 b) {
        return length(p-a-(b-a)*clamp(dot(p-a,b-a)/dot(b-a,b-a),0.,1.));
    }
    
    vec4 t(vec2 v, int a, int b) {
        return texture2D(iPreviousFrame, fract((v+vec2(float(a),float(b)))/ur));
    }
    
    vec4 t(vec2 v) {
        return texture2D(iPreviousFrame, fract(v/ur));
    }
    
    float area(vec2 a, vec2 b, vec2 c) {
        float A = length(b-c), B = length(c-a), C = length(a-b), s = 0.5*(A+B+C);
        return sqrt(s*(s-A)*(s-B)*(s-C));
    }
    
    void main() {
        U = vUv * iResolution;
        ur = iResolution.xy;
        
        if (iFrame < 1) {
            float w = 0.5+sin(0.2*U.x)*0.5;
            float q = length(U-0.5*ur);
            gl_FragColor = vec4(0.1*exp(-0.001*q*q),0,0,w);
        } else {
            vec2 v = U,
                 A = v + vec2( 1, 1),
                 B = v + vec2( 1,-1),
                 C = v + vec2(-1, 1),
                 D = v + vec2(-1,-1);
            
            for (int i = 0; i < 8; i++) {
                v -= t(v).xy;
                A -= t(A).xy;
                B -= t(B).xy;
                C -= t(C).xy;
                D -= t(D).xy;
            }
            
            vec4 me = t(v);
            vec4 n = t(v, 0, 1),
                e = t(v, 1, 0),
                s = t(v, 0, -1),
                w = t(v, -1, 0);
            vec4 ne = .25*(n+e+s+w);
            me = mix(t(v), ne, vec4(0.15,0.15,0.95,0.));
            me.z = me.z - 0.01*((area(A,B,C)+area(B,C,D))-4.);
            
            vec4 pr = vec4(e.z,w.z,n.z,s.z);
            me.xy = me.xy + 100.*vec2(pr.x-pr.y, pr.z-pr.w)/ur;
            
            me.xy *= uFluidDecay;
            me.z *= uTrailLength;
            
            if (iMouse.z > 0.0) {
                vec2 mousePos = iMouse.xy;
                vec2 mousePrev = iMouse.zw;
                vec2 mouseVel = mousePos - mousePrev;
                float velMagnitude = length(mouseVel);
                float q = ln(U, mousePos, mousePrev);
                vec2 m = mousePos - mousePrev;
                float l = length(m);
                if (l > 0.0) m = min(l, 10.0) * m / l;
                
                float brushSizeFactor = 1e-4 / uBrushSize;
                float strengthFactor = 0.05 * uBrushStrength;
                
                // Multi-layered falloff for organic feel
                float falloff = exp(-brushSizeFactor*q*q*q);
                falloff = pow(falloff, 0.35);
                
                // Add rotational component
                vec2 perpendicular = vec2(-mouseVel.y, mouseVel.x);
                float rotation = sin(length(U - mousePos) * 0.05) * 0.3;
                
                me.xyw += strengthFactor * falloff * vec3(m + perpendicular * rotation, 15.);
                
                if (velMagnitude < 2.0) {
                    float distToCursor = length(U - mousePos);
                    float influence = exp(-distToCursor * 0.01);
                    float cursorDecay = mix(1.0, uStopDecay, influence);
                    me.xy *= cursorDecay;
                    me.z *= cursorDecay;
                }
            }
            
            gl_FragColor = clamp(me, -0.4, 0.4);
        }
    }
  `,
  
  displayShader: `
    uniform float iTime;
    uniform vec2 iResolution;
    uniform sampler2D iFluid;
    uniform float uDistortionAmount;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform float uColorIntensity;
    uniform float uSoftness;
    varying vec2 vUv;
    
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    
    void main() {
      vec2 fragCoord = vUv * iResolution;
      
      vec4 fluid = texture2D(iFluid, vUv);
      vec2 fluidVel = fluid.xy;
      
      float mr = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord * 2.0 - iResolution.xy) / mr;
      
      // Enhanced distortion with rotation
      float angle = length(fluidVel) * 3.14159;
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      uv += (rot * fluidVel) * (0.6 * uDistortionAmount);
      
      // Multi-layered animation with different speeds
      float t1 = iTime * 0.3;
      float t2 = iTime * 0.5;
      float t3 = iTime * 0.7;
      
      float d = -t1;
      float a = 0.0;
      
      // Add noise-based turbulence
      float turbulence = noise(uv * 2.0 + iTime * 0.2) * 0.5;
      
      for (float i = 0.0; i < 12.0; ++i) {
        float layer = i / 12.0;
        a += cos(i - d - a * uv.x * (1.0 + turbulence));
        d += sin(uv.y * i + a) * (1.0 + layer * 0.3);
        
        // Add swirling motion
        float swirl = sin(t2 + i * 0.5) * 0.3;
        d += cos(length(uv) * 3.0 + t3 + swirl) * 0.2;
      }
      d += t1;
      
      // Organic wave patterns
      float wave1 = sin(uv.x * 3.0 + d * 1.5 + t2) * 0.5 + 0.5;
      float wave2 = cos(uv.y * 4.0 + a * 1.2 + t3) * 0.5 + 0.5;
      
      // Enhanced mixing with fluid interaction
      float fluidInfluence = length(fluidVel) * 5.0;
      float mixer1 = cos(uv.x * d + fluidInfluence) * 0.5 + 0.5;
      float mixer2 = cos(uv.y * a - fluidInfluence * 0.5) * 0.5 + 0.5;
      float mixer3 = sin(d + a + wave1) * 0.5 + 0.5;
      float mixer4 = sin(wave2 * 3.14159) * 0.5 + 0.5;
      
      // Smooth with soft edges
      float smoothAmount = clamp(uSoftness * 0.15, 0.0, 0.85);
      mixer1 = mix(mixer1, 0.5, smoothAmount);
      mixer2 = mix(mixer2, 0.5, smoothAmount);
      mixer3 = mix(mixer3, 0.5, smoothAmount);
      mixer4 = mix(mixer4, 0.5, smoothAmount);
      
      // Complex color blending
      vec3 col = mix(uColor1, uColor2, mixer1);
      col = mix(col, uColor3, mixer2 * 0.8);
      col = mix(col, uColor4, mixer3 * 0.5);
      
      // Add dynamic highlights based on fluid movement
      vec3 highlight = uColor3 * fluidInfluence * 0.3;
      col += highlight;
      
      // Subtle pulsing effect
      float pulse = sin(iTime * 2.0) * 0.05 + 0.95;
      col *= uColorIntensity * pulse;
      
      // Add depth with gradient overlay
      float vignette = 1.0 - length(uv) * 0.3;
      col *= vignette;
      
      gl_FragColor = vec4(col, 1.0);
    }
  `
}

const config = {
  brushSize: 10.0,
  brushStrength: 0.5,
  distortionAmount: 2.5,
  fluidDecay: 0.98,
  trailLength: 0.8,
  stopDecay: 0.85,
  color1: "#FF006E", // Pink
  color2: "#370617", // Brown
  color3: "#FF006E", // Pink
  color4: "#370617", // Brown
  colorIntensity: 1.0,
  softness: 1.0,
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

let renderer, camera, fluidMaterial, displayMaterial, fluidPlane, displayPlane
let fluidTarget1, fluidTarget2, currentFluidTarget, previousFluidTarget
let frameCount = 0
let animationId = null
let mouseX = 0, mouseY = 0, prevMouseX = 0, prevMouseY = 0, lastMoveTime = 0
let idleAnimation = { x: 0, y: 0, time: 0 }

onMounted(() => {
  if (!gradientCanvas.value) return

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  renderer = new THREE.WebGLRenderer({ antialias: true })

  renderer.setSize(window.innerWidth, window.innerHeight)
  gradientCanvas.value.appendChild(renderer.domElement)

  fluidTarget1 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    }
  )

  fluidTarget2 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    }
  )

  currentFluidTarget = fluidTarget1
  previousFluidTarget = fluidTarget2

  fluidMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      iFrame: { value: 0 },
      iPreviousFrame: { value: null },
      uBrushSize: { value: config.brushSize },
      uBrushStrength: { value: config.brushStrength },
      uFluidDecay: { value: config.fluidDecay },
      uTrailLength: { value: config.trailLength },
      uStopDecay: { value: config.stopDecay },
    },
    vertexShader: shaders.vertexShader,
    fragmentShader: shaders.fluidShader,
  })

  displayMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iFluid: { value: null },
      uDistortionAmount: { value: config.distortionAmount },
      uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
      uColor2: { value: new THREE.Vector3(...hexToRgb(config.color2)) },
      uColor3: { value: new THREE.Vector3(...hexToRgb(config.color3)) },
      uColor4: { value: new THREE.Vector3(...hexToRgb(config.color4)) },
      uColorIntensity: { value: config.colorIntensity },
      uSoftness: { value: config.softness },
    },
    vertexShader: shaders.vertexShader,
    fragmentShader: shaders.displayShader,
  })

  const geometry = new THREE.PlaneGeometry(2, 2)
  fluidPlane = new THREE.Mesh(geometry, fluidMaterial)
  displayPlane = new THREE.Mesh(geometry, displayMaterial)

  document.addEventListener("mousemove", handleMouseMove)
  document.addEventListener("mouseleave", handleMouseLeave)
  window.addEventListener("resize", handleResize)

  animate()
})

onBeforeUnmount(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  document.removeEventListener("mousemove", handleMouseMove)
  document.removeEventListener("mouseleave", handleMouseLeave)
  window.removeEventListener("resize", handleResize)

  if (renderer) {
    renderer.dispose()
  }
  if (fluidTarget1) fluidTarget1.dispose()
  if (fluidTarget2) fluidTarget2.dispose()
})

function handleMouseMove(e) {
  if (!gradientCanvas.value) return
  
  const rect = gradientCanvas.value.getBoundingClientRect()
  prevMouseX = mouseX
  prevMouseY = mouseY
  mouseX = e.clientX - rect.left
  mouseY = rect.height - (e.clientY - rect.top)
  lastMoveTime = performance.now()
  fluidMaterial.uniforms.iMouse.value.set(
    mouseX,
    mouseY,
    prevMouseX,
    prevMouseY
  )
}

function handleMouseLeave() {
  fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0)
}

function handleResize() {
  const width = window.innerWidth
  const height = window.innerHeight

  renderer.setSize(width, height)
  fluidMaterial.uniforms.iResolution.value.set(width, height)
  displayMaterial.uniforms.iResolution.value.set(width, height)

  fluidTarget1.setSize(width, height)
  fluidTarget2.setSize(width, height)
  frameCount = 0
}

function animate() {
  animationId = requestAnimationFrame(animate)

  const time = performance.now() * 0.001
  fluidMaterial.uniforms.iTime.value = time
  displayMaterial.uniforms.iTime.value = time
  fluidMaterial.uniforms.iFrame.value = frameCount

  // Idle animation when mouse is inactive
  if (performance.now() - lastMoveTime > 100) {
    idleAnimation.time += 0.016
    
    // Create organic flowing movement
    const centerX = window.innerWidth * 0.5
    const centerY = window.innerHeight * 0.5
    const radius = 150
    
    // Multiple sine waves for complex motion
    idleAnimation.x = centerX + Math.sin(idleAnimation.time * 0.5) * radius * Math.cos(idleAnimation.time * 0.3)
    idleAnimation.y = centerY + Math.cos(idleAnimation.time * 0.7) * radius * Math.sin(idleAnimation.time * 0.4)
    
    // Smooth previous position
    const prevX = centerX + Math.sin((idleAnimation.time - 0.016) * 0.5) * radius * Math.cos((idleAnimation.time - 0.016) * 0.3)
    const prevY = centerY + Math.cos((idleAnimation.time - 0.016) * 0.7) * radius * Math.sin((idleAnimation.time - 0.016) * 0.4)
    
    fluidMaterial.uniforms.iMouse.value.set(
      idleAnimation.x,
      idleAnimation.y,
      prevX,
      prevY
    )
  }

  fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture
  renderer.setRenderTarget(currentFluidTarget)
  renderer.render(fluidPlane, camera)

  displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture
  renderer.setRenderTarget(null)
  renderer.render(displayPlane, camera)

  const temp = currentFluidTarget
  currentFluidTarget = previousFluidTarget
  previousFluidTarget = temp

  frameCount++
}
</script>
