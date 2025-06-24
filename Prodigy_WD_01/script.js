// Sticky Header on Scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');
  header.classList.toggle('sticky', window.scrollY > 50);
  backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// CTA Button Click Event
document.getElementById('ctaButton').addEventListener('click', () => {
  alert('Thanks for exploring WebVibe!');
  console.log('CTA button clicked');
});

// Back to Top Button
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight active nav link based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
