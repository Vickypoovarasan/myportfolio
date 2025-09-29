
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




