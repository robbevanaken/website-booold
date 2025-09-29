<template>
  <header class="c-header">
    <img :src="logoUrl" alt="Logo" class="c-header__logo" />
    <div class="flex space-x-4">
      <slot />
    </div>
  </header>
</template>

<script setup>
  import logoImg from '~/../assets/images/logo.svg'
  const logoUrl = logoImg
</script>