!(() => {

  class CodeComponent extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `
        <p class="d-flex">
          <ion-skeleton-text class="sk sk-small sk-keycode"></ion-skeleton-text>
          <ion-skeleton-text class="sk sk-medium ion-margin-start"></ion-skeleton-text>
        </p>

        <p class="d-flex ident">
          <ion-skeleton-text class="sk sk-small sk-var"></ion-skeleton-text>
          <ion-skeleton-text class="sk sk-medium ion-margin-start"></ion-skeleton-text>
        </p>

        <p class="d-flex>
          <ion-skeleton-text class="sk sk-medium"></ion-skeleton-text>
          <ion-skeleton-text class="sk sk-medium ion-margin-start"></ion-skeleton-text>
        </p>

        <p class="d-flex ident">
          <ion-skeleton-text class="sk sk-large"></ion-skeleton-text>
          <ion-skeleton-text class="sk sk-medium ion-margin-start"></ion-skeleton-text>
          <ion-skeleton-text class="sk sk-large ion-margin-start"></ion-skeleton-text>
        </p>
      `;
    }

  }

  customElements.define('app-code', CodeComponent);


  /**
   * 
   */
  const bash = document.querySelector('.bash');
  const lines = [
    '',
    '--dev',
    '--ruby',
    '--rails',
    '--python',
    '--php',
    '--app',
    '--pwa',
    ';)'
  ];

  async function terminal() {
    await sleep(2500);

    for (let line of lines) {   
      bash.textContent = 'igor ';
      for (let char of [...line]) {
        bash.textContent += char;
        await sleep(350);
      }

      await sleep(500);

      for (let _ of [...line]) {
        const content = bash.textContent.split('')
        content.pop();
        bash.textContent = content.join('');
        await sleep(150);
      }
    }

    terminal();
  }

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  } 

  terminal();

  /**
   * 
   */
  const toggleTheme = document.querySelector('.toggle-theme');
  
  toggleTheme.addEventListener('click', (evt) => {
    const icon = toggleTheme.querySelector('ion-icon');

    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      icon.setAttribute('name', 'moon-outline');
    } else {
      document.body.classList.add('dark');
      icon.setAttribute('name', 'sunny-outline');
    }
  });
})()