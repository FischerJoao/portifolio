document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Toggle menu
  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      hamburger.textContent = "☰";
    });
  });

  // Scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.style.padding = "15px 0";
      header.style.backgroundColor = "#2c3e50";
    } else {
      header.style.padding = "20px 0";
      header.style.backgroundColor = "#2c3e50";
    }
  });
});
