document.getElementById("floatingBarOpen").addEventListener("click", () => {
  document.querySelector(".floatingBar").style.right = "50%";
  document.querySelector(".floatingBar").style.transform = "translateX(50%)";
  document.querySelector("#floatingBarOpen").style.display = "none";
});

document.getElementById("floatingBarClose").addEventListener("click", () => {
  document.querySelector(".floatingBar").style.right = "-100%";
  document.querySelector(".floatingBar").style.transform = "none";
  document.querySelector("#floatingBarOpen").style.display = "block";
});
