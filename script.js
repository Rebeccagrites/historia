// Música de fundo
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "⏸ Pausar Música";
    } else {
        music.pause();
        musicBtn.textContent = "▶️ Tocar Música";
    }
});


// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-images img");
const totalSlides = slides.length;

function updateCarousel() {
    const carouselImages = document.querySelector(".carousel-images");
    carouselImages.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-play do carrossel
setInterval(nextSlide, 5000);

