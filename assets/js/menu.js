document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#trailmq-menu a");

    // Scroll smooth + activate link manually
    links.forEach((link) => {
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

                // Entferne vorherige aktive Links
                links.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // Abschnittspositionen zum Scroll-Highlighten
    const sections = Array.from(links).map((l) => {
        const id = l.getAttribute("href").slice(1);
        return document.getElementById(id);
    });

    function onScroll() {
        const scrollPos = window.scrollY + 120; // offset to compensate for header

        sections.forEach((sec, i) => {
            if (!sec) return;
            const link = links[i];
            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                links.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
});
