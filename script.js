const root = document.documentElement;
const brand = document.getElementById("brand");
const tagline = document.getElementById("tagline");
const aboutToggle = document.getElementById("about-toggle");
const aboutCopy = document.getElementById("about-copy");
const idleMessage = document.getElementById("idle-message");

const originalText = "You found the right Jaisson.";
const alternateText = "Confirmed.";

let taglineResetTimer;
let taglineChangeTimer;
let idleTimer;
let idleDismissTimer;
let idleHasShown = false;

if (window.jaissonTheme) {
  window.setInterval(window.jaissonTheme.apply, 60 * 1000);
}

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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
}

if (brand && tagline) {
  const changeTagline = (text) => {
    window.clearTimeout(taglineChangeTimer);
    tagline.classList.add("is-changing");

    taglineChangeTimer = window.setTimeout(() => {
      tagline.textContent = text;
      tagline.classList.remove("is-changing");
    }, 140);
  };

  brand.addEventListener("click", () => {
    window.clearTimeout(taglineResetTimer);
    changeTagline(alternateText);

    taglineResetTimer = window.setTimeout(() => {
      changeTagline(originalText);
    }, 1800);
  });
}

if (aboutToggle && aboutCopy) {
  aboutToggle.addEventListener("click", () => {
    const willOpen = aboutToggle.getAttribute("aria-expanded") !== "true";
    aboutToggle.setAttribute("aria-expanded", String(willOpen));
    aboutCopy.hidden = !willOpen;
  });
}

function hideIdleMessage() {
  if (!idleMessage || !idleMessage.classList.contains("is-visible")) {
    return;
  }

  idleMessage.classList.remove("is-visible");
  window.clearTimeout(idleDismissTimer);
  window.setTimeout(() => {
    idleMessage.textContent = "";
  }, 300);
}

function showIdleMessage() {
  if (!idleMessage || idleHasShown || document.hidden) {
    return;
  }

  idleHasShown = true;
  idleMessage.textContent = "Still here?";
  idleMessage.classList.add("is-visible");
  idleDismissTimer = window.setTimeout(hideIdleMessage, 4000);
}

function registerActivity() {
  window.clearTimeout(idleTimer);

  if (idleHasShown) {
    hideIdleMessage();
    return;
  }

  if (!document.hidden) {
    idleTimer = window.setTimeout(showIdleMessage, 20 * 1000);
  }
}

if (idleMessage) {
  const activityEvents = ["pointermove", "pointerdown", "keydown", "scroll", "touchstart"];
  activityEvents.forEach((eventName) => {
    window.addEventListener(eventName, registerActivity, { passive: true });
  });
  registerActivity();
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(idleTimer);
    hideIdleMessage();
    return;
  }

  if (window.jaissonTheme) {
    window.jaissonTheme.apply();
  }
  registerActivity();
});

console.log(
  "%cCongratulations. You inspected a website with about 12 lines of visible content.",
  "color: #10aeb5; font-weight: 600;"
);
