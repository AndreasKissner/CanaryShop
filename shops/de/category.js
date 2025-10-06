function initCustomSelect() {
  let trigger = document.querySelector('.select-trigger');
  let options = document.querySelector('.select-options');
  let selectedText = document.querySelector('.selected-text');
  let hiddenSelect = document.getElementById('category-select');
  let optionItems = options.getElementsByTagName('li');

  // Klick auf Button: Dropdown öffnen/schließen
  trigger.onclick = function () {
    let expanded = trigger.getAttribute('aria-expanded');
    if (expanded === 'true') {
      closeOptions();
    } else {
      openOptions();
    }
  };

  // Optionen durchgehen mit for-Schleife
  for (let i = 0; i < optionItems.length; i++) {
    optionItems[i].onclick = function () {
      selectOption(optionItems[i]);
    };
  }

  // Klick außerhalb schließt das Menü
  document.onclick = function (e) {
    if (!e.target.closest('.custom-select')) {
      closeOptions();
    }
  };

  // --- Innere Funktionen ---
  function openOptions() {
    trigger.setAttribute('aria-expanded', 'true');
    options.classList.add('show');
  }

  function closeOptions() {
    trigger.setAttribute('aria-expanded', 'false');
    options.classList.remove('show');
  }

  function selectOption(option) {
    let value = option.getAttribute('data-value');
    selectedText.textContent = option.textContent;
    hiddenSelect.value = value;

    // Alle anderen Optionen deaktivieren
    for (let j = 0; j < optionItems.length; j++) {
      optionItems[j].classList.remove('selected');
    }
    option.classList.add('selected');

    closeOptions();
  }
}
