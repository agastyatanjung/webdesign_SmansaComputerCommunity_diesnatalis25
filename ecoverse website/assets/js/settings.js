// Toggle profile dropdown
document.getElementById("userProfile").addEventListener("click", function () {
  document.getElementById("profileDropdown").classList.toggle("active");
});

// Settings menu navigation
const menuLinks = document.querySelectorAll(".settings-menu a");
const contentSections = document.querySelectorAll(".content-section");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links and sections
    menuLinks.forEach((item) => item.classList.remove("active"));
    contentSections.forEach((section) => section.classList.remove("active"));

    // Add active class to clicked link
    this.classList.add("active");

    // Show corresponding section
    const target = this.getAttribute("data-target");
    document.getElementById(target).classList.add("active");

    // Close mobile menu if open
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});
