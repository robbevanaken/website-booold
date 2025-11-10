<template>
    <div class="c-case-cards" id="work">
        <div class="o-container">
            <Label
                text="Cases"
                classes="c-label--light md:mb-10"
            ></Label>
        </div>
        <div class="o-container o-grid">
            <a 
                v-for="(casePost, index) in cases" 
                :key="casePost.id || index"
                :class="'c-case-cards__thumbnail col-span-12 md:col-span-6 lg:col-span-5 ' + (index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 md:mt-40 lg:mt-64')"
                :href="casePost.url"
                >
                <div class="c-case-cards__thumbnail-background" data-pixelate-render="" data-pixelate-render-trigger="inview">
                    <img data-pixelate-render-img="" :src="casePost.image" :alt="casePost.title" />
                </div>
                <h2>{{ casePost.title }}</h2>
            </a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cases: {
        type: Array,
        default: () => []
    },
});

import { onMounted } from 'vue';

onMounted(() => {
});
</script>