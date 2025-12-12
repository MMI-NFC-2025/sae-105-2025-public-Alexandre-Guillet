(function () {
  const toggle = document.querySelector(".menu-btn");
  const nav = document.querySelector(".menu");
  const logo = document.querySelector(".header__logo");
  const page = document.body;

  if (nav && typeof nav.hidden === "undefined") {
    try {
      nav.hidden = true;
    } catch (e) {}
  }

  if (toggle && nav) {
    if (!toggle.hasAttribute("aria-expanded"))
      toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const isOpen = String(toggle.ariaExpanded) === "true";
      const isClosed = !isOpen;

      toggle.ariaExpanded = String(isClosed);
      nav.hidden = isOpen;
      if (logo) logo.classList.toggle("header__logo--extend", isClosed);
      if (page) page.classList.toggle("u-noscroll", isClosed);
    });
});