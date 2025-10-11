<template>
    <a href="{{ buttonUrl }}" aria-label="{{ buttonText }}" :class="'btn-animate-chars ' + theme">
        <div class="btn-animate-chars__bg"></div>
        <span data-button-animate-chars="" class="btn-animate-chars__text">{{ buttonText }}</span>
    </a>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Lorem ipsum'
    },
    buttonUrl: {
        type: String,
        default: '#'
    },
    theme: {
        type: String,
        default: 'btn-animate-chars--dark'
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