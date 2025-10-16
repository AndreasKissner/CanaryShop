window.cardsInfo = [];

/**
 * Holt Bild-Keys aus einem Produktobjekt
 */
async function getImgFomObject(imgJson) {
  if (!imgJson || !imgJson.images || typeof imgJson.images !== "object") {
    console.warn("⚠️ Keine Bilder im Produkt gefunden:", imgJson);
    return [];
  }
  return Object.keys(imgJson.images);
}

/**
 * Wandelt Bildobjekte in <img>-HTML um
 */
async function imgToArray(cardEl) {
  let imgKeyObj = await getImgFomObject(cardEl);
  let imgs = "";
  for (let i = 0; i < imgKeyObj.length; i++) {
    const imgIndex = imgKeyObj[i];
    let imgEl = cardEl.images[imgIndex];
    imgs += `<img src="${imgEl.src}" alt="${imgEl.alt}">`;
  }
  return imgs;
}

/**
 * Lädt automatisch die richtigen Daten aus Firebase je nach Sprache.
 */
async function loadCards() {
  const lang = getCurrentLang(); // z. B. "fr", "de" usw.
  const path = ""; // kein "kategorien" mehr anhängen, das macht Firebase selbst

  console.log(`[Info:] Sprache erkannt: ${lang}`);
  console.log(`[Info:] Lade Daten von: ${BASE_URL + "/" + lang}.json`);

  // Hauptstruktur aus Firebase holen
  const responseRoot = await getDatas(path);
  const responseJson = responseRoot?.kategorien; // 🟢 wichtig: Zugriff auf Unterobjekt

  if (!responseJson) {
    console.warn("⚠️ Keine Daten für diese Sprache gefunden.");
    return;
  }

  window.cardsInfo = [];

  // Kategorien (angebote, haushalt, mode, ...)
  const categories = Object.keys(responseJson);
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const products = responseJson[cat];

    const productKeys = Object.keys(products);
    for (let j = 0; j < productKeys.length; j++) {
      const key = productKeys[j];
      const card = products[key];

      // Bilder-HTML erzeugen
      let imgHTML = "";
      if (card.images) {
        const imgKeys = Object.keys(card.images);
        for (let k = 0; k < imgKeys.length; k++) {
          const img = card.images[imgKeys[k]];
          imgHTML += `<img src="${img.src}" alt="${img.alt}">`;
        }
      }

      // Karte ins Array pushen
      window.cardsInfo.push({
        title: card.title || "Kein Titel",
        description: card.description || "",
        images: imgHTML,
        price: card.price || "",
        toArticle: card.toArticle || "#",
        category: cat
      });
    }
  }

  // Karten rendern
  renderCards();
}

/**
 * Start beim Laden der Seite
 */
window.addEventListener("DOMContentLoaded", () => {
  loadCards();
});

/**
 * Sprachumschalter
 */
document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-lang]");
  if (!btn) return; // kein Sprachbutton
  const newLang = btn.getAttribute("data-lang");

  console.log(`[LangSwitch] Sprache gewechselt zu: ${newLang}`);

  // Sprache global umstellen (überall gültig)
  window.getPreferredLang = () => newLang;

  // Seite neu laden lassen (mit neuer Sprache)
  await loadCards();
});
