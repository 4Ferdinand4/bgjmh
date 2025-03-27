document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = '#222';
      } else {
        nav.style.backgroundColor = '#333';
      }
    });
  });