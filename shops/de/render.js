function renderCards(){
    let cardsContent = document.getElementById("product-cards");
    cardsContent.innerHTML = "";


    cardsContent.innerHTML = getCardTemplate();
}

window.addEventListener("load", () => {
  renderCards()
});