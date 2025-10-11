function renderHeader() {
    const headerContent = document.getElementById("header-content");
    headerContent.innerHTML = getHeaderTemplate();

    // Jetzt ist der Button im DOM!
    const btn = document.getElementById("lang-btn");
    if (btn) {
        btn.addEventListener("click", onButtonClick);
    }
}


// Nach dem Rendern aufrufen
function renderGoToAndShopFunction() {
    const goToContent = document.getElementById("go-to-and-how-function");
    if (!goToContent) return;
    goToContent.innerHTML = getGoAndFuncTemplate();

    // Overlay-Logik **erst hier** starten
    initHowToOverlay();
}

function renderFooter() {
    const footerContent = document.getElementById("footer-content")
    footerContent.innerHTML = getFooterTemplate();
}


function renderActionCardTemplate(){
    const actionCardsContent = document.getElementById("action-cards-content");
    actionCardsContent.innerHTML = getActionCardTemplate();
}

window.addEventListener("load", () => {
    renderHeader();
    renderGoToAndShopFunction()
    renderFooter();
    renderActionCardTemplate()
});