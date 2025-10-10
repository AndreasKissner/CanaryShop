function initHowToOverlay() {
    const overlay = document.getElementById("howto-overlay");
    const trigger = document.querySelector(".howto-trigger");

    if (!overlay || !trigger) return; // Safety-Check

    const closeLinks = overlay.querySelectorAll(".close-link, .btn, .overlay-backdrop");

    // Overlay öffnen
    trigger.addEventListener("click", e => {
        e.preventDefault();
        overlay.removeAttribute("inert");
        overlay.classList.add("is-open");
        overlay.querySelector(".close-link")?.focus();
    });

    // Overlay schließen
    closeLinks.forEach(el => {
        el.addEventListener("click", e => {
            e.preventDefault();
            overlay.setAttribute("inert", "");
            overlay.classList.remove("is-open");
            trigger.focus();
        });
    });
}
