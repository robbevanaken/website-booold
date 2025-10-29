<template>
    <div class="c-service-cards">
        <div class="o-container o-grid">
            <div v-for="service in services" class="col-span-12 md:col-span-6 lg:col-span-3">
                <h3>{{ service.title }}</h3>
                <div>{{ service.description }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    services: {
        type: String,
        default: []
    },
});
</script>

