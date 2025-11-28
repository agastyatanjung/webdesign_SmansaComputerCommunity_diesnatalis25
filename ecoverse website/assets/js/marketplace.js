// Product Data
const products = [
  {
    id: 1,
    title: "Bamboo Toothbrush Set",
    description:
      "Eco-friendly bamboo toothbrushes with biodegradable bristles.",
    price: 12.99,
    originalPrice: 15.99,
    ecoPoints: 15,
    rating: 4.5,
    category: "personal",
    material: "Bamboo",
    image: "assets/img/marketplace/bambootoobrush.jpeg",
  },
  {
    id: 2,
    title: "Recycled Glass Water Bottle",
    description: "Durable water bottle made from 100% recycled glass.",
    price: 18.5,
    originalPrice: 22.0,
    ecoPoints: 22,
    rating: 4.7,
    category: "home",
    material: "Glass",
    image: "assets/img/marketplace/recycledGlass.jpeg",
  },
  {
    id: 3,
    title: "Organic Cotton Tote Bag",
    description: "Spacious tote bag made from GOTS certified organic cotton.",
    price: 24.99,
    ecoPoints: 18,
    rating: 4.3,
    category: "fashion",
    material: "Cotton",
    image: "assets/img/marketplace/cottonbag.jpeg",
  },
  {
    id: 4,
    title: "Solar Powered Charger",
    description: "Portable solar charger for your electronic devices.",
    price: 45.0,
    originalPrice: 59.99,
    ecoPoints: 35,
    rating: 4.8,
    category: "electronics",
    material: "Recycled Plastic",
    image: "assets/img/marketplace/solarcharger.jpeg",
  },
  {
    id: 5,
    title: "Wooden Kitchen Utensils",
    description: "Set of 5 sustainable bamboo cooking utensils.",
    price: 29.99,
    ecoPoints: 20,
    rating: 4.6,
    category: "home",
    material: "Wood",
    image: "assets/img/marketplace/kitchenutencils.jpeg",
  },
  {
    id: 6,
    title: "Eco-Friendly Shampoo Bar",
    description: "Natural shampoo bar with zero waste packaging.",
    price: 9.99,
    ecoPoints: 12,
    rating: 4.4,
    category: "personal",
    material: "Natural Oils",
    image: "assets/img/marketplace/shampoobar.jpeg",
  },
  {
    id: 7,
    title: "Reusable Coffee Cup",
    description: "Insulated reusable cup made from recycled materials.",
    price: 16.75,
    ecoPoints: 14,
    rating: 4.5,
    category: "food",
    material: "Recycled Plastic",
    image: "assets/img/marketplace/coffee.jpeg",
  },
  {
    id: 8,
    title: "Bamboo Laptop Stand",
    description: "Ergonomic laptop stand crafted from sustainable bamboo.",
    price: 39.99,
    originalPrice: 49.99,
    ecoPoints: 25,
    rating: 4.7,
    category: "office",
    material: "Bamboo",
    image: "assets/img/marketplace/bamboostand.jpeg",
  },
  {
    id: 9,
    title: "Organic Tea Sampler",
    description: "Assortment of organic teas in compostable packaging.",
    price: 22.5,
    ecoPoints: 16,
    rating: 4.6,
    category: "food",
    material: "Organic Tea",
    image: "assets/img/marketplace/organictea.jpeg",
  },
  {
    id: 10,
    title: "Recycled Paper Notebook",
    description: "Elegant notebook made from 100% recycled paper.",
    price: 14.99,
    ecoPoints: 10,
    rating: 4.2,
    category: "office",
    material: "Recycled Paper",
    image: "assets/img/marketplace/recycledpaper.jpeg",
  },
  {
    id: 11,
    title: "Hemp Backpack",
    description: "Durable backpack made from sustainable hemp fiber.",
    price: 49.99,
    ecoPoints: 28,
    rating: 4.8,
    category: "fashion",
    material: "Hemp",
    image: "assets/img/marketplace/hempbackpack.jpeg",
  },
  {
    id: 12,
    title: "Bamboo Cutting Board",
    description: "Eco-friendly cutting board made from sustainable bamboo.",
    price: 19.99,
    ecoPoints: 15,
    rating: 4.4,
    category: "home",
    material: "Bamboo",
    image: "assets/img/marketplace/cutboard.jpeg",
  },
];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const searchBar = document.querySelector(".search-bar");
const searchResults = document.getElementById("searchResults");
const filterChips = document.querySelectorAll(".chip");
const mobileFilterBtn = document.getElementById("mobileFilterBtn");
const sidebar = document.getElementById("sidebar");
const materialCheckboxes = document.querySelectorAll(
  '.filter-options input[type="checkbox"]'
);
const priceRange = document.getElementById("priceRange");
const maxPriceValue = document.getElementById("maxPriceValue");
const promoTrack = document.getElementById("promoTrack");
const sliderDots = document.getElementById("sliderDots");
const cartIcon = document.getElementById("cartIcon");
const cartCount = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const continueShopping = document.getElementById("continueShopping");
const viewOrder = document.getElementById("viewOrder");

// Current filters
let currentCategory = "all";
let currentSearch = "";
let currentMaterials = [];
let currentMaxPrice = 100;
let currentSlide = 0;
let slideInterval;

// Shopping cart
let cart = [];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderProducts(products);
  initPromoSlider();
  updateCartDisplay();

  // Event listeners
  searchBar.addEventListener("input", handleSearch);
  filterChips.forEach((chip) => {
    chip.addEventListener("click", handleCategoryFilter);
  });
  mobileFilterBtn.addEventListener("click", toggleMobileFilters);
  materialCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleMaterialFilter);
  });
  priceRange.addEventListener("input", handlePriceFilter);
  cartIcon.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartSidebar);
  checkoutBtn.addEventListener("click", checkout);
  continueShopping.addEventListener("click", closeModal);
  viewOrder.addEventListener("click", closeModal);

  // Update price display
  updatePriceDisplay();
});

// Initialize promo slider
function initPromoSlider() {
  const slides = document.querySelectorAll(".promo-slide");

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "slider-dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    sliderDots.appendChild(dot);
  });

  // Start auto slide
  startAutoSlide();

  // Pause on hover
  promoTrack.parentElement.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  promoTrack.parentElement.addEventListener("mouseleave", () => {
    startAutoSlide();
  });
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function nextSlide() {
  const slides = document.querySelectorAll(".promo-slide");
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  const slides = document.querySelectorAll(".promo-slide");
  const dots = document.querySelectorAll(".slider-dot");

  promoTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Render products to the grid
function renderProducts(productsToRender) {
  productGrid.innerHTML = "";

  if (productsToRender.length === 0) {
    productGrid.innerHTML =
      '<div class="no-results"><h3>No products found</h3><p>Try adjusting your filters or search terms</p></div>';
    return;
  }

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    // Generate star rating
    const stars = generateStarRating(product.rating);

    // Format price display
    const priceDisplay = product.originalPrice
      ? `<span class="product-price">$${product.price.toFixed(
          2
        )}</span><span class="product-original-price">$${product.originalPrice.toFixed(
          2
        )}</span>`
      : `<span class="product-price">$${product.price.toFixed(2)}</span>`;

    productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-meta">
                            <div>${priceDisplay}</div>
                            <span class="eco-points"><i class="fas fa-leaf"></i> ${product.ecoPoints} pts</span>
                        </div>
                        <div class="product-rating">
                            ${stars} <span>${product.rating}</span>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-add" data-id="${product.id}">Add to Cart</button>
                            <button class="btn btn-redeem">Redeem</button>
                        </div>
                    </div>
                `;

    productGrid.appendChild(productCard);
  });

  // Add event listeners to Add to Cart buttons
  document.querySelectorAll(".btn-add").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

// Generate star rating HTML
function generateStarRating(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

// Handle search functionality
function handleSearch(e) {
  currentSearch = e.target.value.toLowerCase();
  searchResults.style.display = currentSearch ? "block" : "none";

  // Filter products for search results
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(currentSearch) ||
      product.description.toLowerCase().includes(currentSearch)
  );

  // Update search results dropdown
  searchResults.innerHTML = "";
  if (filteredProducts.length > 0) {
    filteredProducts.slice(0, 5).forEach((product) => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result-item";
      resultItem.textContent = product.title;
      resultItem.addEventListener("click", () => {
        searchBar.value = product.title;
        currentSearch = product.title.toLowerCase();
        searchResults.style.display = "none";
        applyFilters();
      });
      searchResults.appendChild(resultItem);
    });
  } else if (currentSearch) {
    const noResults = document.createElement("div");
    noResults.className = "search-result-item";
    noResults.textContent = "No products found";
    searchResults.appendChild(noResults);
  }

  applyFilters();
}

// Handle category filter
function handleCategoryFilter(e) {
  const category = e.target.dataset.category;

  // Update active chip
  filterChips.forEach((chip) => {
    chip.classList.remove("active");
  });
  e.target.classList.add("active");

  currentCategory = category;
  applyFilters();
}

// Handle material filter
function handleMaterialFilter() {
  currentMaterials = Array.from(materialCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  applyFilters();
}

// Handle price filter
function handlePriceFilter(e) {
  currentMaxPrice = parseInt(e.target.value);
  updatePriceDisplay();
  applyFilters();
}

// Update price display
function updatePriceDisplay() {
  maxPriceValue.textContent =
    currentMaxPrice === 100 ? "$100+" : `$${currentMaxPrice}`;
}

// Apply all filters
function applyFilters() {
  let filteredProducts = products;

  // Apply category filter
  if (currentCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === currentCategory
    );
  }

  // Apply search filter
  if (currentSearch) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(currentSearch) ||
        product.description.toLowerCase().includes(currentSearch)
    );
  }

  // Apply material filter
  if (currentMaterials.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      currentMaterials.includes(product.material)
    );
  }

  // Apply price filter (FIXED: filter products with price <= currentMaxPrice)
  filteredProducts = filteredProducts.filter(
    (product) => product.price <= currentMaxPrice
  );

  renderProducts(filteredProducts);
}

// Toggle mobile filters
function toggleMobileFilters() {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
    mobileFilterBtn.innerHTML = '<i class="fas fa-filter"></i> Filter Products';
  } else {
    sidebar.style.display = "block";
    mobileFilterBtn.innerHTML = '<i class="fas fa-times"></i> Close Filters';
  }
}

// Shopping Cart Functions
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCartDisplay();
  showCartNotification();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartDisplay();
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>Your cart is empty</h3>
                        <p>Add some eco-friendly products to get started!</p>
                    </div>
                `;
    cartTotal.textContent = "$0.00";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
                    <img src="${item.image}" alt="${
      item.title
    }" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(
                          2
                        )}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${
                              item.id
                            }">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${
                              item.id
                            }">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;

    cartItems.appendChild(cartItem);
  });

  // Update total
  cartTotal.textContent = `$${total.toFixed(2)}`;

  // Add event listeners to cart buttons
  document.querySelectorAll(".decrease").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      updateQuantity(productId, -1);
    });
  });

  document.querySelectorAll(".increase").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      updateQuantity(productId, 1);
    });
  });

  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });
}

function showCartNotification() {
  // Simple notification animation
  cartIcon.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartIcon.style.transform = "scale(1)";
  }, 300);
}

function openCart() {
  cartSidebar.classList.add("active");
}

function closeCartSidebar() {
  cartSidebar.classList.remove("active");
}

function checkout() {
  if (cart.length === 0) return;

  // Show success modal
  checkoutModal.classList.add("active");

  // Clear cart after checkout
  cart = [];
  updateCartDisplay();

  // Close cart sidebar
  closeCartSidebar();
}

function closeModal() {
  checkoutModal.classList.remove("active");
}

// Close search results when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    searchResults.style.display = "none";
  }

  // Close sidebar when clicking outside on mobile
  if (
    window.innerWidth <= 768 &&
    !e.target.closest("#sidebar") &&
    !e.target.closest("#mobileFilterBtn") &&
    sidebar.style.display === "block"
  ) {
    sidebar.style.display = "none";
    mobileFilterBtn.innerHTML = '<i class="fas fa-filter"></i> Filter Products';
  }

  // Close cart when clicking outside
  if (
    !e.target.closest("#cartSidebar") &&
    !e.target.closest("#cartIcon") &&
    cartSidebar.classList.contains("active")
  ) {
    closeCartSidebar();
  }
});
// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const sidebarNav = document.getElementById("sidebar-nav");

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
