<template>
    <div class="c-case-cards" id="work">
        <div class="o-container">
            <Label
                text="Cases"
                classes="c-label--light mb-6 md:mb-10"
            ></Label>
        </div>
        <div class="o-container o-grid">
            <div
                v-for="(casePost, index) in cases" 
                :class="'col-span-12 md:col-span-6 lg:col-span-5 ' + (index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 md:mt-40 lg:mt-64')"
                :key="casePost.id || index">
                <a
                    :href="casePost.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="c-case-cards__thumbnail"
                >
                    <div class="c-case-cards__thumbnail-background" data-pixelate-render="" data-pixelate-render-trigger="inview">
                        <img data-pixelate-render-img="" :src="casePost.image" :alt="casePost.title" />
                    </div>
                    <div class="c-case-cards__thumbnail-overlay ">
                        <div class="c-case-cards__thumbnail-overlay-inner">
                            <button class="btn-animate-chars btn-animate-chars--light">
                                <div class="btn-animate-chars__bg"></div>
                                <span data-button-animate-chars="" class="btn-animate-chars__text">Visit website</span>
                            </button>
                        </div>
                    </div>
                    <h2>{{ casePost.title }}</h2>
                </a>
                <div class="c-case-cards__thumbnail-credits">
                    <span>{{ casePost.title }}</span>
                    <div>{{ casePost.year }}</div>
                </div>
            </div>
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