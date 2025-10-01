document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  const consent = localStorage.getItem("cookie-consent");

  if (consent) {
    overlay.style.display = "none";
    if (consent === "accepted") {
      loadAnalytics();
    }
  } else {
    document.body.style.overflow = "hidden"; // kein Scrollen
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Scroll wieder frei
    loadAnalytics();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "declined");
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Scroll wieder frei
  });
});

function loadAnalytics() {
  const scriptTag = document.createElement("script");
  scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  scriptTag.async = true;
  document.head.appendChild(scriptTag);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}
