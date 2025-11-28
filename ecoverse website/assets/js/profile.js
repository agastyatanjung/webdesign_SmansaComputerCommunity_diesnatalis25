// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

if (hamburger && sidebar) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => sidebar.classList.remove("active"));
  });
}

// Tab Functionality
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    // Remove active class from all tabs
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked tab
    this.classList.add("active");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Show selected tab content
    document.getElementById(tabId).classList.add("active");
  });
});

// Add animation to cards when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});
// Enhanced tab functionality for mobile
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");

    // Remove active class from all tabs
    document.querySelectorAll(".tab-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked tab
    this.classList.add("active");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Show selected tab content
    document.getElementById(tabId).classList.add("active");

    // Scroll to top of tab content on mobile
    if (window.innerWidth <= 768) {
      document.getElementById(tabId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Handle window resize for tabs
window.addEventListener("resize", function () {
  const tabsNavigation = document.querySelector(".tabs-navigation");
  if (tabsNavigation && window.innerWidth > 768) {
    tabsNavigation.scrollLeft = 0;
  }
});

// Initialize tabs on load
document.addEventListener("DOMContentLoaded", function () {
  // Ensure first tab is active by default
  const firstTab = document.querySelector(".tab-button");
  if (firstTab && !document.querySelector(".tab-button.active")) {
    firstTab.classList.add("active");
  }
});
