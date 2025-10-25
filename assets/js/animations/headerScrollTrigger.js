import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHeaderScrollTrigger() {
    const header = document.querySelector('.c-header');
    
    if (!header) {
        console.warn('Header element not found');
        return;
    }

    function changeHeaderTheme(theme) {
        header.classList.remove('c-header--light', 'c-header--dark');
        header.classList.add(`c-header--${theme}`);
    }
    changeHeaderTheme('light');
    const sectionsWithTheme = document.querySelectorAll('[data-header-theme]');
    
    sectionsWithTheme.forEach((section) => {
        const theme = section.getAttribute('data-header-theme');
        
        ScrollTrigger.create({
            trigger: section,
            start: "top 100px",
            end: "bottom 100px",
            onEnter: () => changeHeaderTheme(theme),
            onEnterBack: () => changeHeaderTheme(theme),
            onLeave: () => {
                const nextSection = section.nextElementSibling;
                if (nextSection && nextSection.hasAttribute('data-header-theme')) {
                    changeHeaderTheme(nextSection.getAttribute('data-header-theme'));
                } else {
                    changeHeaderTheme('light'); 
                }
            },
            onLeaveBack: () => {
                const prevSection = section.previousElementSibling;
                if (prevSection && prevSection.hasAttribute('data-header-theme')) {
                    changeHeaderTheme(prevSection.getAttribute('data-header-theme'));
                } else {
                    changeHeaderTheme('light');
                }
            }
        });
    });
}