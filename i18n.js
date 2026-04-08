document.addEventListener("DOMContentLoaded", () => {
  // Determine language: check localStorage, otherwise navigator.language
  let currentLang = localStorage.getItem("preferred_lang");
  if (!currentLang) {
    const browserLang = navigator.language.toLowerCase();
    // Use Indonesian if local browser is 'id' or 'id-ID', else default to English
    currentLang = browserLang.startsWith("id") ? "id" : "en";
  }

  // Update UI and elements
  setLanguage(currentLang);

  // Setup toggle button event listener
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentLang = currentLang === "id" ? "en" : "id";
      localStorage.setItem("preferred_lang", currentLang);
      setLanguage(currentLang);
    });
  }
});

function setLanguage(lang) {
  // Update toggle button text
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "id" ? "EN" : "ID";
  }

  // Find all elements with data-i18n attribute
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input/textarea placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Set html lang attribute
  document.documentElement.lang = lang;
}
