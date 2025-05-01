document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#trailmq-menu a");

    links.forEach((link) => {
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        const icon = link.querySelector("img.icon");
        const hoverSrc = link.getAttribute("data-hover");
        const defaultSrc = icon?.getAttribute("src");

        // Hover-Effekt für Icons
        if (icon && hoverSrc) {
            link.addEventListener("mouseenter", () => {
                if (!link.classList.contains("active")) {
                    icon.setAttribute("src", hoverSrc);
                }
            });
            link.addEventListener("mouseleave", () => {
                if (!link.classList.contains("active")) {
                    icon.setAttribute("src", defaultSrc);
                }
            });
        }

        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

                links.forEach((l) => {
                    l.classList.remove("active");
                    const i = l.querySelector("img.icon");
                    const d = i?.getAttribute("data-default");
                    if (i && d) i.setAttribute("src", d);
                });

                link.classList.add("active");
                if (icon && hoverSrc) {
                    icon.setAttribute("src", hoverSrc);
                }
            }
        });

        // Optional: Speichere das Originalicon als Attribut für späteren Rückwechsel
        if (icon && defaultSrc) {
            icon.setAttribute("data-default", defaultSrc);
        }
    });

    const sections = Array.from(links).map((l) => {
        const id = l.getAttribute("href").slice(1);
        return document.getElementById(id);
    });

    function onScroll() {
        const scrollPos = window.scrollY + 120;

        sections.forEach((sec, i) => {
            if (!sec) return;
            const link = links[i];
            const icon = link.querySelector("img.icon");
            const hoverSrc = link.getAttribute("data-hover");
            const defaultSrc = icon?.getAttribute("data-default");

            const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                links.forEach((l) => {
                    l.classList.remove("active");
                    const img = l.querySelector("img.icon");
                    const def = img?.getAttribute("data-default");
                    if (img && def) img.setAttribute("src", def);
                });
                link.classList.add("active");
                if (icon && hoverSrc) icon.setAttribute("src", hoverSrc);
            }
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});
