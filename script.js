document.addEventListener('DOMContentLoaded', () => {
    // Scroll to Top
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
      scrollToTopButton.classList.toggle('opacity-100', window.scrollY > 300);
    });
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
      // Hamburger Menu
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
  
      hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('hidden'); // Toggle 'hidden' class for Tailwind
          navLinks.classList.toggle('flex');
      });
  
        // Close menu when clicking a link (optional, but good for usability)
       document.querySelectorAll('.nav-links a').forEach(link => {
          link.addEventListener('click', () => {
             if (window.innerWidth <= 768) { // Only close on mobile
               navLinks.classList.add('hidden');
               navLinks.classList.remove('flex');
             }
          });
      });
         //  Active Navigation Links
      function onNavItemClick(entries)
      {
          entries.forEach(entry => {
              if(entry.isIntersecting)
              {
                  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'))
                  document.querySelector(`.nav-link[href='#${entry.target.id}']`).classList.add('active')
              }
          })
  
      }
  
      const observerOptions = {
          root: null, // use the viewport
          threshold: 0.25, // 25% of the element must be visible
      };
  
      const observer = new IntersectionObserver(onNavItemClick, observerOptions)
      const sections = document.querySelectorAll('section')
      sections.forEach(section => observer.observe(section))
  
  
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Simulate submission (replace with actual server-side handling)
      console.log('Form Data:', { name, email, message });
      alert('Message sent! (Simulated)');
      contactForm.reset();
    });
  
    // Intersection Observer for Animations
      const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-up, .animate-slide-in-left, .animate-slide-in-right, .animate-zoom-in');
      const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Trigger animation
                  animationObserver.unobserve(entry.target);
              }
          });
      }, {
          rootMargin: '-50px 0px -50px 0px',
      });
  
      animatedElements.forEach(el => animationObserver.observe(el));
  
      // Load Lottie animations (example - replace with your URLs)
  
      loadLottieAnimation('about-animation', 'https://lottie.host/97549763-0927-455f-b64a-e9a880a60148/yJO1UrbWIZ.json');
      loadLottieAnimation('portfolio-1', 'https://lottie.host/5347c1f2-7b81-4b38-a6d5-2b7599a1e843/uXl9r3Q0d3.json');
      loadLottieAnimation('portfolio-2', 'https://lottie.host/bf687660-2454-493c-874d-c9de87e77cea/K6s4eD9FJs.json');
      loadLottieAnimation('portfolio-3', 'https://lottie.host/6522063f-95f7-4288-a819-7598a4959b86/G6N95x7V0k.json');
  
        function loadLottieAnimation(elementId, animationURL) {
          const element = document.getElementById(elementId);
          if (element) {
              const animation = lottie.loadAnimation({
                  container: element,
                  renderer: 'svg',
                  loop: true,
                  autoplay: true,
                  path: animationURL,
              });
          }
      }
  });