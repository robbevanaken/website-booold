<template>
    <div data-text-quote-parallax class="c-text-quote">
        <div class="o-container o-grid">
            <div class="col-span-12 md:col-span-2 mt-5" data-text-quote-parallax-label>
                <Label 
                    :text="label"
                    :classes="labelClasses">
                </Label>
            </div>
            <div class="col-span-12 md:col-span-8 md:col-start-5" data-text-quote-parallax-content>
                <div class="c-text-quote__text" data-highlight-text>
                    <p>
                        {{ text }}
                    </p>
                </div>
                <ButtonDefault
                    :buttonText="buttonText"
                    :buttonUrl="buttonUrl"
                    :buttonTarget="buttonTarget"
                ></ButtonDefault>
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
        },
        buttonText: {
            type: String,
        },
        buttonUrl: {
            type: String,
        },
        buttonTarget: {
            type: String,
        },
    });

    onMounted(() => {
        initHighlightText();
    });
</script>