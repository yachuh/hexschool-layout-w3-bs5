//=== Nav Active Style ===//
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const currentActive = document.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    this.classList.add("active");
  });
});

// Set the active class for the current page URL
let currentUrl = window.location.href;

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentUrl) {
    navLinks[i].classList.add("active");
  }
}

//=== CK Editor JS plugin ===//
ClassicEditor.create(document.querySelector("#editor")).catch((error) => {
  console.error(error);
});
