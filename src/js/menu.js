(() => {
  const toggle = document.querySelector(".menu-btn");
  const nav = document.querySelector(".menu");
  const logo = document.querySelector(".header__logo");
  const page = document.body;

  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    if (open) {
      nav.removeAttribute("hidden");
      page.classList.add("u-noscroll");
      if (logo) logo.classList.add("header__logo--extend");
    } else {
      nav.setAttribute("hidden", "");
      page.classList.remove("u-noscroll");
      if (logo) logo.classList.remove("header__logo--extend");
    }
  };

  // initialize from attribute or default closed
  const initial = toggle.getAttribute("aria-expanded") === "true";
  setOpen(initial);

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  // close on escape
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" || evt.key === "Esc") {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) setOpen(false);
    }
  });
})();
