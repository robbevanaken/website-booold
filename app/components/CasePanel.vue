<template>
    <div data-stacking-cards-item class="c-case-panel" :class="classes">
        <div class="c-case-panel__media">
            <img :src="imageUrl"class="stacking-cards__item-img" alt="">
        </div>
        <div class="c-case-panel__header">
            <div class="c-case-panel__labels">
                <Label v-for="label in labels"
                :text="label"
                    classes="c-label--borderless">
                ></Label>
            </div>
            <span class="c-case-panel__floormat-counter">{{ String(index + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
        </div>
        <h1 class="c-case-panel__title">{{ title }}</h1>
    </div>
</template>

<script setup>

const props = defineProps({
    caseUrl: {
        type: String,
        default: '#'
    },
    imageUrl: {
        type: String,
        default: '#'
    },
    title: {
        type: String,
        default: 'Lorem ipsum'   
    },
    labels: {
        type: Array,
        default: [],
    },
    index: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    classes: {
        type: String,
        required: ''
    },
});

const colorClasses = ['is--green', 'is--purple', 'is--blue', 'is--brown', 'is--red'];
const colorClass = computed(() => colorClasses[props.index % colorClasses.length]);

</script>