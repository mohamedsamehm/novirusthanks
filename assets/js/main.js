document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  /**
   * Sticky Navbar
   * Enable sticky behavior of navigation bar on page scroll
   */

  let navbar = document.querySelector(".navbar");
  let topBar = document.querySelector(".top-bar");

  if (navbar == null) return;

  let topBarH = topBar.offsetHeight;

  window.addEventListener("scroll", (e) => {
    navbar.classList.toggle(
      "navbar-stuck",
      e.currentTarget.pageYOffset > topBarH
    );
  });

  /**
   * Toggle class collapsed for navbar-toggler
   */
  let navbarTogglerBtns = document.querySelectorAll(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");
  for (let index = 0; index < navbarTogglerBtns.length; index++) {
    const element = navbarTogglerBtns[index];
    element?.addEventListener("click", (event) => {
      event.stopPropagation();
      element.classList.toggle("collapsed");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.add("collapsing");
      }
      navbarCollapse.classList.toggle("show");
    });
  }
  /**
   * Stop Propagation onclick on navbar-collapse
   */
  navbarCollapse.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  /**
   * Close navbar-collpase onclick on widnow
   */
  window.addEventListener("click", (e) => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.add("collapsing");
    }
    navbarCollapse.classList.remove("show");
  });

  /**
   * Toggle Dropdown Menu
   */
  let dropdownToggleBtns = document.querySelectorAll(".dropdown-toggle");
  for (let index = 0; index < dropdownToggleBtns.length; index++) {
    const element = dropdownToggleBtns[index];
    element?.addEventListener("click", (event) => {
      event.preventDefault();
      element.classList.toggle("show");
    });
  }
  /**
   * Accordion
   */
  document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle("active");

      if (button.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = 0;
      }

      // Close other open accordion items
      document.querySelectorAll(".accordion-header").forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("active");
          otherButton.nextElementSibling.style.maxHeight = 0;
        }
      });
    });
  });
});
