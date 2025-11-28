// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Category Tabs Functionality
  const tabs = document.querySelectorAll(".tab");
  const faqSections = document.querySelectorAll(".faq-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Update active tab
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-category");

      // Show/hide sections based on category
      faqSections.forEach((section) => {
        if (
          category === "all" ||
          section.getAttribute("data-category") === category
        ) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });

  // Search Functionality
  const searchInput = document.querySelector(".search-input");

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    faqItems.forEach((item) => {
      const question = item
        .querySelector(".question-text")
        .textContent.toLowerCase();
      const answer = item
        .querySelector(".faq-answer")
        .textContent.toLowerCase();

      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
