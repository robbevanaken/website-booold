<template>
    <div class="c-case-cards" id="work">
        <div class="o-container o-grid">
            <div 
                v-for="(casePost, index) in cases" 
                :key="casePost.id || index"
                :class="'c-case-cards__thumbnail col-span-12 md:col-span-6 lg:col-span-5 ' + (index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 md:mt-40 lg:mt-64')">
                
                <h2>{{  casePost.title  }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    cases: {
        type: String,
        default: []
    },
});

onMounted(() => {});
</script>