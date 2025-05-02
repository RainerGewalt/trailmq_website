document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 100;

    /* ============ SCROLL-MENÜ (z. B. Header-Links) ============ */
    const scrollLinks = document.querySelectorAll("#trailmq-menu a");
    scrollLinks.forEach(link => {
        const id        = link.getAttribute("href").slice(1);
        const section   = document.getElementById(id);
        const icon      = link.querySelector("img.icon");
        const brightSrc = link.dataset.hover;
        const darkSrc   = icon?.src;

        // Icon aufhellen beim Hover
        link.addEventListener("mouseenter", () => {
            if (!link.classList.contains("active") && brightSrc) icon.src = brightSrc;
        });
        link.addEventListener("mouseleave", () => {
            if (!link.classList.contains("active") && darkSrc) icon.src = darkSrc;
        });

        // Smooth Scroll + Highlight
        link.addEventListener("click", e => {
            if (!section) return;
            e.preventDefault();
            const targetTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top: targetTop, behavior: "smooth" });
            activate(link);
        });
    });

    const scrollSections = Array.from(scrollLinks).map(l =>
        document.getElementById(l.hash.slice(1))
    );

    window.addEventListener("scroll", () => {
        const pos = window.scrollY + headerOffset + 1;
        scrollSections.forEach((sec, i) => {
            if (!sec) return;
            if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
                activate(scrollLinks[i]);
            }
        });
    }, { passive: true });

    function activate(activeLink) {
        scrollLinks.forEach(l => {
            const img = l.querySelector("img.icon");
            img.src = l.dataset.hover && l === activeLink ? l.dataset.hover : img.dataset.original || img.src;
            l.classList.toggle("active", l === activeLink);
        });
    }

    scrollLinks.forEach(l => {
        const img = l.querySelector("img.icon");
        if (img && !img.dataset.original) img.dataset.original = img.src;
    });

    /* ============ ROPE-MENU (als Tabs) ============ */
    const ropeLinks = document.querySelectorAll(".rope-nodes a");
    const ropeCards = document.querySelectorAll(".rope-card");

    if (ropeLinks.length && ropeCards.length) {
        function activateTab(step) {
            ropeLinks.forEach(link =>
                link.classList.toggle("active", link.getAttribute("href") === `#${step}`)
            );
            ropeCards.forEach(card =>
                card.classList.toggle("active", card.dataset.step === step)
            );
        }

        ropeLinks.forEach(link => {
            const step = link.getAttribute("href").slice(1);
            link.addEventListener("click", e => {
                e.preventDefault();
                activateTab(step);
                history.replaceState(null, "", `#${step}`);
            });
        });

        const startStep = location.hash ? location.hash.slice(1) : "topics";
        activateTab(startStep);
    }
});
