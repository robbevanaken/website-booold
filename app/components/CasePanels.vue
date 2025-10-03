<template>
    <div class="c-case-panels o-container">
        <CasePanel 
            v-for="(caseItem, index) in cases" 
            :key="caseItem.id"
            :caseUrl="caseItem.url"
            :title="caseItem.title"
            :imageUrl="caseItem.imageUrl"
            :labels="caseItem.labels"
            :index="index"
            :total="cases.length"
            :classes="bgClasses[index]"
        ></CasePanel>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
    cases: {
        type: Array,
        default: []
    },
});

const bgClasses = ['bg-blue', 'bg-blue', 'bg-blue']

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    setTimeout(() => {
        
        function initStackingCardsParallax(){
            const cards = document.querySelectorAll("[data-stacking-cards-item]");
            
            if (cards.length < 2) return;

            cards.forEach((card, i) => {
                // Skip over the first section
                if (i === 0) return;
                
                // When current section is in view, target the PREVIOUS one
                const previousCard = cards[i - 1]
                if (!previousCard) return;
                
                let tl = gsap.timeline({
                    defaults:{
                        ease:"none",
                        duration: 1
                    },
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "top top",
                        scrub: true,
                        invalidateOnRefresh: true,
                    }
                })
                
                tl.fromTo(previousCard,{ 
                    yPercent: 0, 
                    filter: "blur(0px) saturate(100%)",
                    scale: 1
                },{ 
                    yPercent: 10, 
                    filter: "blur(3px) saturate(150%)",
                    scale: 0.97,
                })
            });
        }
        
        initStackingCardsParallax();
    }, 1000);
})
</script>