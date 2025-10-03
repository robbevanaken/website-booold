export async function initLocomotiveScroll() {
    if (typeof document === 'undefined') return;

    try {
        // Dynamically import LocomotiveScroll only on the client
        const LocomotiveScrollModule = await import('locomotive-scroll');
        const LocomotiveScroll = LocomotiveScrollModule.default;

        // Additional check to ensure we have the constructor
        if (!LocomotiveScroll || typeof LocomotiveScroll !== 'function') {
            console.warn('LocomotiveScroll not available');
            return null;
        }

        // Check if the container element exists (or use body as default)
        const scrollContainer = document.querySelector('[data-scroll-container]') || document.body;

        if (!scrollContainer) {
            console.warn('No scroll container found');
            return null;
        }

        const locomotiveScroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            scrollFromAnywhere: false,
            touchMultiplier: 2,
            firefoxMultiplier: 50,
            getSpeed: true,
            getDirection: true,
        });

        // Make instance globally available for GSAP integration
        window.locomotiveScroll = locomotiveScroll;

        return locomotiveScroll;
    } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
        return null;
    }
}