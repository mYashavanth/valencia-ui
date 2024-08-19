getinTouch = document.getElementById("tsGetinTouchToggleClassBtn");
FormDataContiner = document.querySelector(".tsFormContainer");

// function checkScreenWidth() {
//   if (window.innerWidth > 1024) {
//     FormDataContiner.classList.add("active");
//     getinTouch.classList.add("active");
//     getinTouch.innerHTML = "Close";
//   } else {
//     FormDataContiner.classList.remove("active");
//     getinTouch.classList.remove("active");
//     getinTouch.innerHTML = "Get in Touch";
//   }
// }

// checkScreenWidth();

// window.addEventListener("resize", checkScreenWidth);

getinTouch.addEventListener("click", () => {
  FormDataContiner.classList.toggle("active");
  getinTouch.classList.toggle("active");
  if (FormDataContiner.classList.contains("active")) {
    getinTouch.innerHTML = "Close";
  } else {
    getinTouch.innerHTML = "Get in Touch";
  }
});
