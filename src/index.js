// Quote Rotation
let currentQuoteIndex = 0;
const quotes = [
  "Let the robust flavors of Assam tea warm your soul and awaken your senses.",
  "From Assam’s lush gardens to your cup",
  " Every sip of tea tells a tale of tradition and tranquility.",
  "Experience the essence of Assam in each sip",
  "Bold and rich, Assam tea speaks of tradition",
];
const quoteElement = document.querySelector(".quote");

function updateQuote() {
  if (quoteElement) {
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }
}

// Set initial quote
updateQuote();

// Change quote every 5 seconds
setInterval(updateQuote, 5000);

// Image Slider
let currentImageIndex = 0;
const images = document.querySelectorAll(".image-slider img");
const totalImages = images.length;

function showNextImage() {
  if (images.length > 0) {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add("active");
  }
}

// Set initial image
if (images.length > 0) {
  images[currentImageIndex].classList.add("active");
}

// Change image every 4 seconds
setInterval(showNextImage, 4000);

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeSidebar = document.getElementById("closeSidebar");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

if (closeSidebar) {
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

// Contact Link Handler
const contactLink = document.getElementById("contactLink");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

if (contactLink) {
  contactLink.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      // Mobile view
      contactModal.classList.add("show");
    } else {
      // Desktop view
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    contactModal.classList.remove("show");
  });
}
