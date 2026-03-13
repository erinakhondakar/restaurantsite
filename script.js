function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (slides.length === 0) return;

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

if (slides.length > 0) {
  showSlide(currentSlide);
}