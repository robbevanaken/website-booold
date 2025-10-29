<template>
    <div class="c-service-cards">
        <div class="o-container o-grid">
            <Label
                text="Our services"
                classes="c-label--dark mb-10 col-span-12 mx-auto">
            </Label>
            <div 
                v-for="(service, index) in services" 
                :key="service.id || index"
                class="col-span-12 md:col-span-6 lg:col-span-3 c-service-cards__card-col"
                >
                <div class="c-service-cards__card">
                        <Label
                            :text="index"
                            classes="c-label--light mb-4">
                        </Label>
                        <div>
                            <h3 class="c-service-cards__card-title">{{ service.title }}</h3>
                            <div class="c-service-cards__card-text">
                            <p>{{ service.description }}</p>
                        </div>
                    </div>
                </div>
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

