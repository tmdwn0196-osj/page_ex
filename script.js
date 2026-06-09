const sections = [...document.querySelectorAll(".section[id]")];
const navLinks = [...document.querySelectorAll(".topbar__nav a")];

const navMap = new Map(navLinks.map((link) => [link.getAttribute("href").slice(1), link]));

const observer = new IntersectionObserver(
  (entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current) return;

    navLinks.forEach((link) => link.classList.remove("is-active"));
    const activeLink = navMap.get(current.target.id);
    if (activeLink) activeLink.classList.add("is-active");
  },
  {
    threshold: [0.25, 0.45, 0.7],
  },
);

sections.forEach((section) => observer.observe(section));
