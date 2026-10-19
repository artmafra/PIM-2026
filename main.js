const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-feedback').textContent =
    'Obrigado pela mensagem! Para falar conosco agora, escreva para contato@mataciliar.org.br.';
  event.currentTarget.reset();
});
