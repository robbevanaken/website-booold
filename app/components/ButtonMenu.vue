<template>
    <button class="btn-menu" aria-label="{{ buttonText }}">
        <div class="btn-menu__bg"></div>
        <span data-button-animate-chars="" class="btn-menu__content">
            {{ buttonText }}
        </span>
        <div class="btn-menu__icon">
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<script setup>

const props = defineProps({
    buttonText: {
      type: String,
      default: 'Menu'
    },
});

function initButtonCharacterStagger() {
  const offsetIncrement = 0.01; 
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    const text = button.textContent; 
    button.innerHTML = ''; 

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      if (char === ' ') {
        span.style.whiteSpace = 'pre'; 
      }

      button.appendChild(span);
    });
  });
}

onMounted(() => {
  initButtonCharacterStagger();
});
</script>