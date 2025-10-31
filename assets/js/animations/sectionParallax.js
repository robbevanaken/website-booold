import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initServiceCardsParallax() {
  document.querySelectorAll('[data-service-cards-parallax]').forEach(el => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'clamp(top bottom)',
        end: 'clamp(bottom top)',
        scrub: 1
      }
    });

    const label = el.querySelector('[data-service-cards-parallax-label]');
    const cards = el.querySelectorAll('[data-service-cards-parallax-card]');

    if (label) {
      tl.from(label, {
        yPercent: -15,
        ease: 'linear'
      });
    }

    if (cards.length > 0) {
      cards.forEach((card, index) => {
        const delay = index * 0.1;
        tl.from(card, {
          yPercent: -8 - (index * 2),
          ease: 'linear'
        }, delay);
      });
    }
  });
}

export function initSectionParallax() {
  initServiceCardsParallax();
}