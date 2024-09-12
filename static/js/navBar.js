document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinksLarge = document.querySelectorAll(".navBar .navLinks"); // Large screen nav links
  const navLinksSmall = document.querySelectorAll(".navBarMobile .navLinks"); // Small screen nav links
  const hamburgerBtn = document.querySelector(".navBtn.hamburger");
  const navbarToggle = document.getElementById("navbarToggleExternalContent");
  const navBarMobile = document.querySelector(".navBarMobile");

  function updateNavBar() {
    if (!navbarToggle.classList.contains("show")) {
      navBarMobile.style.backgroundColor = "white";
      hamburgerBtn.innerHTML = `<img src="./static/images/navBar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
    } else {
      navBarMobile.style.backgroundColor = "transparent";
      hamburgerBtn.innerHTML = `<img src="./static/images/navBar/hamburger.svg" alt="hamburger" style="width: 40px; height: 40px;" />`;
    }
  }

  function activateLink(navLinks) {
    let index = sections.length;

    // Activating the link based on scroll position
    while (--index && window.scrollY + 50 < sections[index].offsetTop + 250) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  // Initial activation for both large and small screen links
  activateLink(navLinksLarge);
  activateLink(navLinksSmall);

  window.addEventListener("scroll", function () {
    activateLink(navLinksLarge); // Large screen links
    activateLink(navLinksSmall); // Small screen links
  });

  // Smooth scrolling for large screen links
  navLinksLarge.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset =
          window.innerWidth > 1024 ? 10 : window.innerWidth <= 480 ? 180 : 90;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }
    });
  });

  // Smooth scrolling and closing the navbar for small screen links
  navLinksSmall.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset =
          window.innerWidth > 1024 ? 10 : window.innerWidth <= 480 ? 180 : 90;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }

      const bsCollapse = bootstrap.Collapse.getInstance(navbarToggle);
      if (bsCollapse) {
        bsCollapse.hide();
      }
      updateNavBar();
    });
  });

  hamburgerBtn.addEventListener("click", function () {
    if (!navbarToggle.classList.contains("show")) {
      navBarMobile.style.backgroundColor = "white";
      hamburgerBtn.innerHTML = `<img src="./static/images/navBar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
    } else {
      navBarMobile.style.backgroundColor = "transparent";
    }
  });

  navbarToggle.addEventListener("show.bs.collapse", function () {
    navBarMobile.style.backgroundColor = "white";
    hamburgerBtn.innerHTML = `<img src="./static/images/navBar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
  });

  navbarToggle.addEventListener("hidden.bs.collapse", function () {
    hamburgerBtn.innerHTML = `<img src="./static/images/navBar/hamburger.svg" alt="hamburger" style="width: 40px; height: 40px;" />`;
    if (window.scrollY === 0) {
      navBarMobile.style.backgroundColor = "transparent";
    }
  });
});

function closeDropdown() {
  var dropdown = document.getElementById("navbarToggleExternalContent");
  var bootstrapCollapse = new bootstrap.Collapse(dropdown, { toggle: false });
  if (dropdown.classList.contains("show")) {
    bootstrapCollapse.hide();
  }
}
