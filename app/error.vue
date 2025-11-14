<template>
  <div data-theme="light">
    <div class="c-legal-page">
      <SiteHeader></SiteHeader>
      <main class="c-legal-page__main o-container o-grid">
        <div class="col-span-12 md:col-span-4">
          <h1>404</h1>
          <p>Page Not Found</p>
          <p>The page you're looking for doesn't exist or has been moved.</p>
        </div>
        <div class="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <h2>What happened?</h2>
          <p>The URL you entered may be incorrect, or the page may have been removed or relocated.</p>
          
          <h2>What can you do?</h2>
          <p>You can try going back to the <a href="/">homepage</a> or check the URL for any typos.</p>
        </div>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '404 - Page Not Found - Booold Studio',
  meta: [
    { name: 'description', content: 'The page you are looking for could not be found.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>