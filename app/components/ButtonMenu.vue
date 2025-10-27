<template>
    <button class="btn-menu" :aria-expanded="isExpanded.toString()" :aria-label="buttonText">
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

const isExpanded = ref(false);

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

function initMenuToggle() {
  const button = document.querySelector('.btn-menu');
  button.addEventListener('click', function (e) {
    isExpanded.value = !isExpanded.value;
    button.setAttribute('aria-expanded', isExpanded.value.toString());
  })
}

onMounted(() => {
  initButtonCharacterStagger();
  initMenuToggle();
});
</script>