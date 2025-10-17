const CATEGORY_MAP = {
  de: { angebote: "angebote", haushalt: "haushalt", handy: "handy", gaming: "gaming", computer: "computer", gesundheit: "gesundheit", sport: "sport", mode: "mode", tiere: "tiere" },
  en: { angebote: "offers", haushalt: "household", handy: "mobile", gaming: "gaming", computer: "computer", gesundheit: "health", sport: "sport", mode: "fashion", tiere: "animals" },
  fr: { angebote: "offres", haushalt: "maison", handy: "telephone", gaming: "jeux", computer: "informatique", gesundheit: "sante", sport: "sport", mode: "mode", tiere: "animaux" },
  it: { angebote: "offerte", haushalt: "casa", handy: "telefono", gaming: "gaming", computer: "computer", gesundheit: "salute", sport: "sport", mode: "moda", tiere: "animali" },
  es: { angebote: "ofertas", haushalt: "hogar", handy: "movil", gaming: "juegos", computer: "informatica", gesundheit: "salud", sport: "deporte", mode: "moda", tiere: "animales" }
};



function renderCards() {
  let cardsContent = document.getElementById("product-cards");
  cardsContent.innerHTML = "";

  // alle Cards durchgehen
  for (let i = 0; i < window.cardsInfo.length; i++) {
    const element = window.cardsInfo[i];
    cardsContent.innerHTML += getCardTemplate(element, i);
  }

  // Slider nachträglich aktivieren
  let cards = cardsContent.querySelectorAll(".product-card");
  for (let j = 0; j < cards.length; j++) {
    initSlider(cards[j]);
  }
}

/**
 * Filtert die angezeigten Produktkarten nach Kategorie.
 * Wird aufgerufen, wenn eine Kategorie im Menü angeklickt wird.
 */
function setupCategoryFilter() {
  const options = document.querySelectorAll(".select-options li");
  const lang = getCurrentLang();
  const map = CATEGORY_MAP[lang] || CATEGORY_MAP.de;

  options.forEach(option => {
    option.addEventListener("click", () => {
      const selectedBase = option.getAttribute("data-value");
      const selectedTranslated = map[selectedBase] || selectedBase;

      const cardsContainer = document.getElementById("product-cards");
      cardsContainer.innerHTML = "";

      const filtered = window.cardsInfo.filter(card => card.category === selectedTranslated);

      for (let i = 0; i < filtered.length; i++) {
        cardsContainer.innerHTML += getCardTemplate(filtered[i], i);
      }

      cardsContainer.querySelectorAll(".product-card").forEach(initSlider);
    });
  });
}



window.addEventListener("DOMContentLoaded", () => {
  loadCards();
  setupCategoryFilter(); // 🟢 Kategorie-Filter aktivieren
});
