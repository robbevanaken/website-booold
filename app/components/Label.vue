<template>
    <div :class="'c-label ' + classes">
        <span class="c-label__text">
            {{ text }}
        </span>
    </div>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: 'Lorem ipsum'
        },
        classes: {
            type: String,
            default: 'c-label--dark'
        }
    });
</script>