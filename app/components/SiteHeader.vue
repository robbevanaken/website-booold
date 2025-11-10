<template>
  <header class="c-header c-header--light">
    <div class="o-container o-grid">
      <div class="c-header__body-logo col-span-6">
        <a href="/" title="Booold Studio - Home">
          <LogoBooold classes="c-header__logo"></LogoBooold>
        </a>
      </div>
      <div data-fadein="2" class="col-span-2 hidden md:block">
        <a class="c-header__nav-item" href="#work"><span data-button-animate-chars="" >Work (2)</span></a>
      </div>
      <div data-fadein="3" class="col-span-2 hidden md:block">
        <a class="c-header__nav-item" href="mailto:hello@boooldstudio.com"><span data-button-animate-chars="" >Contact</span></a>
      </div>
      <div data-fadein="4" class="col-span-2 hidden md:block">
        <a class="c-header__nav-item" download href="/assets/images/Resumé.pdf"><span data-button-animate-chars="" >Resumé</span></a>
      </div>
      <div class="col-span-6 flex justify-end md:hidden">
        <ButtonMenu></ButtonMenu>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted } from "vue";
import { initButtonCharacterStagger } from "../../assets/js/animations/textAnimations.js";

onMounted(() => {
  initButtonCharacterStagger();
});
</script>