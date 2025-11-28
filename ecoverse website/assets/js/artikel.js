// Create background particles
function createParticles() {
  const container = document.getElementById("particles-container");
  const particleCount = 30;

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

// News data - in a real app, this would come from an API
const newsArticles = [
  {
    title: "Arctic Sea Ice Shrinks to Second Lowest Level on Record",
    description:
      "Scientists warn of accelerating melt rates with potential global climate implications as Arctic sea ice reaches its second lowest extent since satellite monitoring began.",
    image:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "5 hrs ago",
    category: "Climate",
  },
  {
    title:
      "Global Reforestation Initiative Plants 1 Billion Trees Ahead of Schedule",
    description:
      "Community-led programs in 12 countries exceed targets, creating new carbon sinks and restoring degraded lands across multiple continents.",
    image: "assets/img/artikel/reforestation.jpeg",
    time: "7 hrs ago",
    category: "Conservation",
  },
  {
    title: "Vertical Farms Revolutionize Urban Agriculture in Megacities",
    description:
      "Singapore's new 30-story farm produces 5% of city's vegetable consumption using 95% less water than traditional agriculture methods.",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "9 hrs ago",
    category: "Innovation",
  },
  {
    title: "New Solid-State Batteries Promise 500-Mile EV Range",
    description:
      "Breakthrough in energy storage technology could eliminate range anxiety for electric vehicles and accelerate the transition away from fossil fuels.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "11 hrs ago",
    category: "Technology",
  },
  {
    title:
      "Great Barrier Reef Shows Signs of Recovery After Conservation Efforts",
    description:
      "Coral bleaching decreases by 40% following targeted intervention programs and improved water quality measures along the Australian coast.",
    image: "assets/img/artikel/coralbleaching.jpeg",
    time: "13 hrs ago",
    category: "Conservation",
  },
  {
    title: "Offshore Wind Farms Now Power 8 Million European Homes",
    description:
      "North Sea installations exceed capacity projections, setting new renewable energy records and reducing carbon emissions by millions of tons annually.",
    image:
      "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "15 hrs ago",
    category: "Energy",
  },
  {
    title: "Plastic Eating Bacteria Discovered in Ocean Depths",
    description:
      "Scientists identify new strain of bacteria capable of breaking down PET plastics, offering potential solution to ocean plastic pollution crisis.",
    image: "assets/img/artikel/bacteriplastic.jpeg",
    time: "17 hrs ago",
    category: "Innovation",
  },
  {
    title: "Global Carbon Capture Projects Reach Record Capacity",
    description:
      "Direct air capture technology scales up with 15 new facilities coming online this year, collectively removing millions of tons of CO2 from atmosphere.",
    image: "assets/img/artikel/carbon.jpeg",
    time: "19 hrs ago",
    category: "Climate",
  },
  {
    title: "Amazon Rainforest Deforestation Slows for Third Consecutive Year",
    description:
      "Brazil reports 22% reduction in deforestation rates amid strengthened enforcement and international conservation partnerships.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "21 hrs ago",
    category: "Conservation",
  },
  {
    title: "Solar Power Now Cheapest Electricity in History Says IEA",
    description:
      "International Energy Agency report confirms solar PV is now the lowest-cost option for new electricity generation in most countries worldwide.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "23 hrs ago",
    category: "Energy",
  },
  {
    title: "EU Bans Single-Use Plastics in Major Environmental Push",
    description:
      "Comprehensive legislation targets 10 most common plastic items found on European beaches, with complete phase-out planned within two years.",
    image: "assets/img/artikel/banplastic.jpeg",
    time: "1 day ago",
    category: "Policy",
  },
  {
    title: "Global Wildlife Populations Decline by 69% Since 1970",
    description:
      "WWF Living Planet Report reveals staggering loss of biodiversity with freshwater species hit hardest by habitat destruction and climate change.",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "1 day ago",
    category: "Wildlife",
  },
  {
    title: "Breakthrough in Hydrogen Fuel Cell Technology Triples Efficiency",
    description:
      "New catalyst material enables hydrogen production at room temperature, potentially making green hydrogen cost-competitive with fossil fuels.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "1 day ago",
    category: "Innovation",
  },
  {
    title: "California Mandates 100% Zero-Emission Vehicle Sales by 2035",
    description:
      "Groundbreaking regulation accelerates transition to electric vehicles, expected to eliminate 4 million metric tons of CO2 emissions annually.",
    image: "assets/img/artikel/car.jpeg",
    time: "2 days ago",
    category: "Policy",
  },
  {
    title: "Ocean Current Changes Could Disrupt Global Weather Patterns",
    description:
      "New research shows Atlantic Meridional Overturning Circulation weakening faster than predicted, with potential impacts on European climate.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "2 days ago",
    category: "Climate",
  },
  {
    title: "Global Green Bond Issuance Tops $2 Trillion Milestone",
    description:
      "Sustainable finance market expands rapidly as corporations and governments fund climate-friendly projects through environmental debt instruments.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "2 days ago",
    category: "Eco-Economy",
  },
  {
    title: "Microplastic Pollution Found in Human Blood for First Time",
    description:
      "Landmark study detects plastic particles in 80% of tested individuals, raising concerns about potential health impacts of plastic contamination.",
    image: "assets/img/artikel/microplastic.jpeg",
    time: "3 days ago",
    category: "Pollution",
  },
  {
    title: "African Nations Launch Great Green Wall Initiative Expansion",
    description:
      "Ambitious project to restore 100 million hectares of degraded land across Sahel region receives $14 billion in new funding commitments.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    time: "3 days ago",
    category: "Conservation",
  },
];

// Load initial articles
let currentArticleCount = 6;
const articlesPerLoad = 6;
const newsContainer = document.getElementById("news-container");
const loadMoreBtn = document.getElementById("load-more-btn");
const articleCountElement = document.getElementById("article-count");

function displayArticles(startIndex, count) {
  const endIndex = Math.min(startIndex + count, newsArticles.length);

  for (let i = startIndex; i < endIndex; i++) {
    const article = newsArticles[i];
    const articleElement = document.createElement("div");
    articleElement.className = "article-card";
    articleElement.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    <div class="article-content">
                        <h3 class="article-title">${article.title}</h3>
                        <p class="article-description">${article.description}</p>
                        <div class="article-meta">
                            <span class="article-time">${article.time}</span>
                            <span>${article.category}</span>
                        </div>
                    </div>
                `;
    newsContainer.appendChild(articleElement);
  }

  currentArticleCount = endIndex;
  articleCountElement.textContent = currentArticleCount;

  // Update load more button
  if (currentArticleCount >= newsArticles.length) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = "<span>All news loaded</span>";
  }
}

// Load more button functionality
loadMoreBtn.addEventListener("click", function () {
  loadMoreBtn.innerHTML = '<div class="loading"></div><span>Loading...</span>';

  setTimeout(() => {
    displayArticles(currentArticleCount, articlesPerLoad);
    loadMoreBtn.innerHTML = "<span>Load more environment news</span>";
  }, 1000);
});

// Simple category filter functionality
document.querySelectorAll(".category").forEach((category) => {
  category.addEventListener("click", function () {
    document
      .querySelectorAll(".category")
      .forEach((c) => c.classList.remove("active"));
    this.classList.add("active");

    // In a real implementation, this would filter the news articles
    // For now, we'll just log the selected category
    console.log(`Filtering by: ${this.textContent}`);
  });
});

// Add subtle hover effects to cards
document
  .querySelectorAll(".article-card, .data-widget, .side-article, .hero-article")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

// Initialize
window.addEventListener("load", function () {
  createParticles();
  displayArticles(0, 6);
});
