document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#trailmq-menu a");

    // highlight on click
    links.forEach(l =>
        l.addEventListener("click", () => {
            links.forEach(x => x.classList.remove("active"));
            l.classList.add("active");
        })
    );

    // optional: highlight while scrolling
    const sections = Array.from(links).map(l => {
        const id = l.getAttribute("href").slice(1);
        return document.getElementById(id);
    });

    function onScroll() {
        const scrollPos = window.scrollY + 100; // offset
        sections.forEach((sec, i) => {
            if (!sec) return;
            const link = links[i];
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
    window.addEventListener("scroll", onScroll, { passive:true });
});
