<template>
  <LoadingScreen></LoadingScreen>

  <div>
    <SiteHeader></SiteHeader>
  </div>

  <main>
    <div data-header-theme="light">
      <HomeHero
        v-if="metaContent?.homeHero"
        :playlistUrl="metaContent.homeHero.playlistUrl"
      ></HomeHero>
    </div>

    <div data-header-theme="dark">
      <TextQuote
        v-if="metaContent?.textQuote"
        :label="metaContent.textQuote.label"
        :labelClasses="metaContent.textQuote.labelClasses"
        :text="metaContent.textQuote.text"
        :buttonText="metaContent.textQuote.buttonText"
        :buttonUrl="metaContent.textQuote.buttonUrl"
        :buttonTarget="metaContent.textQuote.buttonTarget"
      ></TextQuote>
    </div>
  </main>
  
  <SiteFooter></SiteFooter>
</template>

<script setup>
  const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
  const metaContent = home.value.meta ?? null;

  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })

</script>