document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navLinks");
  const hamburgerBtn = document.querySelector(".navBtn.hamburger");
  const navbarToggle = document.getElementById("navbarToggleExternalContent");
  const navBarMobile = document.querySelector(".navBarMobile");

  function updateNavBar() {
    if (!navbarToggle.classList.contains("show")) {
      navBarMobile.style.backgroundColor = "white";
      hamburgerBtn.innerHTML = `<img src="./static/images/navbar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
    } else {
      navBarMobile.style.backgroundColor = "transparent";
      hamburgerBtn.innerHTML = `<img src="./static/images/navbar/hamburger.svg" alt="hamburger" style="width: 40px; height: 40px;" />`;
    }
  }

  function activateLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop - 90) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  activateLink();

  window.addEventListener("scroll", activateLink);

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 90,
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
      hamburgerBtn.innerHTML = `<img src="./static/images/navbar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
    } else {
      navBarMobile.style.backgroundColor = "transparent";
    }
  });
  navbarToggle.addEventListener("show.bs.collapse", function () {
    navBarMobile.style.backgroundColor = "white";
    hamburgerBtn.innerHTML = `<img src="./static/images/navbar/crossBtn.svg" alt="close" style="width: 40px; height: 40px;" />`;
  });

  navbarToggle.addEventListener("hidden.bs.collapse", function () {
    hamburgerBtn.innerHTML = `<img src="./static/images/navbar/hamburger.svg" alt="hamburger" style="width: 40px; height: 40px;" />`;
    if (window.scrollY === 0) {
      navBarMobile.style.backgroundColor = "transparent";
    }
  });
});
