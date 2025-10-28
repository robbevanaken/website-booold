<template>
  <div class="btn-menu__wrapper">
    <button 
      class="btn-menu" 
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