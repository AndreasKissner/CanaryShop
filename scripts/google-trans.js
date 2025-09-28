  // Google Init
    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement({
        pageLanguage: 'de',
        includedLanguages: 'de,en,fr,it,es',
        autoDisplay: false
      }, 'google_translate_element');
    };

    // Button Handler
    document.addEventListener("click", function(e) {
      if (e.target.dataset.lang) {
        let lang = e.target.dataset.lang;
        let select = document.querySelector("#google_translate_element select");

        if (!select) return;

        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.startsWith(lang)) {
            select.selectedIndex = i;
            select.dispatchEvent(new Event("change"));
            break;
          }
        }
      }
    });