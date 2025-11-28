// Create background particles
function createParticles() {
  const container = document.getElementById("particles-container");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 4 + 2;
    const delay = Math.random() * 15;

    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);
  }
}

// Tab switching functionality
document.querySelectorAll(".form-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    // Update active tab
    document
      .querySelectorAll(".form-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");

    // Show corresponding form
    const tabName = this.getAttribute("data-tab");
    document
      .querySelectorAll(".form")
      .forEach((form) => form.classList.remove("active"));
    document.getElementById(`${tabName}-form`).classList.add("active");
  });
});

// Switch between forms via links
document
  .querySelector(".switch-to-register")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.form-tab[data-tab="register"]').click();
  });

document
  .querySelector(".switch-to-login")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('.form-tab[data-tab="login"]').click();
  });

// Form validation and submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // Add login logic here
  alert("Login functionality would be implemented here");
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add registration logic here
    alert("Registration functionality would be implemented here");
  });

// Initialize particles on load
window.addEventListener("load", createParticles);
