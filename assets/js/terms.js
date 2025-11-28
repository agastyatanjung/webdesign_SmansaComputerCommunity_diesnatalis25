// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const accordion = this.parentElement;
    const isActive = accordion.classList.contains("active");

    // Close all accordions
    document
      .querySelectorAll(".accordion")
      .forEach((acc) => acc.classList.remove("active"));

    // If clicked accordion wasn't active, open it
    if (!isActive) {
      accordion.classList.add("active");
    }
  });
});

// Side navigation functionality
document.querySelectorAll(".side-nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Update active link
    document
      .querySelectorAll(".side-nav-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    // Scroll to section
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", function () {
  const termsSection = document.getElementById("terms");
  const privacySection = document.getElementById("privacy");

  const termsOffset = termsSection.offsetTop - 150;
  const privacyOffset = privacySection.offsetTop - 150;
  const scrollPosition = window.scrollY;

  const termsLink = document.querySelector('.side-nav-link[href="#terms"]');
  const privacyLink = document.querySelector('.side-nav-link[href="#privacy"]');

  if (scrollPosition >= privacyOffset) {
    termsLink.classList.remove("active");
    privacyLink.classList.add("active");
  } else if (scrollPosition >= termsOffset) {
    termsLink.classList.add("active");
    privacyLink.classList.remove("active");
  }
});
