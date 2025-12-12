// Simplified menu behavior adapted from user snippet
(function () {
  const toggle = document.querySelector(".menu-btn");
  const nav = document.querySelector(".menu");
  const logo = document.querySelector(".header__logo");
  const page = document.body;

  // Ensure nav is hidden initially if markup didn't include it
  if (nav && typeof nav.hidden === "undefined") {
    try {
      nav.hidden = true;
    } catch (e) {
      // ignore if not supported
    }
  }

  if (toggle && nav) {
    // Ensure aria-expanded initial state
    if (!toggle.hasAttribute("aria-expanded"))
      toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isOpen = String(toggle.ariaExpanded) === "true";
      const isClosed = !isOpen;

      // Mise à jour des attributs ARIA pour accessibilité
      toggle.ariaExpanded = String(isClosed);
      nav.hidden = isOpen;
      if (logo) logo.classList.toggle("header__logo--extend", isClosed);
      if (page) page.classList.toggle("u-noscroll", isClosed);
    });

    // Close on Escape for better UX
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        const isOpen = String(toggle.ariaExpanded) === "true";
        if (isOpen) toggle.click();
      }
    });
  }
})();
