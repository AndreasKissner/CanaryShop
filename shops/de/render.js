const CATEGORY_MAP = {
  de: { angebote: "angebote", haushalt: "haushalt", handy: "handy", gaming: "gaming", computer: "computer", gesundheit: "gesundheit", sport: "sport", mode: "mode" },
  en: { angebote: "offers", haushalt: "household", handy: "mobile", gaming: "gaming", computer: "computer", gesundheit: "health", sport: "sport", mode: "fashion" },
  fr: { angebote: "offres", haushalt: "maison", handy: "telephone", gaming: "jeux", computer: "informatique", gesundheit: "sante", sport: "sport", mode: "mode" },
  it: { angebote: "offerte", haushalt: "casa", handy: "telefono", gaming: "gaming", computer: "computer", gesundheit: "salute", sport: "sport", mode: "moda" },
  es: { angebote: "ofertas", haushalt: "hogar", handy: "movil", gaming: "juegos", computer: "informatica", gesundheit: "salud", sport: "deporte", mode: "moda" }
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


window.addEventListener("DOMContentLoaded", () => {
  loadCards();
  setupCategoryFilter(); // 🟢 Kategorie-Filter aktivieren
});
