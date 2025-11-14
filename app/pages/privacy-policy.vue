<template>
  <div data-theme="light">
    <div class="c-legal-page">
      <SiteHeader></SiteHeader>
      <main class="c-legal-page__main o-container o-grid">
        <div class="col-span-12 md:col-span-4">
          <h1>Privacy Policy</h1>
          <p>Last updated: 14 - 11 - 2025</p>
          <p>Booold Studio values your privacy and aims to be fully transparent. This website does not collect, store, or process any personal data. You can browse this website freely without providing any information.</p>
        </div>
        <div class="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">

          <h2>1. No Personal Data Collected</h2>
          <p>No personal information is collected through this website. We do not request names, email addresses, phone numbers, or any identifying details.</p>

          <h2>2. No Cookies</h2>
          <p>This website does <strong>not</strong> use cookies of any kind—no functional cookies, no analytical cookies, and no tracking or marketing cookies.</p>

          <h2>3. No Tracking or Logging</h2>
          <p>We do not use any tracking technologies or analytics tools. We do not log IP addresses, browser details, session data, or any other technical information that could identify you.</p>

          <h2>4. No Forms or Accounts</h2>
          <p>The website does not contain contact forms, login systems, or user accounts. Therefore, no submitted data is collected or stored.</p>

          <h2>5. Contact via Email</h2>
          <p>If you contact Booold Studio via email, the information you provide will only be used to respond to your message. It will not be stored or used for any other purpose without your explicit consent. You may request deletion of your email correspondence at any time.</p>

          <h2>6. Your Rights</h2>
          <p>Since we do not process personal data through this website, there are no stored records to request or delete. If you have shared information via email and want it removed, simply contact us.</p>

          <h2>7. Contact</h2>
          <p>If you have questions about this Privacy Policy or want us to delete previous email correspondence, you can reach us at:</p>
          <p><strong>Email:</strong> hello@boooldstudio.com</p>
          <p><strong>Website:</strong> boooldstudio.com</p>
        </div>
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
