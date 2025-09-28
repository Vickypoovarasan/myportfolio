
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Close nav after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});


//   typewritter hero section

document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast", "Creative Problem Solver"];
  const span = document.getElementById("fade-text");
  let i = 0;

  setInterval(() => {
    span.style.opacity = 0;
    setTimeout(() => {
      span.textContent = texts[i];
      span.style.opacity = 1;
      i = (i + 1) % texts.length;
    }, 500);
  }, 3000);
});




