<template>
  <header class="header">
    <img :src="logoUrl" alt="Logo" class="logo" />
    <slot />
  </header>
</template>

<script setup>
  import logoImg from '~/../assets/images/logo.svg'
  const logoUrl = logoImg
</script>