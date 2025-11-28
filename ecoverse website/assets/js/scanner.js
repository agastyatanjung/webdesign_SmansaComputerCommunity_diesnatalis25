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
// Toggle profile dropdown
document.getElementById("userProfile").addEventListener("click", function () {
  document.getElementById("profileDropdown").classList.toggle("active");
});
// Close dropdowns when clicking elsewhere
document.addEventListener("click", function (event) {
  const profileDropdown = document.getElementById("profileDropdown");
  const userProfile = document.getElementById("userProfile");
  const navLinks = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  if (!userProfile.contains(event.target)) {
    profileDropdown.classList.remove("active");
  }

  if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});

// DOM Elements
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const resultSection = document.getElementById("resultSection");
const scanAgainBtn = document.getElementById("scanAgainBtn");

// Event Listeners
uploadArea.addEventListener("click", () => {
  fileInput.click();
});

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    // Simulate AI processing delay
    uploadArea.innerHTML = `
                    <div class="upload-icon">
                        <i class="fas fa-spinner fa-spin"></i>
                    </div>
                    <div class="upload-text">Menganalisis gambar...</div>
                `;

    setTimeout(() => {
      // Show results after "processing"
      resultSection.classList.add("active");

      // Scroll to results
      resultSection.scrollIntoView({ behavior: "smooth" });

      // Animate progress bars
      document.querySelectorAll(".progress-fill").forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }, 2000);
  }
});

scanAgainBtn.addEventListener("click", () => {
  // Reset the upload area
  uploadArea.innerHTML = `
                <div class="upload-icon">
                    <i class="fas fa-cloud-upload-alt"></i>
                </div>
                <div class="upload-text">Drag & Drop gambar di sini</div>
                <div class="upload-hint">Atau klik untuk memilih file</div>
            `;

  // Hide results
  resultSection.classList.remove("active");

  // Reset file input
  fileInput.value = "";

  // Scroll back to scan section
  document
    .querySelector(".scan-section")
    .scrollIntoView({ behavior: "smooth" });
});

// Drag and drop functionality
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadArea.style.background = "rgba(216, 245, 218, 0.7)";
});

uploadArea.addEventListener("dragleave", () => {
  uploadArea.style.background = "rgba(216, 245, 218, 0.3)";
});

uploadArea.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadArea.style.background = "rgba(216, 245, 218, 0.3)";

  if (e.dataTransfer.files.length > 0) {
    fileInput.files = e.dataTransfer.files;

    // Trigger the change event
    const event = new Event("change");
    fileInput.dispatchEvent(event);
  }
});
