document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".toggle-icon");

    question.addEventListener("click", () => {
      const answer = item.querySelector(".faq-answer");

      // Toggle the answer display
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";

      // Toggle the icon between + and -
      icon.innerHTML = isVisible ? "&#10750;" : "&#10540;";
    });
  });
});
