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

// Contagem regressiva — Data final do evento (23/10/2026)
(function () {
  // Data alvo: 23 de outubro de 2026 (Dia do teste de carga e divulgação dos resultados)
  var TARGET = new Date("2026-10-23T00:00:00-03:00").getTime();
  var timerEl = document.getElementById("countdown-timer");
  var labelEl = document.getElementById("countdown-label");

  function update() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      if (timerEl) {
        timerEl.textContent = "🏁 00d 00h 00m 00s";
        timerEl.style.animation = "none";
      }
      if (labelEl) labelEl.textContent = "Evento finalizado!";
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var dStr = String(days).padStart(2, "0") + "d";
    var hStr = String(hours).padStart(2, "0") + "h";
    var mStr = String(minutes).padStart(2, "0") + "m";
    var sStr = String(seconds).padStart(2, "0") + "s";

    if (timerEl) {
      timerEl.textContent = `${dStr} ${hStr} ${mStr} ${sStr}`;
    }
    if (labelEl) {
      labelEl.textContent = "para o grande dia (23/10)";
    }
  }

  update();
  setInterval(update, 1000);
})();
