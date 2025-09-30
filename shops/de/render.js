function renderCards() {
  let cardsContent = document.getElementById("product-cards");
  cardsContent.innerHTML = "";

  for (let i = 0; i < window.cardsInfo.length; i++) {
    const element = window.cardsInfo[i];
    cardsContent.innerHTML += getCardTemplate(element, i);
  }

  // nachdem HTML eingefügt ist → Slider initialisieren
  let cards = cardsContent.querySelectorAll(".product-card");
  for (let j = 0; j < cards.length; j++) {
    initSlider(cards[j]);
  }
}

window.addEventListener("load", () => {
  renderCards();
});
