function getCardTemplate(){
    return`
 <article class="product-card" id="product-card-1" data-i18n="product_card">
  <div class="product-card__slider" id="slider-1" data-i18n="product_slider">
    <div class="product-card__slides" id="slides-1" data-i18n="product_slides">
      <img src="www.png" alt="Bild 1" data-i18n="product_image_1">
      <img src="d.jpeg" alt="Bild 2" data-i18n="product_image_2">
      <img src="test.png" alt="Bild 3" data-i18n="product_image_3">
    </div>
    <button class="slider-btn prev" id="prev-1" data-i18n="slider_prev">‹</button>
    <button class="slider-btn next" id="next-1" data-i18n="slider_next">›</button>
  </div>

  <div class="product-card__body" id="body-1" data-i18n="product_body">
    <h3 class="product-card__title" id="title-1" data-i18n="product_title">
      Dyson V15 Detect
    </h3>
    <p class="product-card__desc" id="desc-1" data-i18n="product_desc">
      Smarter Akkustaubsauger mit Laseraufsatz, starker Saugleistung und Partikelsensor.
    </p>
    <div class="product-card__meta" id="meta-1" data-i18n="product_meta">
      <span class="product-card__price" id="price-1" data-i18n="product_price">Zum aktuellen Preis</span>
      <a href="#" class="product-card__btn" id="btn-1" data-i18n="product_btn">
        Zum Angebot
      </a>
    </div>
  </div>
</article>


    `
}