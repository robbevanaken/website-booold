<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { initLenis } from "../../assets/js/animations/lenis.js";
  import { initThemeScrollTrigger } from "../../assets/js/animations/headerScrollTrigger.js";
  import { initFooterParallax } from "../../assets/js/animations/parallaxFooter.js";

  onMounted(() => {
    // initLenis()
    initThemeScrollTrigger();
    initFooterParallax();
  });
</script>