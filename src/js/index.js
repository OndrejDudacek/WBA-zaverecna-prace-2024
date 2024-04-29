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

// filter images function
function imageFilter(filter) {
  const images = document.querySelectorAll(".photo-gallery img");
  for (let image of images) {
    if (filter === "all") {
      image.style.display = "block";
    } else if (image.dataset.filter === filter) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }

  const previousActive = document.querySelector(
    ".gallery-filters button.active-filter"
  );
  previousActive.classList.remove("active-filter");
  previousActive.children[0].style.display = "none"; // https://www.geeksforgeeks.org/how-to-get-the-child-element-of-a-parent-using-javascript/

  const active = document.querySelector(
    `.gallery-filters button[data-filter="${filter}"]`
  );
  active.classList.add("active-filter");
  active.children[0].style.display = "initial";
}

const galleryFilters = document.querySelectorAll(".gallery-filters button");
for (let button of galleryFilters) {
  button.addEventListener("click", () => {
    const urlParams = new URLSearchParams(window.location.search); // https://www.youtube.com/watch?v=ug41_mF2dR8
    urlParams.set("filter", button.dataset.filter);
    const newUrl = `${window.location.origin}${
      window.location.pathname
    }?${urlParams.toString()}`;
    window.history.pushState({}, "", newUrl);
    imageFilter(button.dataset.filter);
  });
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
