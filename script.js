// script.js
document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const body = document.body;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling Down
      body.classList.add('scrolling-down');
      body.classList.remove('scrolling-up');
    } else {
      // Scrolling Up
      body.classList.add('scrolling-up');
      body.classList.remove('scrolling-down');
    }
    lastScrollTop = scrollTop;
  });

  // Add stars to the header
  const header = document.querySelector('header');
  const numStars = 100; // Adjust the number of stars

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = Math.random() * 10 + 5 + 's';
    header.appendChild(star);
  }
});
