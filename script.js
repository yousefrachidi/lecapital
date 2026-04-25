// Hero slider
const slides = document.querySelectorAll('.hero__person-img');
const dots = document.querySelectorAll('.hero__dot');
let current = 0;
let sliderInterval;

function goToSlide(index) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function nextSlide() {
  goToSlide((current + 1) % slides.length);
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 4500);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(sliderInterval);
    goToSlide(parseInt(dot.dataset.index));
    startSlider();
  });
});

startSlider();

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.cat-card, .why__card, .testi__card, .about__card, .contact__item, .stat'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Smooth nav close on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) mobileMenu.classList.remove('open');
});
