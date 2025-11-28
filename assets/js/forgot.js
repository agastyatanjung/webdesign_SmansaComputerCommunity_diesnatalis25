// Create background particles
function createParticles() {
  const container = document.getElementById("particles-container");
  const particleCount = 25;

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

// Form submission
document.getElementById("reset-btn").addEventListener("click", function () {
  const email = document.getElementById("reset-email").value;

  if (!email) {
    alert("Please enter your email address");
    return;
  }

  // Simulate API call
  this.disabled = true;
  this.textContent = "Sending...";

  setTimeout(() => {
    // Show success state
    document.getElementById("reset-form").style.display = "none";
    document.getElementById("success-state").style.display = "block";
  }, 1500);
});

// Resend link
document.getElementById("resend-btn").addEventListener("click", function () {
  this.disabled = true;
  this.textContent = "Sending...";

  setTimeout(() => {
    this.disabled = false;
    this.textContent = "Resend Link";
    alert("Reset link has been resent to your email");
  }, 1500);
});

// Initialize particles on load
window.addEventListener("load", createParticles);
