// je selectionne les éléments dont j'ai besoin
(() => {
  const toggle = document.querySelector(".menu-btn");
  const nav = document.querySelector(".menu");
  const logo = document.querySelector(".header__logo");
  const page = document.body;

  if (!toggle || !nav) return;
  // je crée une fonction pour gérer l'ouverture et la fermeture du menu
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
  // je définis l'état initial du menu
  const initial = toggle.getAttribute("aria-expanded") === "true";
  setOpen(initial);
  // j'ajoute un écouteur d'événement pour le bouton du menu
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });
})();
// vous pouvez le trouver dans l'en-tête de chaque page
