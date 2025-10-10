   const translations = {
          tooltip_de: "Bald verfügbar",
          tooltip_en: "Coming soon",
          tooltip_fr: "Bientôt disponible",
          tooltip_it: "Disponibile presto",
          tooltip_es: "Próximamente",
          tooltip_intl: "Coming soon"
        };

        document.querySelectorAll('.tile.disabled').forEach(link => {
          // Klicks blockieren
          link.addEventListener('click', e => e.preventDefault());

          // Tooltip Text setzen
          const key = link.getAttribute('data-i18n-tooltip');
          link.setAttribute('data-tooltip', translations[key]);
        });
        /* --- */