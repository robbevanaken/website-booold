import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

export function initLogoRevealloader(){
    gsap.registerPlugin(CustomEase);
    CustomEase.create("c-loader", "0.65, 0.01, 0.05, 0.99");
    console.log('test');
    const wrap = document.querySelector("[data-load-wrap]");
    if (!wrap) return;

    const container = wrap.querySelector("[data-load-container]");
    const bg = wrap.querySelector("[data-load-bg]");
    const progressBar = wrap.querySelector("[data-load-progress]");
    const logo = wrap.querySelector("[data-load-logo]");

    // Main c-loader timeline
    const loadTimeline = gsap.timeline({ 
        defaults: { 
        ease: "c-loader",
        duration: 3
        }
    })
    .set(wrap,{ display: "block" })
    .to(progressBar, { scaleX: 1 })
    .to(logo, { clipPath:"inset(0% 0% 0% 0%)" }, "<")
    .to(container,{ autoAlpha: 0, duration: 0.5 })
    .to(progressBar,{ scaleX: 0, transformOrigin: "right center", duration: 0.5},"<")
    .add("hideContent", "<")
    .to(bg, { yPercent: -101, duration: 1 },"hideContent")
    .set(wrap,{ display: "none" })
}
