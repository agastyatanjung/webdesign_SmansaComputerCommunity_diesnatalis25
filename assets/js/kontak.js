// DOM Elements
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const faqItems = document.querySelectorAll(".faq-item");

// FAQ Toggle Functionality
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close all other FAQ items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current FAQ item
    item.classList.toggle("active");
  });
});

// Form Submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !subject || !message) {
    showToast("Harap isi semua field yang diperlukan");
    return;
  }

  // In a real application, you would send the data to a server here
  // For this example, we'll just show a success message
  showToast("Terima kasih! Pesan Anda telah berhasil dikirim.");

  // Reset form
  contactForm.reset();
});

// Show Toast Notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 4000);
}
