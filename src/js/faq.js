// FAQ - Gestion de l'ouverture des items FAQ

document.addEventListener("DOMContentLoaded", function () {
  const faqList = document.querySelector(".faq__list");
  if (!faqList) return;
  const items = Array.from(faqList.querySelectorAll("details.faq__item"));

  // je m'assure qu'un seul item est ouvert à la fois
  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item && other.open) other.open = false;
      });
    });
  });
});

// vous pouvez le trouver en bas de la page d'infos pratiques
