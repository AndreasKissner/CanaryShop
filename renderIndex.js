function toggleLangMenue() {
    let burgermenueOutput = document.getElementById("lang-menue-buerger");

    let isHidden = burgermenueOutput.classList.toggle("d-none");

    if (!isHidden) {
        // Menü sichtbar → Inhalt einfügen
        burgermenueOutput.innerHTML = getBuergerMenueTemplate();

        // Sprachbuttons initialisieren
        initLangButtons();
    }  
}

function initLangButtons() {
    let burgermenueOutput = document.getElementById("lang-menue-buerger");

    // Alle Sprach-Buttons im Menü holen
    let langButtons = burgermenueOutput.querySelectorAll(".language-btn");

    for (let i = 0; i < langButtons.length; i++) {
        langButtons[i].addEventListener("click", function () {
            let chosenLang = this.getAttribute("data-lang");

            // Sprache anwenden (kommt aus i18n-home.js)
            applyTranslations(chosenLang);

            // Menü schließen
            burgermenueOutput.classList.add("d-none");
        });
    }
}

function onButtonClick(event) {
    event.stopPropagation();
    toggleLangMenue();
}

// Event Listener erst nach DOM laden anhängen
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("lang-btn");
    if (btn) {
        btn.addEventListener("click", onButtonClick);
    }
});


