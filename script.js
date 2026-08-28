const root = document.documentElement;
const brand = document.getElementById("brand");
const tagline = document.getElementById("tagline");

const originalText = "You found the right Jaisson.";
const alternateText = "Confirmed.";

let resetTimer;

window.addEventListener(
  "pointermove",
  (event) => {
    const x = `${(event.clientX / window.innerWidth) * 100}%`;
    const y = `${(event.clientY / window.innerHeight) * 100}%`;
    root.style.setProperty("--mx", x);
    root.style.setProperty("--my", y);
  },
  { passive: true }
);

brand.addEventListener("click", () => {
  clearTimeout(resetTimer);

  tagline.classList.add("is-changing");

  window.setTimeout(() => {
    tagline.textContent = alternateText;
    tagline.classList.remove("is-changing");
  }, 140);

  resetTimer = window.setTimeout(() => {
    tagline.classList.add("is-changing");

    window.setTimeout(() => {
      tagline.textContent = originalText;
      tagline.classList.remove("is-changing");
    }, 140);
  }, 1800);
});
