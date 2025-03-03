// Mobile Menu Toggle
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerButton.addEventListener("click", function () {
  this.classList.toggle("hamburger-active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.remove("hamburger-active");
    mobileMenu.classList.remove("active");
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to top button
const scrollToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("opacity-100");
    scrollToTopButton.classList.remove("opacity-0");
    scrollToTopButton.classList.remove("pointer-events-none");
  } else {
    scrollToTopButton.classList.remove("opacity-100");
    scrollToTopButton.classList.add("opacity-0");
    scrollToTopButton.classList.add("pointer-events-none");
  }
});

// Lottie animations
document.addEventListener("DOMContentLoaded", function () {
  // Create animation placeholders (replace with actual Lottie animations)
  const aboutAnimation = lottie.loadAnimation({
    container: document.getElementById("about-animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets3.lottiefiles.com/packages/lf20_m9XqGE.json", // Replace with your animation
  });

  const portfolio1 = lottie.loadAnimation({
    container: document.getElementById("portfolio-1"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_UJNc2t.json", // Replace with your animation
  });

  const portfolio2 = lottie.loadAnimation({
    container: document.getElementById("portfolio-2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_NUWMKW.json", // Replace with your animation
  });

  const portfolio3 = lottie.loadAnimation({
    container: document.getElementById("portfolio-3"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_ZLgTGf.json", // Replace with your animation
  });
});