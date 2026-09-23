// Menu móvel
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Galeria com visualização ampliada
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".gallery__item").forEach((item) => {
  const img = item.querySelector("img");
  item.setAttribute("aria-label", "Ampliar imagem: " + img.alt);
  item.addEventListener("click", () => openLightbox(img.src, img.alt));
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// Contagem regressiva — Entrega das pontes (19/10/2026)
(function () {
  // Data alvo: 19 de outubro de 2026, início do dia (horário de Brasília)
  var TARGET = new Date("2026-10-19T00:00:00-03:00").getTime();
  var daysEl = document.getElementById("countdown-days");
  var labelEl = document.getElementById("countdown-label");

  function update() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      daysEl.textContent = "🏁";
      labelEl.textContent = "Dia da entrega!";
      daysEl.style.animation = "none";
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    daysEl.textContent = days;
    labelEl.textContent = days === 1 ? "dia para a entrega" : "dias para a entrega";

    // Atualiza a cada hora
    setTimeout(update, 1000 * 60 * 60);
  }

  update();
})();
