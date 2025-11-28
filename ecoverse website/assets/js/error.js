// Simple animation for the error code
document.addEventListener("DOMContentLoaded", function () {
  const errorCode = document.querySelector(".error-code");

  // Add a subtle pulsing animation
  setInterval(() => {
    errorCode.style.transform = "scale(1.05)";
    setTimeout(() => {
      errorCode.style.transform = "scale(1)";
    }, 300);
  }, 3000);

  // Check URL parameters for error type
  const urlParams = new URLSearchParams(window.location.search);
  const errorType = urlParams.get("type");

  if (errorType === "500") {
    errorCode.textContent = "500";
    document.querySelector("h1").textContent =
      "Our ecosystem is temporarily unstable";
    document.querySelector(".description").textContent =
      "We're experiencing some technical difficulties. Our team is working to restore balance to our digital ecosystem.";
  }
});
