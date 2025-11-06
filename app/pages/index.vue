<template>
  <LoadingScreen></LoadingScreen>

  <div>
    <SiteHeader></SiteHeader>
  </div>

  <main>
    <div data-theme="hide">
      <HomeHero
        v-if="metaContent?.homeHero"
        :playlistUrl="metaContent.homeHero.playlistUrl"
      ></HomeHero>
    </div>

    <div data-theme="light">
      <TextQuote
        v-if="metaContent?.textQuote"
        :label="metaContent.textQuote.label"
        :labelClasses="metaContent.textQuote.labelClasses"
        :textTop="metaContent.textQuote.textTop"
        :textBottom="metaContent.textQuote.textBottom"
        :buttonText="metaContent.textQuote.buttonText"
        :buttonUrl="metaContent.textQuote.buttonUrl"
        :buttonTarget="metaContent.textQuote.buttonTarget"
      ></TextQuote>
    </div>

    <div data-theme="light">
      <ServiceCards
        v-if="metaContent?.services"
        :services="metaContent.services"
      ></ServiceCards>
    </div>
  </main>
  <div data-theme="light">
    <SiteFooter></SiteFooter>
  </div>
</template>

<script setup>
  const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
  const metaContent = home.value.meta ?? null;

  useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
  })

</script>