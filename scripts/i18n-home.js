/**
 * @file i18n-home.js
 * @description Sprach-Handling NUR für die Startseite (Landing). Setzt Texte anhand der Browser-Sprache.
 *              Inhalte/Links der Sprach-Shops selbst liegen auf separaten Unterseiten (/de, /en, ...).
 * @version 1.0.0
 */

/**
 * Ermittelt die bevorzugte Sprache des Nutzers.
 * Nutzt navigator.languages mit Fallback auf navigator.language.
 * @returns {string} BCP-47 Sprachcode in Kleinschreibung (z. B. "de", "en", "fr", "it", "es").
 */
function getPreferredLang() {
  /** @type {string[]} */
  const langs = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || "en"];
  // Nur Primärsprache zurückgeben (z. B. "de" aus "de-CH")
  return langs[0]?.toLowerCase().split("-")[0] || "en";
}

/**
 * Minimales Wörterbuch nur für die Startseite.
 * Schlüssel = Sprachcode; Werte = Übersetzungsobjekt.
 */
const DICT = {
  en: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Find your shop in your language.",
    video_title: "How our shop works",
    video_desc: "This is what sets us apart. We look for quality for you.",
    choose_shop: "Choose your shop",
    shop_de: "Shop German",
    shop_de_sub: "Amazon.de • €",
    shop_en: "Shop English",
    shop_en_sub: "Amazon.co.uk/COM • £/$",
    shop_fr: "Boutique Français",
    shop_fr_sub: "Amazon.fr • €",
    shop_it: "Negozio Italiano",
    shop_it_sub: "Amazon.it • €",
    shop_es: "Tienda Español",
    shop_es_sub: "Amazon.es • €",
    shop_intl: "International (EN)",
    shop_intl_sub: "Fallback • Mixed",
    howto_trigger: "How our shop works",
    howto_close: "Close",
    howto_title: "How our shop works",
    howto_intro: "Here you’ll find carefully selected products. This is how shopping works step by step:",
    howto_step1: "Choose your language: Click the button with your language to open the shop in your language.",
    howto_step2: "Browse products: Explore the categories and click on the items you are interested in.",
    howto_step3: "Go to Amazon: When you click on a product, you’ll be redirected to Amazon. There you can add it to your cart and pay.",
    howto_step4: "Amazon account: To complete the purchase, you need a free Amazon account.",
    howto_account_text: "Don’t have an Amazon account yet?",
    howto_account_link: "Create one for free here",
    howto_disclosure: "Note: If you make a purchase through our shop, we receive a small commission from the seller. The price remains the same for you.",
    howto_ok: "Got it",
    legal_Notice: "Legal Notice",
    privacy_Policy: "Privacy Policy",
    start_seite: "Home",

    option_placeholder1: "Shop Categories",
    option_placeholder1: "Shop Categories",
    option_placeholder2: "Vacation",
    option_placeholder3: "Gaming",
    option_placeholder4: "Fashion Accessories",
    option_placeholder5: "Sports",
    option_placeholder6: "Mixed"
  },
  de: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Finde deinen Shop in deiner Sprache.",
    video_title: "So funktioniert unser Shop",
    video_desc: "Das zeichnet uns aus. Wir suchen Qualität für Sie",
    choose_shop: "Wähle deinen Shop",
    shop_de: "Shop Deutsch",
    shop_de_sub: "Amazon.de • €",
    shop_en: "Shop English",
    shop_en_sub: "Amazon.co.uk/COM • £/$",
    shop_fr: "Boutique Français",
    shop_fr_sub: "Amazon.fr • €",
    shop_it: "Negozio Italiano",
    shop_it_sub: "Amazon.it • €",
    shop_es: "Tienda Español",
    shop_es_sub: "Amazon.es • €",
    shop_intl: "International (EN)",
    shop_intl_sub: "Fallback • Mixed",
    howto_trigger: "So funktioniert unser Shop",
    howto_close: "Schließen",
    howto_title: "So funktioniert unser Shop",
    howto_intro: "Hier findest du sorgfältig ausgewählte Produkte. So klappt der Einkauf Schritt für Schritt:",
    howto_step1: "Sprache wählen: Klicke auf den Button mit deiner Sprache, um den Shop in deiner Sprache zu öffnen.",
    howto_step2: "Produkte ansehen: Stöbere in den Kategorien und klicke auf Artikel, die dich interessieren.",
    howto_step3: "Weiter zu Amazon: Beim Klick auf ein Produkt wirst du zu Amazon weitergeleitet. Dort kannst du den Artikel in den Warenkorb legen und bezahlen.",
    howto_step4: "Amazon-Konto: Für den Kauf brauchst du ein kostenloses Amazon-Konto.",
    howto_account_text: "Du hast noch kein Amazon-Konto?",
    howto_account_link: "Hier kostenlos erstellen",
    howto_disclosure: "Hinweis: Wenn du über unseren Shop einkaufst, erhalten wir eine kleine Provision von Veräufer. Für dich bleibt der Preis gleich.",
    howto_ok: "Verstanden",
    legal_Notice: "Impressum",
    privacy_Policy: "Datenschutz",
    start_seite: "Startseite",

    option_placeholder1: "Shop Kategorien",
    option_placeholder1: "Shop Kategorien",
    option_placeholder2: "Urlaub",
    option_placeholder3: "Gaming",
    option_placeholder4: "Mode-Accessoires",
    option_placeholder5: "Sport",
    option_placeholder6: "Gemischt"
  },
  fr: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Trouvez votre boutique dans votre langue.",
    video_title: "Comment fonctionne notre boutique",
    video_desc: "C’est ce qui nous distingue. Nous recherchons la qualité pour vous.",
    choose_shop: "Choisissez votre boutique",
    shop_de: "Boutique Allemand",
    shop_de_sub: "Amazon.de • €",
    shop_en: "Shop English",
    shop_en_sub: "Amazon.co.uk/COM • £/$",
    shop_it: "Negozio Italiano",
    shop_it_sub: "Amazon.it • €",
    shop_es: "Tienda Español",
    shop_es_sub: "Amazon.es • €",
    shop_intl: "International (EN)",
    shop_intl_sub: "Fallback • Mixed",
    howto_trigger: "Comment fonctionne notre boutique",
    howto_close: "Fermer",
    howto_title: "Comment fonctionne notre boutique",
    howto_intro: "Ici, tu trouveras des produits soigneusement sélectionnés. Voici comment l’achat se déroule étape par étape :",
    howto_step1: "Choisis ta langue : clique sur le bouton correspondant pour ouvrir la boutique dans ta langue.",
    howto_step2: "Découvre les produits : parcours les catégories et clique sur les articles qui t’intéressent.",
    howto_step3: "Aller sur Amazon : en cliquant sur un produit, tu es redirigé vers Amazon. Tu peux ensuite l’ajouter au panier et payer.",
    howto_step4: "Compte Amazon : pour finaliser ton achat, il te faut un compte Amazon gratuit.",
    howto_account_text: "Tu n’as pas encore de compte Amazon ?",
    howto_account_link: "Crée-en un gratuitement ici",
    howto_disclosure: "Remarque : Si vous effectuez un achat via notre boutique, nous recevons une petite commission du vendeur. Le prix reste le même pour vous.",
    howto_ok: "Compris",
    legal_Notice: "Mentions légales",
    privacy_Policy: "Politique de confidentialité",
    start_seite: "Accueil",

    option_placeholder1: "Catégories de boutique",
    option_placeholder1: "Catégories de boutique",
    option_placeholder2: "Vacances",
    option_placeholder3: "Jeux vidéo",
    option_placeholder4: "Accessoires de mode",
    option_placeholder5: "Sport",
    option_placeholder6: "Mixte"
  },

  it: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Trova il tuo negozio nella tua lingua.",
    video_title: "Come funziona il nostro shop",
    video_desc: "Questo è ciò che ci distingue. Cerchiamo qualità per voi",
    choose_shop: "Scegli il tuo negozio",
    shop_de: "Negozio Tedesco",
    shop_de_sub: "Amazon.de • €",
    shop_en: "Shop English",
    shop_en_sub: "Amazon.co.uk/COM • £/$",
    shop_fr: "Boutique Français",
    shop_fr_sub: "Amazon.fr • €",
    shop_es: "Tienda Español",
    shop_es_sub: "Amazon.es • €",
    shop_intl: "International (EN)",
    shop_intl_sub: "Fallback • Mixed",
    howto_trigger: "Come funziona il nostro shop",
    howto_close: "Chiudi",
    howto_title: "Come funziona il nostro shop",
    howto_intro: "Qui trovi prodotti selezionati con cura. Ecco come funziona l’acquisto passo dopo passo:",
    howto_step1: "Scegli la lingua: clicca sul pulsante con la tua lingua per aprire lo shop nella tua lingua.",
    howto_step2: "Guarda i prodotti: esplora le categorie e clicca sugli articoli che ti interessano.",
    howto_step3: "Vai su Amazon: cliccando su un prodotto vieni reindirizzato su Amazon. Lì puoi aggiungerlo al carrello e pagare.",
    howto_step4: "Account Amazon: per completare l’acquisto serve un account Amazon gratuito.",
    howto_account_text: "Non hai ancora un account Amazon?",
    howto_account_link: "Creane uno gratis qui",
    howto_disclosure: "Nota: Se acquisti tramite il nostro shop, riceviamo una piccola commissione dal venditore. Per te il prezzo rimane invariato.",
    howto_ok: "Ho capito",
    legal_Notice: "Note legali",
    privacy_Policy: "Informativa sulla privacy",
    start_seite: "Home",

    option_placeholder1: "Categorie del negozio",
    option_placeholder1: "Categorie del negozio",
    option_placeholder2: "Vacanze",
    option_placeholder3: "Gaming",
    option_placeholder4: "Accessori moda",
    option_placeholder5: "Sport",
    option_placeholder6: "Misto"
  },
  es: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Encuentra tu tienda en tu idioma.",
    video_title: "Cómo funciona nuestra tienda",
    video_desc: "Esto es lo que nos distingue. Buscamos calidad para usted",
    choose_shop: "Elige tu tienda",
    shop_de: "Tienda Alemán",
    shop_de_sub: "Amazon.de • €",
    shop_en: "Shop English",
    shop_en_sub: "Amazon.co.uk/COM • £/$",
    shop_fr: "Boutique Français",
    shop_fr_sub: "Amazon.fr • €",
    shop_it: "Negozio Italiano",
    shop_it_sub: "Amazon.it • €",
    shop_intl: "International (EN)",
    shop_intl_sub: "Fallback • Mixed",
    howto_trigger: "Cómo funciona nuestra tienda",
    howto_close: "Cerrar",
    howto_title: "Cómo funciona nuestra tienda",
    howto_intro: "Aquí encontrarás productos cuidadosamente seleccionados. Así es como funciona la compra paso a paso:",
    howto_step1: "Elige tu idioma: Haz clic en el botón con tu idioma para abrir la tienda en tu idioma.",
    howto_step2: "Mira los productos: Explora las categorías y haz clic en los artículos que te interesen.",
    howto_step3: "Ir a Amazon: Al hacer clic en un producto serás dirigido a Amazon. Allí puedes añadirlo al carrito y pagar.",
    howto_step4: "Cuenta de Amazon: Para finalizar la compra necesitas una cuenta gratuita de Amazon.",
    howto_account_text: "¿Todavía no tienes una cuenta de Amazon?",
    howto_account_link: "Crea una aquí gratis",
    howto_disclosure: "Nota: Si realizas una compra a través de nuestra tienda, recibimos una pequeña comisión del vendedor. Para ti el precio se mantiene igual.",
    howto_ok: "Entendido",
    legal_Notice: "Aviso legal",
    privacy_Policy: "Política de privacidad",
    start_seite: "Inicio",

    option_placeholder1: "Categorías de la tienda",
       option_placeholder1: "Categorías de la tienda",
    option_placeholder2: "Vacaciones",
    option_placeholder3: "Juegos",
    option_placeholder4: "Accesorios de moda",
    option_placeholder5: "Deportes",
    option_placeholder6: "Mixto"

  }
};

/**
 * Wendet die Übersetzungen auf alle Elemente mit data-i18n an.
 * @param {string} lang - Sprachcode (z. B. "de"). Fällt auf "en" zurück, wenn nicht vorhanden.
 */
function applyTranslations(lang) {
  const pack = DICT[lang] || DICT.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    // Wenn ein Link (<a>) drin ist, nur dessen Text ersetzen
    const link = el.querySelector("a");
    if (link && pack[key]) {
      link.textContent = pack[key];
    } else if (pack[key]) {
      el.textContent = pack[key];
    }
  });
}


/**
 * Zeigt eine kleine Info zur erkannten Sprache.
 * @param {string} lang - erkannte Sprache
 */
function renderDetected(lang) {
  const el = document.getElementById("detected");
  if (!el) return;
  const names = { de: "Deutsch", en: "English", fr: "Français", it: "Italiano", es: "Español" };
  const nice = names[lang] || "English";

}

/** Init on DOM ready */
document.addEventListener("DOMContentLoaded", () => {
  /* const lang = getPreferredLang(); */
  const lang = "en";
  applyTranslations(lang);
  renderDetected(lang);
  // Jahr im Footer setzen
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
