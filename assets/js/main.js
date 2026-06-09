const navLinks = Array.from(document.querySelectorAll(".primary a"));

function updateActiveNav() {
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  let currentId = "#top";
  for (const section of sections) {
    const top = section.getBoundingClientRect().top;
    if (top <= 120) {
      currentId = `#${section.id}`;
    }
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentId);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();
