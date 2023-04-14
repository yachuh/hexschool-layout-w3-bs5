"use strict";

//=== Nav Active Style ===//
var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var currentActive = document.querySelector(".active");

    if (currentActive) {
      currentActive.classList.remove("active");
    }

    this.classList.add("active");
  });
}); // Set the active class for the current page URL

var currentUrl = window.location.href;

for (var i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentUrl) {
    navLinks[i].classList.add("active");
  }
} //=== CK Editor JS plugin ===//


ClassicEditor.create(document.querySelector("#editor"))["catch"](function (error) {
  console.error(error);
});
//# sourceMappingURL=all.js.map
