const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

const galleryFolders = document.querySelectorAll(".gallery-folder");
const galleryPanels = document.querySelectorAll(".gallery-panel");

if (galleryFolders.length && galleryPanels.length) {
  galleryFolders.forEach((folder) => {
    folder.addEventListener("click", () => {
      const targetId = folder.getAttribute("data-target");

      galleryPanels.forEach((panel) => {
        panel.hidden = panel.id !== targetId;
      });

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

const galleryImages = document.querySelectorAll(".gallery-open");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

if (galleryImages.length && lightbox && lightboxImg && lightboxClose) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("open");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
  });
}