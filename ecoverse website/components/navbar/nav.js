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
