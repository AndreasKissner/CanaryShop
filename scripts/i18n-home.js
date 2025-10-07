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
    subheadline: "Languages",
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
    howto_step3a: "We search daily for the best prices for you. Therefore, prices may change from day to day – so check back with us regularly.",
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
    option_placeholder6: "Mixed",

    info_partner: "As an Amazon Associate, we earn from qualifying purchases.",

    shop_idee: "Shop Recommendation",

    cookie_message: "This website uses cookies to give you the best experience.",
    cookie_accept: "Accept",
    cookie_decline: "Decline",
    cookie_more: "More info",

    cookie_details_title: "Cookie Details",
    cookie_essential_title: "Essential:",
    cookie_essential_text: "Required for using the contact page (if available) and Google Translate for translating the site.",
    cookie_statistic_title: "Statistics:",
    cookie_statistic_text: "For anonymous usage data to improve the site. Example: Google Analytics (only loaded if you consent).",
    cookie_note: "Note: Google Analytics is only activated if you click “Accept”. Anonymous information about website usage is collected to help us improve content and features.",
    cookie_close: "Close",

    shop_idee: "Shop Recommendation",

    cookie_message: "This website uses cookies to give you the best experience.",
    cookie_accept: "Accept",
    cookie_decline: "Decline",
    cookie_more: "More info",

    cookie_details_title: "Cookie Details",
    cookie_essential_title: "Essential:",
    cookie_essential_text: "Required for using the contact page (if available) and Google Translate for translating the site.",
    cookie_statistic_title: "Statistics:",
    cookie_statistic_text: "For anonymous usage data to improve the site. Example: Google Analytics (only loaded if you consent).",
    cookie_note: "Note: Google Analytics is only activated if you click “Accept”. Anonymous information about website usage is collected to help us improve content and features.",
    cookie_close: "Close",

    //Category
    select_placeholder: "Choose a category",
    category_angebote: "Offers",
    category_haushalt: "Household",
    category_gaming: "Gaming",
    category_computer: "Computer",
    category_gesundheit: "Health",
    category_sport: "Sports",
    category_mode: "Fashion & Accessories"

  },
  de: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Sprachen",
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
    howto_step3a: "Wir suchen täglich die besten Preise für Sie. Daher kann sich der Preis von Tag zu Tag ändern – schauen Sie am besten regelmäßig bei uns vorbei.",
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
    option_placeholder6: "Gemischt",

    info_partner: "Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.",

    shop_idee: "Shopempfehlung",

    cookie_message: "Diese Website verwendet Cookies, um dir das beste Erlebnis zu bieten.",
    cookie_accept: "Akzeptieren",
    cookie_decline: "Ablehnen",
    cookie_more: "Mehr Infos",

    cookie_details_title: "Cookie-Details",
    cookie_essential_title: "Essentiell:",
    cookie_essential_text: "notwendig für die Nutzung der Kontaktseite (falls vorhanden) und Google Translate zur Übersetzung der Seite.",
    cookie_statistic_title: "Statistik:",
    cookie_statistic_text: "für anonyme Nutzungsdaten, um die Seite zu verbessern. Beispiel: Google Analytics (wird nur geladen, wenn du zustimmst).",
    cookie_note: "Hinweis: Google Analytics wird ausschließlich aktiviert, wenn du auf „Akzeptieren“ klickst. Dabei werden anonyme Informationen über die Nutzung unserer Website gesammelt. Diese helfen uns, Inhalte und Funktionen zu optimieren.",
    cookie_close: "Schließen",

    shop_idee: "Shopempfehlung",

    cookie_message: "Diese Website verwendet Cookies, um dir das beste Erlebnis zu bieten.",
    cookie_accept: "Akzeptieren",
    cookie_decline: "Ablehnen",
    cookie_more: "Mehr Infos",

    cookie_details_title: "Cookie-Details",
    cookie_essential_title: "Essentiell:",
    cookie_essential_text: "notwendig für die Nutzung der Kontaktseite (falls vorhanden) und Google Translate zur Übersetzung der Seite.",
    cookie_statistic_title: "Statistik:",
    cookie_statistic_text: "für anonyme Nutzungsdaten, um die Seite zu verbessern. Beispiel: Google Analytics (wird nur geladen, wenn du zustimmst).",
    cookie_note: "Hinweis: Google Analytics wird ausschließlich aktiviert, wenn du auf „Akzeptieren“ klickst. Dabei werden anonyme Informationen über die Nutzung unserer Website gesammelt. Diese helfen uns, Inhalte und Funktionen zu optimieren.",
    cookie_close: "Schließen",

    //category
    select_placeholder: "Kategorie wählen",
    category_angebote: "Angebote",
    category_haushalt: "Haushalt",
    category_gaming: "Gaming",
    category_computer: "Computer",
    category_gesundheit: "Gesundheit",
    category_sport: "Sport",
    category_mode: "Mode & Accessoires"

  },
  fr: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Langues",
    video_title: "Comment fonctionne notre boutique",
    video_desc: "Ce qui nous distingue : Nous sélectionnons la meilleure qualité pour vous",
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
    howto_step3a: "Nous recherchons quotidiennement les meilleurs prix pour vous. Ainsi, les prix peuvent varier d’un jour à l’autre – revenez nous voir régulièrement.",
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
    option_placeholder6: "Mixte",

    info_partner: "En tant que partenaire Amazon, nous percevons une commission sur les achats éligibles",

    shop_idee: "Recommandation de boutique",

    cookie_message: "Ce site utilise des cookies pour vous offrir la meilleure expérience.",
    cookie_accept: "Accepter",
    cookie_decline: "Refuser",

    cookie_details_title: "Détails des cookies",
    cookie_essential_title: "Essentiel :",
    cookie_essential_text: "Nécessaire pour l’utilisation de la page de contact (si disponible) et Google Translate pour la traduction du site.",
    cookie_statistic_title: "Statistiques :",
    cookie_statistic_text: "Pour des données d’utilisation anonymes afin d’améliorer le site. Exemple : Google Analytics (chargé uniquement si vous acceptez).",
    cookie_note: "Remarque : Google Analytics est uniquement activé si vous cliquez sur « Accepter ». Des informations anonymes sur l’utilisation du site sont collectées pour nous aider à améliorer les contenus et fonctionnalités.",
    cookie_close: "Fermer",
    cookie_more: "Plus d'infos",

    shop_idee: "Recommandation de boutique",

    cookie_message: "Ce site utilise des cookies pour vous offrir la meilleure expérience.",
    cookie_accept: "Accepter",
    cookie_decline: "Refuser",

    cookie_details_title: "Détails des cookies",
    cookie_essential_title: "Essentiel :",
    cookie_essential_text: "Nécessaire pour l’utilisation de la page de contact (si disponible) et Google Translate pour la traduction du site.",
    cookie_statistic_title: "Statistiques :",
    cookie_statistic_text: "Pour des données d’utilisation anonymes afin d’améliorer le site. Exemple : Google Analytics (chargé uniquement si vous acceptez).",
    cookie_note: "Remarque : Google Analytics est uniquement activé si vous cliquez sur « Accepter ». Des informations anonymes sur l’utilisation du site sont collectées pour nous aider à améliorer les contenus et fonctionnalités.",
    cookie_close: "Fermer",
    cookie_more: "Plus d'infos",

    //Category
    select_placeholder: "Choisir une catégorie",
    category_angebote: "Offres",
    category_haushalt: "Maison",
    category_gaming: "Jeux vidéo",
    category_computer: "Informatique",
    category_gesundheit: "Santé",
    category_sport: "Sport",
    category_mode: "Mode & Accessoires"

  },

  it: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Lingue",
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
    howto_step3a: "Cerchiamo ogni giorno i migliori prezzi per te. Pertanto, i prezzi possono variare di giorno in giorno – controlla regolarmente il nostro sito.",
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
    option_placeholder6: "Misto",

    info_partner: "In qualità di affiliato Amazon guadagniamo dagli acquisti idonei.",

    shop_idee: "Consiglio del negozio",

    cookie_message: "Questo sito utilizza i cookie per offrirti la migliore esperienza.",
    cookie_accept: "Accetta",
    cookie_decline: "Rifiuta",

    cookie_details_title: "Dettagli sui cookie",
    cookie_essential_title: "Essenziale:",
    cookie_essential_text: "Necessario per l’uso della pagina di contatto (se disponibile) e Google Translate per tradurre il sito.",
    cookie_statistic_title: "Statistiche:",
    cookie_statistic_text: "Per dati di utilizzo anonimi al fine di migliorare il sito. Esempio: Google Analytics (caricato solo se acconsenti).",
    cookie_note: "Nota: Google Analytics viene attivato solo se fai clic su “Accetta”. Vengono raccolte informazioni anonime sull’utilizzo del sito per aiutarci a migliorare contenuti e funzionalità.",
    cookie_close: "Chiudi",

    cookie_more: "Altre info",


    shop_idee: "Consiglio del negozio",

    cookie_message: "Questo sito utilizza i cookie per offrirti la migliore esperienza.",
    cookie_accept: "Accetta",
    cookie_decline: "Rifiuta",

    cookie_details_title: "Dettagli sui cookie",
    cookie_essential_title: "Essenziale:",
    cookie_essential_text: "Necessario per l’uso della pagina di contatto (se disponibile) e Google Translate per tradurre il sito.",
    cookie_statistic_title: "Statistiche:",
    cookie_statistic_text: "Per dati di utilizzo anonimi al fine di migliorare il sito. Esempio: Google Analytics (caricato solo se acconsenti).",
    cookie_note: "Nota: Google Analytics viene attivato solo se fai clic su “Accetta”. Vengono raccolte informazioni anonime sull’utilizzo del sito per aiutarci a migliorare contenuti e funzionalità.",
    cookie_close: "Chiudi",

    cookie_more: "Altre info",

    //category
    select_placeholder: "Scegli una categoria",
    category_angebote: "Offerte",
    category_haushalt: "Casa",
    category_gaming: "Gaming",
    category_computer: "Computer",
    category_gesundheit: "Salute",
    category_sport: "Sport",
    category_mode: "Moda e accessori"

  },
  es: {
    headline: "CanaryHub Affiliate Shop",
    subheadline: "Idiomas",
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
    howto_step3a: "Buscamos a diario los mejores precios para usted. Por ello, los precios pueden cambiar de un día para otro; visite nuestra página con regularidad.",
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
    option_placeholder6: "Mixto",

    info_partner_es: "Como afiliado de Amazon, ganamos con las compras que califican.",

    shop_idee: "Recomendación de tienda",

    cookie_message: "Este sitio web utiliza cookies para brindarte la mejor experiencia.",
    cookie_accept: "Aceptar",
    cookie_decline: "Rechazar",

    cookie_details_title: "Detalles de cookies",
    cookie_essential_title: "Esencial:",
    cookie_essential_text: "Necesario para usar la página de contacto (si está disponible) y Google Translate para traducir el sitio.",
    cookie_statistic_title: "Estadísticas:",
    cookie_statistic_text: "Para datos de uso anónimos con el fin de mejorar el sitio. Ejemplo: Google Analytics (solo se carga si das tu consentimiento).",
    cookie_note: "Nota: Google Analytics solo se activa si haces clic en “Aceptar”. Se recopila información anónima sobre el uso del sitio para ayudarnos a mejorar contenidos y funciones.",
    cookie_close: "Cerrar",
    cookie_more: "Más información",

    shop_idee: "Recomendación de tienda",

    cookie_message: "Este sitio web utiliza cookies para brindarte la mejor experiencia.",
    cookie_accept: "Aceptar",
    cookie_decline: "Rechazar",

    cookie_details_title: "Detalles de cookies",
    cookie_essential_title: "Esencial:",
    cookie_essential_text: "Necesario para usar la página de contacto (si está disponible) y Google Translate para traducir el sitio.",
    cookie_statistic_title: "Estadísticas:",
    cookie_statistic_text: "Para datos de uso anónimos con el fin de mejorar el sitio. Ejemplo: Google Analytics (solo se carga si das tu consentimiento).",
    cookie_note: "Nota: Google Analytics solo se activa si haces clic en “Aceptar”. Se recopila información anónima sobre el uso del sitio para ayudarnos a mejorar contenidos y funciones.",
    cookie_close: "Cerrar",
    cookie_more: "Más información",

    //Category
    select_placeholder: "Elige una categoría",
    category_angebote: "Ofertas",
    category_haushalt: "Hogar",
    category_gaming: "Videojuegos",
    category_computer: "Informática",
    category_gesundheit: "Salud",
    category_sport: "Deportes",
    category_mode: "Moda y accesorios"
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
/** Init on DOM ready */
document.addEventListener("DOMContentLoaded", () => {
  // 🌍 Sprache hier einmalig global definieren
  window.currentLang = getPreferredLang(); // erkennt "de", "fr", "en", "it", "es" usw.
 /*  if (!window.currentLang) {
    window.currentLang = "de"; // Testweise – kann später dynamisch geändert werden
  } */

  // Übersetzungen anwenden
  // @ts-ignore
  applyTranslations(window.currentLang);
  renderDetected(window.currentLang);

  // Jahr im Footer setzen
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // 🟢 globale Funktion für andere Skripte
  window.getPreferredLang = function () {
    return window.currentLang;
  };
});
