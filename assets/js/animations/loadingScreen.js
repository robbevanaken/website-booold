import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

export function initLogoRevealloader(){
    gsap.registerPlugin(CustomEase);
    CustomEase.create("c-loader", "0.65, 0.01, 0.05, 0.99");
    const wrap = document.querySelector("[data-load-wrap]");
    if (!wrap) return;

    const container = wrap.querySelector("[data-load-container]");
    const bg = wrap.querySelector("[data-load-bg]");
    const progressBar = wrap.querySelector("[data-load-progress]");
    const logo = wrap.querySelector("[data-load-logo]");
    const body = document.querySelector('body');

    // Get all elements with data-fadein attribute and sort by value
    const fadeInElements = document.querySelectorAll('[data-fadein]');
    const sortedFadeInElements = Array.from(fadeInElements).sort((a, b) => {
        return parseInt(a.dataset.fadein) - parseInt(b.dataset.fadein);
    });

    // Initially hide fade-in elements
    gsap.set(sortedFadeInElements, {
        opacity: 0,
        y: 30 // Start position - you can adjust this
    });

    // Main c-loader timeline
    const loadTimeline = gsap.timeline({ 
        defaults: { 
            ease: "c-loader",
            duration: 3
        },
        onComplete: () => {
            // Animate fade-in elements after loader completes
            animateFadeInElements(sortedFadeInElements);
        }
    })
    .set(wrap,{ display: "block" })
    .to(progressBar, { scaleX: 1 })
    .to(logo, { clipPath:"inset(0% 0% 0% 0%)" }, "<")
    .set(body, {overflow: "auto"})
    .to(container,{ autoAlpha: 0, duration: 0.5 })
    .to(progressBar,{ scaleX: 0, transformOrigin: "right center", duration: 0.5},"<")
    .add("hideContent", "<")
    .to(bg, { opacity: 0, duration: 1 },"hideContent")
    .set(wrap,{ display: "none" });
}

function animateFadeInElements(elements) {
    if (elements.length === 0) return;

    // Create a timeline for the fade-in animations
    const fadeInTimeline = gsap.timeline();

    // Animate each element in sequence
    elements.forEach((element, index) => {
        fadeInTimeline.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        }, index * 0.15); 
    });
}