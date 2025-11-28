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
// SMOOTH SCROLL
// =========================

const scrollIndicator = document.querySelector(".scroll-indicator");
const nextSection = document.querySelector(".next-section");

if (scrollIndicator && nextSection) {
  scrollIndicator.addEventListener("click", () => {
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
}

// =========================
// DOT INDICATOR LOGIC
// =========================

function updateDotIndicator(activeIndex) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
}

// =========================
// MOBILE SCROLL STEPS
// =========================

const mobileScrollContainer = document.getElementById("mobileStepsScroll");
const mobileStepCards = document.querySelectorAll(".mobile-step-card");

if (mobileScrollContainer && mobileStepCards.length > 0) {
  mobileScrollContainer.addEventListener("scroll", () => {
    const scrollPosition = mobileScrollContainer.scrollLeft;
    const cardWidth = mobileStepCards[0].offsetWidth + 30; // + gap
    const activeIndex = Math.round(scrollPosition / cardWidth);

    updateDotIndicator(activeIndex);
  });

  // DOT CLICK SCROLL
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      const cardWidth = mobileStepCards[0].offsetWidth + 30;

      mobileScrollContainer.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });

      updateDotIndicator(index);
    });
  });
}

// =========================
// IMPACT SECTION — COUNT UP
// =========================

function animateCountUp() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.dataset.target);
    const duration = 2000;
    const fps = 16;
    const step = target / (duration / fps);

    let current = 0;

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      stat.textContent =
        target >= 1000
          ? Math.floor(current).toLocaleString("id-ID")
          : Math.floor(current);
    }, fps);
  });
}

// =========================
// CHECK IF ELEMENT IS VISIBLE
// =========================
// versi lebih akurat menggunakan intersection observer

function observeStats() {
  const statsContainer = document.querySelector(".stats-container");

  if (!statsContainer) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(statsContainer);
}

observeStats();
/////////

//TESTIMONIAL
// Fungsi untuk update indikator dot testimonial
function updateTestimonialDotIndicator(activeIndex) {
  const dots = document.querySelectorAll(
    ".dots-indicator-testimonial .dot-testimonial"
  );

  // Mapping 10 testimonial ke 4 dots
  let dotIndex;
  if (activeIndex < 3) {
    dotIndex = 0; // Testimonial 0-2 -> Dot 1
  } else if (activeIndex < 6) {
    dotIndex = 1; // Testimonial 3-5 -> Dot 2
  } else if (activeIndex < 8) {
    dotIndex = 2; // Testimonial 6-7 -> Dot 3
  } else {
    dotIndex = 3; // Testimonial 8-9 -> Dot 4
  }

  dots.forEach((dot, index) => {
    if (index === dotIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Event listener untuk scroll testimonial
const testimonialsScroll = document.getElementById("testimonialsScroll");
const testimonialCards = document.querySelectorAll(".testimonial-card");

if (testimonialsScroll && testimonialCards.length > 0) {
  // Fungsi untuk menangani scroll
  const handleScroll = () => {
    const scrollPosition = testimonialsScroll.scrollLeft;
    const cardWidth = testimonialCards[0].offsetWidth + 30; // width + gap

    // Hitung card mana yang sedang aktif (0-9)
    const activeIndex = Math.round(scrollPosition / cardWidth);
    updateTestimonialDotIndicator(activeIndex);
  };

  // Tambahkan event listener
  testimonialsScroll.addEventListener("scroll", handleScroll);

  // Event listener untuk dots indicator testimonial
  const dots = document.querySelectorAll(
    ".dots-indicator-testimonial .dot-testimonial"
  );
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const dotIndex = parseInt(dot.getAttribute("data-index"));
      const cardWidth = testimonialCards[0].offsetWidth + 30; // width + gap

      // Mapping 4 dots ke 10 testimonial
      let targetIndex;
      if (dotIndex === 0) {
        targetIndex = 0; // Dot 1 -> Testimonial 0
      } else if (dotIndex === 1) {
        targetIndex = 3; // Dot 2 -> Testimonial 3
      } else if (dotIndex === 2) {
        targetIndex = 6; // Dot 3 -> Testimonial 6
      } else {
        targetIndex = 8; // Dot 4 -> Testimonial 8
      }

      testimonialsScroll.scrollTo({
        left: targetIndex * cardWidth,
        behavior: "smooth",
      });
      updateTestimonialDotIndicator(targetIndex);
    });
  });

  // Panggil handleScroll sekali untuk mengatur status awal
  handleScroll();
}

// Inisialisasi dots indicator saat halaman dimuat
window.addEventListener("load", () => {
  updateTestimonialDotIndicator(0);
});

/////////
////////
//MARKETPLACE SECTION
// Add interactive effects
document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add click effect to buttons
  const buttons = document.querySelectorAll(".btn-tukar, .btn-see-more");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
