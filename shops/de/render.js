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

window.addEventListener("load", () => {
  renderCards();
});


window.addEventListener("load", () => {
  renderCards();
});
