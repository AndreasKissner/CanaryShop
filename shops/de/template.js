function getCardTemplate(info, i) {
  return `
  <article class="product-card" id="product-card-${i}" data-i18n="product_card">
    <div class="product-card__slider" id="slider-${i}" data-i18n="product_slider">
      <div class="product-card__slides" id="slides-${i}" data-i18n="product_slides">
        ${info.images}
    </div>
      <button class="slider-btn prev" id="prev-${i}" data-i18n="slider_prev"><img class="slider-img" src="../../assets/img/icons/left.png" alt="Left Icon"></button>
      <button class="slider-btn next" id="next-${i}" data-i18n="slider_next"><img class="slider-img" src="../../assets/img/icons/right.png" alt="Right Icon"></button>
    </div>

    <div class="product-card__body" id="body-${i}" data-i18n="product_body">
      <h3 class="product-card__title" id="title-${i}" data-i18n="product_title">
        ${info.title}
      </h3>
      <p class="product-card__desc" id="desc-${i}" data-i18n="product_desc">
        ${info.description}
      </p>
      <div class="product-card__meta" id="meta-${i}" data-i18n="product_meta">
        <a href="${info.price}" 
           class="product-card__price product-card__btn" 
           id="price-${i}" 
           data-i18n="product_price" 
           target="_blank">
          Zum TOP Preis
        </a>
        <a href="${info.toArticle}" 
           class="product-card__btn" 
           id="btn-${i}" 
           data-i18n="product_btn" 
           target="_blank">
          Zum Angebot
        </a>
      </div>
    </div>
  </article>`;
}
