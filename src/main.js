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
  if (box && typeof box.showModal === "function") {
    const img = box.querySelector("img");
    document.querySelectorAll(".gallery-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const thumb = btn.querySelector("img");
        img.src = btn.dataset.full;
        img.alt = thumb.alt;
        box.showModal();
      });
    });
    // click on the backdrop closes
    box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  }
});
