<template>
  <header class="c-header bg-blue">
    <div class="o-container">
      <div class="c-header__body">
        <h1 class="c-header__title">
          <span>{{ headingTextTop }}</span>
          <span>{{ headingTextBottom }}</span>
        </h1>
        <ButtonMenu></ButtonMenu>
      </div>
    </div>
  </header>
</template>

<script setup>

    const props = defineProps({
        headingTextTop: {
            type: String,
            default: 'Hi! I’m Robbe A Booold Designer'
        },
        headingTextBottom: {
            type: String,
            default: 'And a Solid Web developer'
        },
    })

</script>
