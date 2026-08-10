const scrollButtons = document.querySelectorAll("[data-scroll]");
scrollButtons.forEach(btn => btn.addEventListener("click", () => {
  document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const musicButton = document.getElementById("musicToggle");
const music = document.getElementById("bgMusic");
let hasSource = false;
if (music.querySelector("source")) hasSource = true;

musicButton.addEventListener("click", async () => {
  if (!hasSource) {
    alert("Lege eure Musik als assets/song.mp3 ab und füge sie in index.html als <source> ein.");
    return;
  }
  if (music.paused) {
    await music.play();
    musicButton.textContent = "❚❚";
  } else {
    music.pause();
    musicButton.textContent = "♫";
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && !music.paused) music.pause();
});
