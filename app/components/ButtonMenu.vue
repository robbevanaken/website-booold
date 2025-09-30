<template>
    <button class="c-btn-menu">
      <slot name="button">
        {{ buttonText }}
      </slot>
      <div class="c-btn-menu__icon">
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
    })

</script>
