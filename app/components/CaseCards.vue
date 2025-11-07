<template>
    <div class="c-case-cards" id="work">
        <div 
            v-for="(casePost, index) in cases" 
            :key="casePost.id || index"
            class="c-case-cards__thumbnail">
            
            <h2>{{  casePost.title  }}</h2>
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