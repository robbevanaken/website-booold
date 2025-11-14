<template>
  <div data-theme="light">
    <div class="c-legal-page">
      <SiteHeader></SiteHeader>
      <main class="c-legal-page__main o-container o-grid">
        <div class="col-span-12 md:col-span-4">
          <h1>Terms & Conditions</h1>

          <p>Last updated: 14 - 11 - 2025</p>

          <p>Welcome to this website. By using this website, you agree to the terms and conditions below. If you do not agree with one or more of these terms, please discontinue use of this website.</p>

        </div>
        <div class="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <h2>1. General</h2>
          <p>These terms and conditions apply to all visitors of this website and to all services offered through it. Booold Studio reserves the right to update or modify these terms at any time. The most recent version will always apply.</p>

          <h2>2. Intellectual Property</h2>
          <p>All texts, logos, designs, images, and other content on this website are the property of Booold Studio unless stated otherwise. It is not permitted to copy, distribute, or use any material in any way without prior written permission.</p>

          <h2>3. Services</h2>
          <p>Booold Studio strives to provide accurate and up-to-date information, but does not guarantee that all information is complete, accurate, or current. No rights can be derived from any of the information presented on this website.</p>

          <h2>4. Liability</h2>
          <p>Booold Studio is not liable for:</p>
          <ul>
            <li>any form of damage resulting from the use of this website,</li>
            <li>errors or inaccuracies on the website,</li>
            <li>temporary unavailability of the website,</li>
            <li>loss of data, profit, or income caused by the use of the website.</li>
          </ul>
          <p>Use of this website is entirely at your own risk.</p>

          <h2>5. External Links</h2>
          <p>This website may contain links to external websites. Booold Studio is not responsible for the content, functionality, or terms of use of such external sites.</p>

          <h2>6. Applicable Law</h2>
          <p>These terms and conditions are governed by Belgian law. Any disputes will be submitted to the competent courts in Belgium.</p>

          <h2>7. Contact</h2>
          <p>For any questions regarding these terms and conditions, you can contact us at:</p>
          <p><strong>Email:</strong> robbe@booold.studio</p>
          <p><strong>Website:</strong> booold.studio</p>
        </div>
      </main>
      <SiteFooter></SiteFooter>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Terms & Conditions - Booold Studio',
  meta: [
    { name: 'description', content: 'Terms and conditions for Booold Studio web design and development services.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
