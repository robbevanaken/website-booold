import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

export function initLogoRevealloader(){
    gsap.registerPlugin(CustomEase, SplitText);
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

    // Get all elements with data-fade-in-text attribute for letter animation
    const fadeInTextElements = document.querySelectorAll('[data-fade-in-text]');
    const textSplits = [];

    // Split text elements into letters and store the splits
    fadeInTextElements.forEach(element => {
        const split = new SplitText(element, { type: "chars" });
        textSplits.push(split);
        gsap.set(split.chars, {
            opacity: 0,
            y: -0.05,
        });
    });

    gsap.set(sortedFadeInElements, {
        opacity: 0,
        y: -20,
    });

    const loadTimeline = gsap.timeline({ 
        defaults: { 
            ease: "c-loader",
            duration: 4
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
    .set(wrap,{ display: "none" })
    .call(animateFadeInElements, [sortedFadeInElements], "hideContent+=0.3")
    .call(animateTextElements, [textSplits], "hideContent+=0.5");
}

function animateFadeInElements(elements) {
    if (elements.length === 0) return;
    const fadeInTimeline = gsap.timeline();
    elements.forEach((element, index) => {
        fadeInTimeline.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
        }, index * 0.2); 
    });
}

function animateTextElements(textSplits) {
    if (textSplits.length === 0) return;
    
    textSplits.forEach((split, splitIndex) => {
        gsap.to(split.chars, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.03,
            delay: splitIndex * 0.2
        });
    });
}
