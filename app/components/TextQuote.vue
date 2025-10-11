<template>
    <div class="c-text-quote">
        <div class="o-container o-grid gap-y-10">
            <div class="col-span-3 md:col-span-2 mt-5">
                <Label 
                    :text="label"
                    :classes="labelClasses">
                </Label>
            </div>
            <div class="col-span-9 md:col-span-7 col-start-4 md:col-start-3">
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