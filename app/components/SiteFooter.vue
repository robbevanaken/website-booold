<template>
    <footer class="c-footer">
        <div class="c-footer__top">
            <div class="o-container o-grid">
                <div class="col-span-12 md:col-span-6">
                    <Label
                        text="Contact"
                        classes="c-label--light"
                    ></Label>
                    <ul class="c-footer__list">
                        <li class="c-footer__list-item">
                            <a href="mailto:hello@boooldstudio.com" target="_blank" aria-label="Booold Email"><span data-button-animate-chars="" >hello@boooldstudio.com</span></a>
                        </li>
                        <li class="c-footer__list-item">
                            <a href="tel:+32 494 48 77 62" target="_blank" aria-label="Booold Tel"><span data-button-animate-chars="" >+32 494 48 77 62</span></a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <Label
                        text="Socials"
                        classes="c-label--light"
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
                            <a href="whatsapp.com" target="_blank" aria-label="Booold Whatsapp"><span data-button-animate-chars="" >Whatsapp</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="c-footer__bottom">
            <div class="o-container o-grid">
                <div class="col-span-12">
                    <ul class="c-footer__list--sm">
                        <li><span>© 2025 — Robbe Van Aken</span></li>
                        <li class="c-footer__list-item--sm">
                            <a href=""><span data-button-animate-chars="" >Terms & Conditions</span></a>
                        </li>
                        <li class="c-footer__list-item--sm">
                            <a href=""><span data-button-animate-chars="" >Privacy Policy</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
function initButtonCharacterStagger() {
  const offsetIncrement = 0.01; 
  const buttons = document.querySelectorAll('[data-button-animate-chars]');

  buttons.forEach(button => {
    const text = button.textContent; 
    button.innerHTML = ''; 

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      if (char === ' ') {
        span.style.whiteSpace = 'pre'; 
      }

      button.appendChild(span);
    });
  });
}

onMounted(() => {
  initButtonCharacterStagger();
});
</script>