function initSlider(cardElement) {
  const slides = cardElement.querySelector(".product-card__slides");
  const images = slides.querySelectorAll("img");
  const prevBtn = cardElement.querySelector(".slider-btn.prev");
  const nextBtn = cardElement.querySelector(".slider-btn.next");
  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  showSlide(0); // Start bei erstem Bild
}

// alle Cards initialisieren
document.querySelectorAll(".product-card").forEach(initSlider);
