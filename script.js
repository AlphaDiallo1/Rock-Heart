document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  const body = document.body;
  const heroImage = document.querySelector('.hero-image'); // Select the .hero-image element

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

    // Fading effect on hero image based on scroll position
    const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const opacity = Math.max(1 - (scrollPercentage / 50), 0); // Start fading after 0% scroll, fully fade at 50%

    heroImage.style.opacity = opacity;
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
