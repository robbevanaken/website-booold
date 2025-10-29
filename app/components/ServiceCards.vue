<template>
    <div class="c-service-cards" data-momentum-hover-init>
        <div class="o-container o-grid">
            <Label
                text="Our services"
                classes="c-label--dark mb-10 col-span-12 mx-auto">
            </Label>
            <div 
                v-for="(service, index) in services" 
                :key="service.id || index"
                class="col-span-12 md:col-span-6 lg:col-span-3 c-service-cards__card-col"
                data-momentum-hover-element=""
                data-header-theme="light"
                >
                <div class="c-service-cards__card" data-momentum-hover-target="">
                        <Label
                            :text="index + 1"
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
import { initCardHover } from "../../assets/js/animations/cardHover.js";

const props = defineProps({
    services: {
        type: String,
        default: []
    },
});

onMounted(() => {
    initCardHover();
});
</script>

