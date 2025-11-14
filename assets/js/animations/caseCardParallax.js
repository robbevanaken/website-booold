import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCaseCardParallax() {
  const caseCards = document.querySelectorAll('.c-case-cards__thumbnail img');
  
  caseCards.forEach((img) => {
    gsap.fromTo(img, 
      { 
        y: "-12%",
      },
      {
        y: "12%",
        ease: "linear",
        scrollTrigger: {
          trigger: img.closest('.c-case-cards__thumbnail'),
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  });
}