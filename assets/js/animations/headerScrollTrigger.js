import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initThemeScrollTrigger() {
    const header = document.querySelector('.c-header');
    const body = document.querySelector('body');
    
    if (!header) {
        console.warn('Header element not found');
        return;
    }

    function changeTheme(theme) {
        header.classList.remove('c-header--light', 'c-header--dark');
        header.classList.add(`c-header--${theme}`);
        body.classList.remove('c-body--light', 'c-body--dark');
        body.classList.add(`c-body--${theme}`);
    }
    changeTheme('light');
    const sectionsWithTheme = document.querySelectorAll('[data-header-theme]');
    
    sectionsWithTheme.forEach((section) => {
        const theme = section.getAttribute('data-header-theme');
        
        ScrollTrigger.create({
            trigger: section,
            start: "top 100px",
            end: "bottom 100px",
            onEnter: () => changeTheme(theme),
            onEnterBack: () => changeTheme(theme),
            onLeave: () => {
                const nextSection = section.nextElementSibling;
                if (nextSection && nextSection.hasAttribute('data-header-theme')) {
                    changeTheme(nextSection.getAttribute('data-header-theme'));
                } else {
                    changeTheme('light'); 
                }
            },
            onLeaveBack: () => {
                const prevSection = section.previousElementSibling;
                if (prevSection && prevSection.hasAttribute('data-header-theme')) {
                    changeTheme(prevSection.getAttribute('data-header-theme'));
                } else {
                    changeTheme('light');
                }
            }
        });
    });
}