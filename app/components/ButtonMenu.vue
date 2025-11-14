<template>
  <div class="btn-menu__wrapper">
    <button 
      class="btn-menu" 
      role="button"
      :aria-expanded="isExpanded" 
      aria-label="Menu"
      @click="toggleMenu"
    >
      <div class="btn-menu__bg"></div>
      <div class="btn-menu__icon">
        <span></span>
        <span></span>
      </div>
    </button>
    <aside class="c-slideout" :aria-hidden="!isExpanded">
      <div class="c-slideout__wrapper">
        <Label
            text="Menu"
            classes="c-label--light"
        ></Label>
        <nav>
          <ul>
            <li>
              <a class="c-slideout__nav-item" href="#work"><span data-button-animate-chars="" >Work (2)</span></a>
            </li>
            <li>
              <a class="c-slideout__nav-item" href="mailto:hello@boooldstudio.com"><span data-button-animate-chars="" >Contact</span></a>
            </li>
            <li>
              <a class="c-slideout__nav-item" download href="/assets/images/Resumé.pdf"><span data-button-animate-chars="" >Resumé</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup>
const isExpanded = ref(false);
const buttonText = ref(null);

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};

</script>