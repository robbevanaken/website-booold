<template>
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
</template>

<script setup>

let cases = [
  {
    'id': 1,
    'url': '#',
    'title': 'Ngis Wireless',
    'imageUrl': 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg',
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
    'imageUrl': 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
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
    'imageUrl': 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    'labels': [
      'Wordpress',
      'Website',
      'Design',
      'Development'
    ]
  },
]
</script>