<template>
  <header class="c-header">
    <img :src="logoUrl" alt="Logo" class="c-header__logo" />
  </header>
</template>

<script setup>
  import logoImg from '~/../assets/images/logo.svg'
  const logoUrl = logoImg
</script>