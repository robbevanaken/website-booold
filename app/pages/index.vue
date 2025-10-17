<template>
  <LoadingScreen></LoadingScreen>
  <SiteHeader></SiteHeader>

  <main>
    <HomeHero></HomeHero>

    <TextQuote
      v-if="metaContent?.textQuote"
      :label="metaContent.textQuote.label"
      :labelClasses="metaContent.textQuote.labelClasses"
      :title="metaContent.textQuote.title"
      :text="metaContent.textQuote.text"
    ></TextQuote>
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