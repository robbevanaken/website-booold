<template>
  <header class="c-header c-header--light">
    <div class="o-container o-grid">
      <div class="c-header__body-logo col-span-6">
        <LogoBooold classes="c-header__logo"></LogoBooold>
      </div>
      <div data-fadein="2" class="col-span-2">
        <a class="c-header__nav-item" href=""><span data-button-animate-chars="" >Work (2)</span></a>
      </div>
      <div data-fadein="3" class="col-span-2">
        <a class="c-header__nav-item" href=""><span data-button-animate-chars="" >Contact</span></a>
      </div>
      <div data-fadein="4" class="col-span-2">
        <a class="c-header__nav-item" href=""><span data-button-animate-chars="" >Resumé</span></a>
      </div>
    </div>
  </header>
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