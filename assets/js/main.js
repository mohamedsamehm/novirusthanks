document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  /**
   * Sticky Navbar
   * Enable sticky behavior of navigation bar on page scroll
   */

  let navbar = document.querySelector(".navbar");

  if (navbar == null) return;

  let navbarClass = navbar.classList,
    navbarH = navbar.offsetHeight,
    scrollOffset = 500;

  if (navbarClass.contains("position-absolute")) {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.pageYOffset > scrollOffset) {
        navbar.classList.add("navbar-stuck");
      } else {
        navbar.classList.remove("navbar-stuck");
      }
    });
  } else {
    window.addEventListener("scroll", (e) => {
      if (e.currentTarget.pageYOffset > scrollOffset) {
        document.body.style.paddingTop = navbarH + "px";
        navbar.classList.add("navbar-stuck");
      } else {
        document.body.style.paddingTop = "";
        navbar.classList.remove("navbar-stuck");
      }
    });
  }

  /**
   * Toggle class collapsed for navbar-toggler
   */
  let navbarTogglerBtns = document.querySelectorAll(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");
  for (let index = 0; index < navbarTogglerBtns.length; index++) {
    const element = navbarTogglerBtns[index];
    element?.addEventListener("click", (event) => {
      element.classList.toggle("collapsed");
      navbarCollapse.classList.toggle("show");
    });
  }
});
