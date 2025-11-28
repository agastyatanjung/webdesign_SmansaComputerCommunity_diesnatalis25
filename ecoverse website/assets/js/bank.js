// DOM Elements
const modalOverlay = document.getElementById("modalOverlay");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const cancelBtn = document.getElementById("cancelBtn");
const depositForm = document.getElementById("depositForm");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const categoryItems = document.querySelectorAll(".category-item");
const subcategorySelect = document.getElementById("subcategory");

// Category icons mapping
const categoryIcons = {
  plastic: "fas fa-wine-bottle",
  paper: "fas fa-newspaper",
  glass: "fas fa-glass-whiskey",
  organic: "fas fa-leaf",
  metal: "fas fa-cube",
  "e-waste": "fas fa-laptop",
};

// Category titles mapping
const categoryTitles = {
  plastic: "Deposit Plastic",
  paper: "Deposit Paper",
  glass: "Deposit Glass",
  organic: "Deposit Organic",
  metal: "Deposit Metal",
  "e-waste": "Deposit E-Waste",
};

// Subcategory options mapping
const subcategoryOptions = {
  plastic: [
    { value: "bottles", text: "Plastic Bottles" },
    { value: "containers", text: "Containers" },
    { value: "packaging", text: "Packaging" },
    { value: "other", text: "Other" },
  ],
  paper: [
    { value: "newspaper", text: "Newspaper" },
    { value: "cardboard", text: "Cardboard" },
    { value: "office_paper", text: "Office Paper" },
    { value: "other", text: "Other" },
  ],
  glass: [
    { value: "bottles", text: "Glass Bottles" },
    { value: "jars", text: "Jars" },
    { value: "other", text: "Other" },
  ],
  organic: [
    { value: "food_waste", text: "Food Waste" },
    { value: "yard_waste", text: "Yard Waste" },
    { value: "other", text: "Other" },
  ],
  metal: [
    { value: "aluminum", text: "Aluminum" },
    { value: "steel", text: "Steel" },
    { value: "other", text: "Other" },
  ],
  "e-waste": [
    { value: "phones", text: "Phones" },
    { value: "laptops", text: "Laptops" },
    { value: "batteries", text: "Batteries" },
    { value: "other", text: "Other" },
  ],
};

// Current selected category
let currentCategory = "plastic";

// Event Listeners
categoryItems.forEach((item) => {
  item.addEventListener("click", () => {
    currentCategory = item.getAttribute("data-category");
    openModal(currentCategory);
  });
});

cancelBtn.addEventListener("click", hideModal);

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.getElementById("amount").value;
  const subcategory = document.getElementById("subcategory").value;

  // In a real app, this would be an API call
  processDeposit(currentCategory, amount, subcategory);
});

// Functions
function openModal(category) {
  // Update modal content based on category
  modalIcon.innerHTML = `<i class="${categoryIcons[category]}"></i>`;
  modalTitle.textContent = categoryTitles[category];

  // Update subcategory options
  updateSubcategoryOptions(category);

  // Show modal
  modalOverlay.classList.add("active");
}

function hideModal() {
  modalOverlay.classList.remove("active");
  depositForm.reset();
}

function updateSubcategoryOptions(category) {
  // Clear existing options
  subcategorySelect.innerHTML = "";

  // Add new options based on category
  subcategoryOptions[category].forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    subcategorySelect.appendChild(optionElement);
  });
}

function processDeposit(category, amount, subcategory) {
  // Calculate points (in a real app, this would be done server-side)
  const points = Math.round(amount * 20); // 20 points per kg

  // Show success message
  showToast(`Deposit confirmed! +${points} Eco Points`);

  // Close modal
  hideModal();

  // In a real app, you would update the UI with the new transaction
  // and refresh the balance
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3000);
}

// Close modal when clicking outside
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    hideModal();
  }
});

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Any initialization code would go here
});

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
