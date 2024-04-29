// Side line dots position
const isInViewport = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-side-line-dot");
    } else {
      entry.target.classList.remove("active-side-line-dot");
    }
  }
});
let dots = document.querySelectorAll(".side-line-dot");
for (let dot of dots) {
  isInViewport.observe(dot);
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenuIcon = document.querySelector(
    "section.hamburger-menu-icon"
  );
  const textPageLinks = document.querySelector("ul.text-page-links");
  hamburgerMenuIcon.addEventListener("click", () => {
    textPageLinks.classList.toggle("active");
    hamburgerMenuIcon.classList.toggle("active");
  });
});
