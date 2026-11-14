// Slide-in menu and photo lightbox. The site works without this file.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");
  const closer = menu?.querySelector(".menu-close");

  if (menu && toggle) {
    menu.hidden = false;
    menu.inert = true;
    const setOpen = (open) => {
      body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      menu.inert = !open;
      if (open) menu.querySelector("a")?.focus();
      else toggle.focus({ preventScroll: true });
    };
    toggle.addEventListener("click", () => setOpen(!body.classList.contains("menu-open")));
    closer?.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && body.classList.contains("menu-open")) setOpen(false);
    });
  }

  document.querySelectorAll("[data-print]").forEach((a) =>
    a.addEventListener("click", (e) => { e.preventDefault(); window.print(); })
  );

  const box = document.querySelector(".lightbox");
  const items = [...document.querySelectorAll(".gallery-item")];
  if (box && items.length && typeof box.showModal === "function") {
    const img = box.querySelector("img");
    const cap = box.querySelector("figcaption");
    let index = 0;
    const show = (i) => {
      index = (i + items.length) % items.length;
      const thumb = items[index].querySelector("img");
      img.src = items[index].dataset.full;
      img.alt = thumb.alt;
      cap.textContent = thumb.alt;
    };
    items.forEach((btn, i) => btn.addEventListener("click", () => { show(i); box.showModal(); }));
    box.querySelector(".lightbox-prev").addEventListener("click", () => show(index - 1));
    box.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));
    box.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
    // swipe on touch screens
    let x0 = null;
    box.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    // click on the backdrop closes
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  }
});
