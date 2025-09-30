function renderCards() {
  let cardsContent = document.getElementById("product-cards");
  cardsContent.innerHTML = "";
  for (let i = 0; i < window.cardsInfo.length; i++) {
    const element = window.cardsInfo[i];

    cardsContent.innerHTML += getCardTemplate(element, i);
  }
 
}

window.addEventListener("load", () => {
  renderCards()
});