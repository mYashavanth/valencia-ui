document.addEventListener("DOMContentLoaded", () => {
  const locationBottomItems = document.querySelectorAll(".locationBottom-item");

  locationBottomItems.forEach((item) => {
    const question = item.querySelector(".locationBottom-question");
    const answer = item.querySelector(".locationBottom-answer");
    const icon = item.querySelector(".toggle-icon");

    question.addEventListener("click", () => {
      const isVisible = answer.style.display === "flex";

      // Remove the active class from all items
      locationBottomItems.forEach((locationBottom) => {
        locationBottom.querySelector(".locationBottom-answer").style.display =
          "none";
        locationBottom.querySelector(".toggle-icon").innerHTML = "&#10750;";
        locationBottom.classList.remove("active");
      });

      // Toggle the current item
      if (!isVisible) {
        answer.style.display = "flex";
        icon.innerHTML = "&#10751;";
        item.classList.add("active");
      }
    });
  });
});
