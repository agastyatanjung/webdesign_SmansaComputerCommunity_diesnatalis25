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

// =========================
// EDUCATION SECTION ACCORDION
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const educationAccordionItems = document.querySelectorAll(
    "#education-accordion .accordion-item"
  );

  educationAccordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      // Close all other items in education section
      educationAccordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Auto-open first item on mobile
  if (window.innerWidth <= 768 && educationAccordionItems.length > 0) {
    educationAccordionItems[0].classList.add("active");
  }
});

// =========================
// WASTE SORTING SECTION ACCORDION
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const wasteAccordionItems = document.querySelectorAll(
    "#waste-accordion .waste-accordion-item"
  );

  wasteAccordionItems.forEach((item) => {
    const header = item.querySelector(".waste-accordion-header");

    header.addEventListener("click", function () {
      // Close all other items in waste section
      wasteAccordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Auto-open first item on mobile
  if (window.innerWidth <= 768 && wasteAccordionItems.length > 0) {
    wasteAccordionItems[0].classList.add("active");
  }
});

/////VIDEO SECTION
const videoPreviewThumbnail = document.getElementById("videoPreviewThumbnail");
const videoThumbnailCanvas = document.getElementById("videoThumbnailCanvas");
const videoThumbnailLoading = document.getElementById("videoThumbnailLoading");
const videoDurationBadge = document.getElementById("videoDurationBadge");
const videoPreviewPlayButton = document.getElementById(
  "videoPreviewPlayButton"
);
const videoModalOverlay = document.getElementById("videoModalOverlay");
const videoModalCloseButton = document.getElementById("videoModalCloseButton");
const videoPlayerElement = document.getElementById("videoPlayerElement");
const videoPlayerPlayPause = document.getElementById("videoPlayerPlayPause");
const videoPlayerProgress = document.getElementById("videoPlayerProgress");
const videoPlayerProgressFilled = document.getElementById(
  "videoPlayerProgressFilled"
);
const videoPlayerTime = document.getElementById("videoPlayerTime");
const videoPlayerFullscreen = document.getElementById("videoPlayerFullscreen");
const videoPlayerContainer = document.getElementById("videoPlayerContainer");

// Video URL
const videoUrl =
  "assets/img/vid/Pentingnya Menjaga Lingkungan Untuk Kesehatan Bumi Kita #materiajar #menjelaskan #pengetahuan - Dudo Kids Indonesia (720p, h264).mp4";

// Generate thumbnail from video
function generateVideoThumbnail() {
  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.preload = "metadata";

  video.addEventListener("loadeddata", function () {
    // Set current time to capture thumbnail (5 seconds in)
    this.currentTime = 5;
  });

  video.addEventListener("seeked", function () {
    const canvas = videoThumbnailCanvas;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match video
    canvas.width = this.videoWidth;
    canvas.height = this.videoHeight;

    // Draw video frame to canvas
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

    // Hide loading indicator
    videoThumbnailLoading.style.display = "none";

    // Update duration badge
    const duration = this.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    videoDurationBadge.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  });

  video.addEventListener("error", function () {
    videoThumbnailLoading.innerHTML = "Gagal memuat thumbnail video";
    console.error("Error loading video for thumbnail");
  });

  video.src = videoUrl;
}

// Initialize thumbnail generation when page loads
window.addEventListener("load", generateVideoThumbnail);

// Open modal when clicking on thumbnail or play button
videoPreviewThumbnail.addEventListener("click", openVideoModal);
videoPreviewPlayButton.addEventListener("click", openVideoModal);

function openVideoModal() {
  videoModalOverlay.classList.add("active");
  videoPlayerElement.play();
  updatePlayPauseIcon();
}

// Close modal
videoModalCloseButton.addEventListener("click", closeVideoModal);

function closeVideoModal() {
  videoModalOverlay.classList.remove("active");
  videoPlayerElement.pause();
}

// Close modal when clicking outside the content
videoModalOverlay.addEventListener("click", (e) => {
  if (e.target === videoModalOverlay) {
    closeVideoModal();
  }
});

// Play/Pause functionality
videoPlayerPlayPause.addEventListener("click", togglePlayPause);

function togglePlayPause() {
  if (videoPlayerElement.paused) {
    videoPlayerElement.play();
  } else {
    videoPlayerElement.pause();
  }
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (videoPlayerElement.paused) {
    videoPlayerPlayPause.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    videoPlayerPlayPause.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

// Update progress bar and time
videoPlayerElement.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const percent =
    (videoPlayerElement.currentTime / videoPlayerElement.duration) * 100;
  videoPlayerProgressFilled.style.width = `${percent}%`;

  // Update time display
  const currentMinutes = Math.floor(videoPlayerElement.currentTime / 60);
  const currentSeconds = Math.floor(videoPlayerElement.currentTime % 60);
  const durationMinutes = Math.floor(videoPlayerElement.duration / 60);
  const durationSeconds = Math.floor(videoPlayerElement.duration % 60);

  videoPlayerTime.textContent = `${currentMinutes}:${
    currentSeconds < 10 ? "0" : ""
  }${currentSeconds} / ${durationMinutes}:${
    durationSeconds < 10 ? "0" : ""
  }${durationSeconds}`;
}

// Seek functionality
videoPlayerProgress.addEventListener("click", seek);

function seek(e) {
  const clickX = e.offsetX;
  const width = videoPlayerProgress.clientWidth;
  const percent = clickX / width;
  videoPlayerElement.currentTime = percent * videoPlayerElement.duration;
}

// Fullscreen functionality
videoPlayerFullscreen.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    videoPlayerContainer.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
    videoPlayerFullscreen.innerHTML = '<i class="fas fa-compress"></i>';
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      videoPlayerFullscreen.innerHTML = '<i class="fas fa-expand"></i>';
    }
  }
}

// Update fullscreen icon when exiting fullscreen via other means
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    videoPlayerFullscreen.innerHTML = '<i class="fas fa-expand"></i>';
  }
});

// Reset video when modal is closed
videoModalOverlay.addEventListener("transitionend", () => {
  if (!videoModalOverlay.classList.contains("active")) {
    videoPlayerElement.currentTime = 0;
    updateProgress();
    updatePlayPauseIcon();
  }
});

// Add hover effect to thumbnail
videoPreviewThumbnail.addEventListener("mouseenter", () => {
  videoPreviewPlayButton.style.transform = "scale(1.05)";
});

videoPreviewThumbnail.addEventListener("mouseleave", () => {
  videoPreviewPlayButton.style.transform = "scale(1)";
});

///ARTIKEL SECTION
// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  const articleCards = document.querySelectorAll(".article-card");

  articleCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});
