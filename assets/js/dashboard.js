// Initialize the calendar with no empty days
function initializeCalendar() {
  const calendarDays = document.getElementById("calendarDays");
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Get number of days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Adjust for Monday as first day of week
  let startDay = firstDay === 0 ? 6 : firstDay - 1;

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.className = "calendar-day";
    dayElement.textContent = i;
    dayElement.setAttribute("data-day", i);

    // Mark previous days as active (for demo - in real app, this would come from user data)
    if (i <= currentStreak) {
      dayElement.classList.add("active");
    }

    calendarDays.appendChild(dayElement);
  }
}

// Streak functionality
const streakCount = document.getElementById("streakCount");
const activateStreakBtn = document.getElementById("activateStreak");
const totalPoints = document.getElementById("totalPoints");

let currentStreak = 4;
let points = 540;

function activateStreak() {
  // Increment streak
  currentStreak++;
  streakCount.textContent = currentStreak + " Hari";

  // Update calendar to reflect the new streak
  updateCalendar();

  // Add to history and points
  addToHistory();

  // Update button text and style
  activateStreakBtn.textContent = "Streak Hari Ini Aktif!";
  activateStreakBtn.style.background = "#ff9a00";
}

function updateCalendar() {
  const calendarDays = document.querySelectorAll(".calendar-day");

  // Reset all days
  calendarDays.forEach((day) => {
    day.classList.remove("active");
  });

  // Activate days based on current streak
  for (let i = 0; i < currentStreak && i < calendarDays.length; i++) {
    calendarDays[i].classList.add("active");
  }
}

function addToHistory() {
  const historyList = document.querySelector(".history-list");

  // Add 5 points for streak activation
  points += 5;
  totalPoints.textContent = points;

  // Create a new history item
  const historyItem = document.createElement("div");
  historyItem.className = "history-item";
  historyItem.innerHTML = `
                <div class="history-date">Hari Ini</div>
                <div class="history-activity">Aktivitas Ramah Lingkungan</div>
                <div class="history-points">+5 poin</div>
                <div class="history-status active">🔥</div>
            `;

  // Add to the top of the history list
  historyList.prepend(historyItem);

  // If there are more than 4 items, remove the last one
  if (historyList.children.length > 4) {
    historyList.removeChild(historyList.lastChild);
  }
}

// Event listeners
activateStreakBtn.addEventListener("click", activateStreak);

// Initialize the page
document.addEventListener("DOMContentLoaded", initializeCalendar);

// Promo Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const sliderContainer = document.getElementById("sliderContainer");
const sliderIndicators = document.getElementById("sliderIndicators");

// Create indicators
slides.forEach((_, index) => {
  const indicator = document.createElement("div");
  indicator.className = "indicator";
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(index));
  sliderIndicators.appendChild(indicator);
});

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Update indicators
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === slideIndex);
  });
}

// Auto-slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}, 5000);

// Timeline filter functionality
const filterChips = document.querySelectorAll(".filter-chip");
const timelineItems = document.querySelectorAll(".timeline-item");

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    // Update active chip
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    // Filter timeline items
    const filter = chip.getAttribute("data-filter");

    timelineItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
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
