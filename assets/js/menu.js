document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 100;

    /* ======= Elemente sammeln ======= */
    const simpleLinks = document.querySelectorAll(".simple-menu a");
    const ropeLinks   = document.querySelectorAll(".rope-nodes a");
    const ropeCards   = document.querySelectorAll(".rope-card");

    /* ---------- Gemeinsame Aktivierungs‑Funktion ---------- */
    function activateStep(step) {
        // 1) Links in simple‑ & rope‑Menu markieren
        [...simpleLinks, ...ropeLinks].forEach(l =>
            l.classList.toggle("active", l.getAttribute("href") === `#${step}`)
        );
        // 2) Karte zeigen
        ropeCards.forEach(card =>
            card.classList.toggle("active", card.dataset.step === step)
        );
    }

    /* ---------- Klick‑Handler für beide Link‑Typen ---------- */
    [...simpleLinks, ...ropeLinks].forEach(link => {
        const step = link.getAttribute("href").slice(1);
        link.addEventListener("click", e => {
            e.preventDefault();
            activateStep(step);
            // Smooth‑Scroll zur Rope‑Section
            const sectionTop = document
                .getElementById("quick-tour")
                .getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top: sectionTop, behavior: "smooth" });
            history.replaceState(null, "", `#${step}`);
        });
    });

    /* ---------- Initialer Zustand aus URL ---------- */
    const initial = location.hash ? location.hash.slice(1) : "topics";
    activateStep(initial);
});
