<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { initLenis } from "../../assets/js/animations/lenis.js";
  import { initHeaderScrollTrigger } from "../../assets/js/animations/headerScrollTrigger.js";

  onMounted(() => {
    // initLenis()
    initHeaderScrollTrigger();
  });
</script>