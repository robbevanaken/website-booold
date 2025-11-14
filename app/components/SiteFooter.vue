<template>
    <div data-footer-parallax class="c-footer__wrapper">
        <footer data-footer-parallax-inner class="c-footer">
            <div class="c-footer__top">
                <div class="o-container o-grid">
                    <div class="col-span-12 md:col-span-6">

                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <Label
                            text="Contact"
                            classes="c-label--dark"
                        ></Label>
                        <ul class="c-footer__list">
                            <li class="c-footer__list-item">
                                <a href="mailto:hello@boooldstudio.com" target="_blank" aria-label="Booold Email"><span data-button-animate-chars="" >hello@boooldstudio.com</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-12 md:col-span-3">
                        <Label
                            text="Socials"
                            classes="c-label--dark"
                        ></Label>
                        <ul class="c-footer__list">
                            <li class="c-footer__list-item">
                                <a href="https://www.linkedin.com/company/booold/" target="_blank" aria-label="Booold Instagram"><span data-button-animate-chars="" >Linkedin</span></a>
                            </li>
                            <li class="c-footer__list-item">
                                <a href="https://www.instagram.com/boooldstudio/" target="_blank" aria-label="Booold Instagram"><span data-button-animate-chars="" >Instagram</span></a>
                            </li>
                            <li class="c-footer__list-item">
                                <a href="https://open.spotify.com/playlist/65vC87oYNWfBAg7MIE1ZZt?si=934630d01d7f4dfc" target="_blank" aria-label="Booold Spotify"><span data-button-animate-chars="" >Spotify</span></a>
                            </li>
                            <li class="c-footer__list-item">
                                <a href="tel:+32494487762" target="_blank" aria-label="Booold Whatsapp"><span data-button-animate-chars="" >Whatsapp</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="c-footer__bottom">
                <div class="o-container o-grid">
                    <div class="col-span-12">
                        <LogoStudio classes="c-footer__logo"></LogoStudio>
                    </div>
                    <div class="col-span-12">
                        <ul class="c-footer__list--sm">
                            <li><span>© 2025 — Robbe Van Aken</span></li>
                            <li class="c-footer__list-item--sm">
                                <a href="/terms-and-conditions"><span data-button-animate-chars="" >Terms & Conditions</span></a>
                            </li>
                            <li class="c-footer__list-item--sm">
                                <a href="/privacy-policy"><span data-button-animate-chars="" >Privacy Policy</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div data-footer-parallax-dark class="c-footer__wrap-dark"></div>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { initButtonCharacterStagger } from "../../assets/js/animations/textAnimations.js";

onMounted(() => {
  initButtonCharacterStagger();
});
</script>