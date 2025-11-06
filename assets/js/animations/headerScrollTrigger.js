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
        header.classList.remove('c-header--light', 'c-header--dark', 'c-header--hide');
        header.classList.add(`c-header--${theme}`);
        body.classList.remove('c-body--light', 'c-body--dark', 'c-body--hide');
        body.classList.add(`c-body--${theme}`);
    }
    changeTheme('hide');
    const sectionsWithTheme = document.querySelectorAll('[data-theme]');
    
    sectionsWithTheme.forEach((section) => {
        const theme = section.getAttribute('data-theme');
        
        ScrollTrigger.create({
            trigger: section,
            start: "top 100px",
            end: "bottom 100px",
            onEnter: () => changeTheme(theme),
            onEnterBack: () => changeTheme(theme),
            onLeave: () => {
                const nextSection = section.nextElementSibling;
                if (nextSection && nextSection.hasAttribute('data-theme')) {
                    changeTheme(nextSection.getAttribute('data-theme'));
                } else {
                    changeTheme('hide'); 
                }
            },
            onLeaveBack: () => {
                const prevSection = section.previousElementSibling;
                if (prevSection && prevSection.hasAttribute('data-theme')) {
                    changeTheme(prevSection.getAttribute('data-theme'));
                } else {
                    changeTheme('hide');
                }
            }
        });
    });
}