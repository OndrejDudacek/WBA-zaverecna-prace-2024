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
    } else if (image.alt === filter) {
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
    `.gallery-filters button[value="${filter}"]`
  );
  active.classList.add("active-filter");
  active.children[0].style.display = "initial";
}

const galleryFilters = document.querySelectorAll(".gallery-filters button");
for (let filter of galleryFilters) {
  filter.addEventListener("click", () => {
    imageFilter(filter.value);
  });
}

const indexImageFilterButtons = document.querySelectorAll(
  "button.redirect-and-start-image-filter"
);
for (let button of indexImageFilterButtons) {
  button.addEventListener("click", () => {
    window.location.href =
      "../views/photography.html" + "?filter=" + button.value;
  });
}
