const root = document.documentElement;
const brand = document.getElementById("brand");
const tagline = document.getElementById("tagline");
const aboutToggle = document.getElementById("about-toggle");
const aboutCopy = document.getElementById("about-copy");
const idleMessage = document.getElementById("idle-message");

const translations = {
  sq: { tagline: "E gjete Jaisson-in e duhur.", confirmed: "U konfirmua.", about: "Rreth", aboutCopy: "Kjo duhej të ishte një faqe e thjeshtë.", idle: "Ende këtu?" },
  be: { tagline: "Вы знайшлі патрэбнага Jaisson.", confirmed: "Пацверджана.", about: "Пра сайт", aboutCopy: "Гэта павінен быў быць просты сайт.", idle: "Яшчэ тут?" },
  bs: { tagline: "Pronašli ste pravog Jaissona.", confirmed: "Potvrđeno.", about: "O stranici", aboutCopy: "Ovo je trebala biti jednostavna web stranica.", idle: "Još ste tu?" },
  bg: { tagline: "Открихте правилния Jaisson.", confirmed: "Потвърдено.", about: "За сайта", aboutCopy: "Това трябваше да бъде прост уебсайт.", idle: "Още ли сте тук?" },
  ca: { tagline: "Has trobat el Jaisson correcte.", confirmed: "Confirmat.", about: "Sobre", aboutCopy: "Això havia de ser un lloc web senzill.", idle: "Encara ets aquí?" },
  hr: { tagline: "Pronašli ste pravog Jaissona.", confirmed: "Potvrđeno.", about: "O stranici", aboutCopy: "Ovo je trebala biti jednostavna web-stranica.", idle: "Još ste tu?" },
  cs: { tagline: "Našli jste toho správného Jaissona.", confirmed: "Potvrzeno.", about: "O stránce", aboutCopy: "Tohle měl být jednoduchý web.", idle: "Ještě jste tady?" },
  da: { tagline: "Du fandt den rigtige Jaisson.", confirmed: "Bekræftet.", about: "Om", aboutCopy: "Det her skulle være en simpel hjemmeside.", idle: "Stadig her?" },
  nl: { tagline: "Je hebt de juiste Jaisson gevonden.", confirmed: "Bevestigd.", about: "Over", aboutCopy: "Dit zou een eenvoudige website worden.", idle: "Nog steeds hier?" },
  en: { tagline: "You found the right Jaisson.", confirmed: "Confirmed.", about: "About", aboutCopy: "This was supposed to be a simple website.", idle: "Still here?" },
  et: { tagline: "Leidsid õige Jaissoni.", confirmed: "Kinnitatud.", about: "Teave", aboutCopy: "See pidi olema lihtne veebileht.", idle: "Ikka siin?" },
  fi: { tagline: "Löysit oikean Jaissonin.", confirmed: "Vahvistettu.", about: "Tietoa", aboutCopy: "Tämän piti olla yksinkertainen verkkosivusto.", idle: "Vielä täällä?" },
  fr: { tagline: "Vous avez trouvé le bon Jaisson.", confirmed: "Confirmé.", about: "À propos", aboutCopy: "Ce site était censé rester simple.", idle: "Toujours là ?" },
  de: { tagline: "Du hast den richtigen Jaisson gefunden.", confirmed: "Bestätigt.", about: "Über", aboutCopy: "Das sollte eigentlich eine einfache Website werden.", idle: "Noch da?" },
  el: { tagline: "Βρήκατε τον σωστό Jaisson.", confirmed: "Επιβεβαιώθηκε.", about: "Σχετικά", aboutCopy: "Αυτό υποτίθεται ότι θα ήταν ένας απλός ιστότοπος.", idle: "Ακόμα εδώ;" },
  hu: { tagline: "Megtaláltad a megfelelő Jaissont.", confirmed: "Megerősítve.", about: "Névjegy", aboutCopy: "Ennek egy egyszerű weboldalnak kellett volna lennie.", idle: "Még itt vagy?" },
  is: { tagline: "Þú fannst rétta Jaisson.", confirmed: "Staðfest.", about: "Um", aboutCopy: "Þetta átti að vera einföld vefsíða.", idle: "Enn hér?" },
  ga: { tagline: "D'aimsigh tú an Jaisson ceart.", confirmed: "Deimhnithe.", about: "Maidir leis", aboutCopy: "Bhí sé seo ceaptha a bheith ina shuíomh gréasáin simplí.", idle: "Fós anseo?" },
  it: { tagline: "Hai trovato il Jaisson giusto.", confirmed: "Confermato.", about: "Info", aboutCopy: "Questo doveva essere un sito semplice.", idle: "Sei ancora qui?" },
  lv: { tagline: "Jūs atradāt īsto Jaisson.", confirmed: "Apstiprināts.", about: "Par", aboutCopy: "Šai bija jābūt vienkāršai tīmekļa vietnei.", idle: "Vēl šeit?" },
  lt: { tagline: "Radote tinkamą Jaisson.", confirmed: "Patvirtinta.", about: "Apie", aboutCopy: "Tai turėjo būti paprasta svetainė.", idle: "Vis dar čia?" },
  lb: { tagline: "Du hues de richtege Jaisson fonnt.", confirmed: "Bestätegt.", about: "Iwwer", aboutCopy: "Dëst sollt eng einfach Websäit sinn.", idle: "Nach ëmmer hei?" },
  mk: { tagline: "Го најдовте вистинскиот Jaisson.", confirmed: "Потврдено.", about: "За страницата", aboutCopy: "Ова требаше да биде едноставна веб-страница.", idle: "Сè уште сте тука?" },
  mt: { tagline: "Sibt il-Jaisson it-tajjeb.", confirmed: "Ikkonfermat.", about: "Dwar", aboutCopy: "Din kellha tkun websajt sempliċi.", idle: "Għadek hawn?" },
  no: { tagline: "Du fant den rette Jaisson.", confirmed: "Bekreftet.", about: "Om", aboutCopy: "Dette skulle være en enkel nettside.", idle: "Fortsatt her?" },
  pl: { tagline: "Znalazłeś właściwego Jaissona.", confirmed: "Potwierdzone.", about: "O stronie", aboutCopy: "To miała być prosta strona internetowa.", idle: "Nadal tu jesteś?" },
  "pt-PT": { tagline: "Encontraste o Jaisson certo.", confirmed: "Confirmado.", about: "Sobre", aboutCopy: "Isto era suposto ser um site simples.", idle: "Ainda estás aqui?" },
  "pt-BR": { tagline: "Você encontrou o Jaisson certo.", confirmed: "Confirmado.", about: "Sobre", aboutCopy: "Era para este ser um site simples.", idle: "Ainda está por aqui?" },
  ro: { tagline: "Ai găsit Jaisson-ul potrivit.", confirmed: "Confirmat.", about: "Despre", aboutCopy: "Acesta trebuia să fie un site simplu.", idle: "Încă ești aici?" },
  ru: { tagline: "Вы нашли нужного Jaisson.", confirmed: "Подтверждено.", about: "О сайте", aboutCopy: "Это должен был быть простой сайт.", idle: "Всё ещё здесь?" },
  sr: { tagline: "Пронашли сте правог Jaissona.", confirmed: "Потврђено.", about: "О страници", aboutCopy: "Ово је требало да буде једноставан веб-сајт.", idle: "Још сте ту?" },
  sk: { tagline: "Našli ste správneho Jaissona.", confirmed: "Potvrdené.", about: "O stránke", aboutCopy: "Toto mala byť jednoduchá webová stránka.", idle: "Stále ste tu?" },
  sl: { tagline: "Našli ste pravega Jaissona.", confirmed: "Potrjeno.", about: "O strani", aboutCopy: "To naj bi bila preprosta spletna stran.", idle: "Še vedno tukaj?" },
  es: { tagline: "Has encontrado al Jaisson correcto.", confirmed: "Confirmado.", about: "Acerca de", aboutCopy: "Se suponía que esta sería una web sencilla.", idle: "¿Sigues aquí?" },
  sv: { tagline: "Du hittade rätt Jaisson.", confirmed: "Bekräftat.", about: "Om", aboutCopy: "Det här skulle vara en enkel webbplats.", idle: "Fortfarande här?" },
  tr: { tagline: "Doğru Jaisson'ı buldunuz.", confirmed: "Onaylandı.", about: "Hakkında", aboutCopy: "Bunun basit bir web sitesi olması gerekiyordu.", idle: "Hâlâ burada mısınız?" },
  uk: { tagline: "Ви знайшли потрібного Jaisson.", confirmed: "Підтверджено.", about: "Про сайт", aboutCopy: "Це мав бути простий сайт.", idle: "Ще тут?" },
  "zh-CN": { tagline: "你找对 Jaisson 了。", confirmed: "确认无误。", about: "关于", aboutCopy: "本来只想做一个简单的网站。", idle: "还在吗？" },
  "zh-TW": { tagline: "你找對 Jaisson 了。", confirmed: "確認無誤。", about: "關於", aboutCopy: "本來只想做一個簡單的網站。", idle: "還在嗎？" },
  ja: { tagline: "お探しの Jaisson はこちらです。", confirmed: "確認済み。", about: "このサイトについて", aboutCopy: "シンプルなウェブサイトにするはずでした。", idle: "まだいますか？" }
};

function resolveLocale() {
  const requested = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];

  for (const rawLocale of requested) {
    const normalized = rawLocale.replace("_", "-");
    const lower = normalized.toLowerCase();

    if (lower === "pt-br") return "pt-BR";
    if (lower.startsWith("pt")) return "pt-PT";
    if (lower.startsWith("zh-tw") || lower.startsWith("zh-hk") || lower.includes("hant")) return "zh-TW";
    if (lower.startsWith("zh")) return "zh-CN";

    const base = lower.split("-")[0];
    if (translations[base]) return base;
  }

  return "en";
}

const locale = resolveLocale();
const copy = translations[locale] || translations.en;
document.documentElement.lang = locale;
if (tagline) tagline.textContent = copy.tagline;
if (aboutToggle) aboutToggle.textContent = copy.about;
if (aboutCopy) aboutCopy.textContent = copy.aboutCopy;

const originalText = copy.tagline;
const alternateText = copy.confirmed;

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
  idleMessage.textContent = copy.idle;
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
