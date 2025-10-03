<template>
    <div class="c-text-quote">
        <div class="o-container o-grid gap-y-10">
            <div class="col-span-12 lg:col-span-7 lg:col-start-2 xl:col-span-6 xl:col-start-2">
                <Label 
                    :text="label"
                    :classes="labelClasses">
                </Label>
                <div class="c-text-quote__text" data-highlight-text>
                    <p>
                        {{ text }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";
    import { initHighlightText } from "../../assets/js/animations/textAnimations.js";

    const props = defineProps({
        label: {
            type: String,
        },
        labelClasses: {
            type: String,
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        }
    });

    onMounted(() => {
        initHighlightText();
    });
</script>