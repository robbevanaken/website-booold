<template>
    <button class="c-btn-menu" data-btn-hover>
        <div class="btn__bg"></div>
        <div class="btn__circle-wrap">
            <div class="btn__circle">
                <div class="before__100"></div>
            </div>
        </div>
        <span class="btn__content">
            <slot name="button">
                {{ buttonText }}
            </slot>
        </span>
        <div class="c-btn-menu__icon">
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Menu'
    },
});

let cleanup;

onMounted(() => {
    initDirectionalButtonHover();
});

onUnmounted(() => {
    if (cleanup) cleanup();
});

function initDirectionalButtonHover() {
    const buttons = document.querySelectorAll('[data-btn-hover]');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', handleHover);
        button.addEventListener('mouseleave', handleHover);
    });

    cleanup = () => {
        buttons.forEach(button => {
            button.removeEventListener('mouseenter', handleHover);
            button.removeEventListener('mouseleave', handleHover);
        });
    };

    function handleHover(event) {
        const button = event.currentTarget;
        const buttonRect = button.getBoundingClientRect();

        const buttonWidth = buttonRect.width;
        const buttonHeight = buttonRect.height;
        const buttonCenterX = buttonRect.left + buttonWidth / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const offsetXFromLeft = ((mouseX - buttonRect.left) / buttonWidth) * 100;
        const offsetYFromTop = ((mouseY - buttonRect.top) / buttonHeight) * 100;

        let offsetXFromCenter = ((mouseX - buttonCenterX) / (buttonWidth / 2)) * 50;
        offsetXFromCenter = Math.abs(offsetXFromCenter);

        const circle = button.querySelector('.btn__circle');
        if (circle) {
            circle.style.left = `${offsetXFromLeft.toFixed(1)}%`;
            circle.style.top = `${offsetYFromTop.toFixed(1)}%`;
            circle.style.width = `${115 + offsetXFromCenter.toFixed(1) * 2}%`;
        }
    }
}
</script>