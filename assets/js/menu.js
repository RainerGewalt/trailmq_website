document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 100;                                // Puffer
    const links   = document.querySelectorAll("#trailmq-menu a");

    links.forEach(link => {
        const id          = link.getAttribute("href").slice(1);
        const section     = document.getElementById(id);
        const icon        = link.querySelector("img.icon");
        const brightSrc   = link.dataset.hover;                // helles Icon
        const darkSrc     = icon?.src;

        /* ----- Hover: nur Icon tauschen ------------------------------------ */
        link.addEventListener("mouseenter", () => {
            if (!link.classList.contains("active") && brightSrc) icon.src = brightSrc;
        });
        link.addEventListener("mouseleave", () => {
            if (!link.classList.contains("active") && darkSrc)   icon.src = darkSrc;
        });

        /* ----- Klick: smooth scroll + Active-Status ------------------------ */
        link.addEventListener("click", e => {
            e.preventDefault();
            if (!section) return;

            /* eigenes smooth-Scroll mit Offset */
            const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top: targetTop, behavior: "smooth" });

            activate(link);                                      // Status umschalten
        });
    });

    /* -------- Scroll-Spy (Highlight beim Scrollen) ----------------------- */
    const sections = Array.from(links).map(l => document.getElementById(l.hash.slice(1)));

    window.addEventListener("scroll", () => {
        const pos = window.scrollY + headerOffset + 1;         // +1 ⇒ Border-case

        sections.forEach((sec, i) => {
            if (!sec) return;
            if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
                activate(links[i]);
            }
        });
    }, { passive:true });

    /* -------- Helper: Active-Klasse + Icon wechseln ---------------------- */
    function activate(activeLink){
        links.forEach(l => {
            const img = l.querySelector("img.icon");
            img.src = l.dataset.hover && l === activeLink ? l.dataset.hover : img.dataset.original || img.src;
            l.classList.toggle("active", l === activeLink);
        });
    }

    /* sichere Original-Src ab, falls noch nicht gesetzt */
    links.forEach(l => {
        const img = l.querySelector("img.icon");
        if (img && !img.dataset.original) img.dataset.original = img.src;
    });
});
