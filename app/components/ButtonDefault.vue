<template>
    <a :href="buttonUrl" :target="buttonTarget" :aria-label="buttonText" :class="'btn-animate-chars ' + theme">
        <div class="btn-animate-chars__bg"></div>
        <span data-button-animate-chars="" class="btn-animate-chars__text">{{ buttonText }}</span>
    </a>
</template>

<script setup>
import { onMounted } from "vue";
import { initButtonCharacterStagger } from "../../assets/js/animations/textAnimations.js";

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Lorem ipsum'
    },
    buttonUrl: {
        type: String,
        default: '#'
    },
    buttonTarget: {
        type: String,
        default: '_self'
    },
    theme: {
        type: String,
        default: 'btn-animate-chars--dark'
    },
});

onMounted(() => {
    initButtonCharacterStagger();
});
</script>