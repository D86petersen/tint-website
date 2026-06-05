const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const yearNode = document.getElementById("year");
const logoNode = document.getElementById("brandLogo");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("open", !expanded);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    });
  });
}

if (logoNode) {
  logoNode.addEventListener("error", () => {
    logoNode.src = "assets/logo-placeholder.svg";
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
