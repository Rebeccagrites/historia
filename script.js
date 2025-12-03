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
