<template>
  <div data-theme="light">
    <div class="c-legal-page">
      <SiteHeader></SiteHeader>
      <main class="c-legal-page__main o-container--small">
      </main>
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - Booold Studio',
  meta: [
    { name: 'description', content: 'Privacy policy for Booold Studio. Learn how we collect, use, and protect your personal information.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>