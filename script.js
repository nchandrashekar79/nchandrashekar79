const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const signupForm = document.querySelector('.signup-form');
const formMessage = document.querySelector('.form-message');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? 'Close' : 'Menu';
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menu';
  });
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = signupForm.querySelector('input');
  formMessage.textContent = `Thanks — ${input.value} is on the list.`;
  input.value = '';
});