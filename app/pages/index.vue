<template>
  <div data-scroll-container>
    <SiteHeader></SiteHeader>

    <main>
      <HomeHero></HomeHero>

      <TextQuote
        label="Hi there!"
        labelClasses="c-label--dark"
        title="Nice to meet ya!"
        text="What's up! I'm Robbe. A web designer and pixel precise  developer. My job is to tailor the web to you' needs with my head and my heart. I combine strategic thinking with creative passion to build digital experiences that truly connect."
      ></TextQuote>

      <LogoMarquee></LogoMarquee>

      <CasePanels
        :cases="cases"
      ></CasePanels>
    </main>
  </div>
</template>

<script setup>

let cases = [
  {
    'id': 1,
    'url': '#',
    'title': 'Ngis Wireless',
    'imageUrl': '',
    'labels': [
      'Wordpress',
      'Website',
      'Design',
      'Development'
    ]
  },
  {
    'id': 2,
    'url': '#',
    'title': 'De Wilde - Braems',
    'imageUrl': '',
    'labels': [
      'Wordpress',
      'Website',
      'Design',
      'Development'
    ]
  },
  {
    'id': 3,
    'url': '#',
    'title': 'Alpenglow',
    'imageUrl': '',
    'labels': [
      'Wordpress',
      'Website',
      'Design',
      'Development'
    ]
  },
]
</script>