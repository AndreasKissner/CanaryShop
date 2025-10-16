/**
 * Ermittelt die aktuelle Sprache der Seite.
 * 1. Wenn ein globales i18n-Skript (wie i18n-home.js) vorhanden ist, nutzt es dessen Funktion.
 * 2. Sonst fällt es auf "de" zurück.
 * @returns {string} Sprachcode (de, en, fr, it, es)
 */
function getCurrentLang() {
  if (typeof getPreferredLang === "function") {
    return getPreferredLang(); // nutzt dein i18n-System
  }
  return "de"; // Fallback
}

/**
 * Basis-URL deiner Firebase Realtime Database
 */
const BASE_URL = "https://cardscanaryhubshop-default-rtdb.europe-west1.firebasedatabase.app/anzeigen";

/**
 * Holt Daten aus Firebase nach aktueller Sprache.
 * Beispiel: /anzeigen/de.json
 * @param {string} path - Optionaler Zusatzpfad (z. B. "/de")
 */
async function getDatas(path = "") {
  try {
    const lang = getCurrentLang(); // holt automatisch de, en, fr, it oder es
    const fullPath = `/${lang}${path}`;
    const response = await fetch(BASE_URL + fullPath + ".json");
console.log(fullPath);
    if (!response.ok) {
      throw new Error(`[HTTP ERROR!] Status:${response.status}`);
    }

    console.log(`[Info:] Daten geladen für Sprache: ${lang} (${response.status})`);
    return await response.json();

  } catch (error) {
    console.error("Request Error", error.message);
  }
}
