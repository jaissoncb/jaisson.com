(() => {
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const themeColors = {
    light: "#f7f9fb",
    dark: "#071522"
  };

  function getTheme(date = new Date()) {
    try {
      const hour = Number(new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        hourCycle: "h23"
      }).format(date));

      return hour >= 7 && hour < 19 ? "light" : "dark";
    } catch {
      return "light";
    }
  }

  function apply() {
    const theme = getTheme();
    root.dataset.theme = theme;

    if (themeColor) {
      themeColor.setAttribute("content", themeColors[theme]);
    }
  }

  window.jaissonTheme = { apply, getTheme };
  apply();
})();
