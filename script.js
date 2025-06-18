// Scroll fluide vers les sections
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Formulaire simulé (sans backend)

// Animation d'apparition au scroll
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
