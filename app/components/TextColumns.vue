<template>
    <div class="c-text-columns">
        <div class="o-container o-grid gap-y-10">
            <div class="col-span-12 md:col-span-6">
                <Label 
                    :text="label"
                    :classes="labelClasses">
                </Label>
                <h2 class="c-text-columns__title">
                    {{ title }}
                </h2>
            </div>
            <div class="col-span-12 md:col-span-6">
                <div class="c-text-columns__text" data-highlight-text>
                    <p>
                        {{ text }}
                    </p>
                </div>
                <a class="" href=""></a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";
    import { initHighlightText } from "../../assets/js/index.js";

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