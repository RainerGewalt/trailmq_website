/* pipeline.js  (v3) – ein einziger Dreh-Mechanismus, aufrechte Icons */
document.addEventListener("DOMContentLoaded", () => {

    /* --- Daten --- */
    const data = [
        ["MQTT Source",      "Ultra-fast MQTT from edge to core. Minimal overhead."],
        ["Secure Gateway",   "TLS/mTLS, JWT, and RBAC for robust security."],
        ["Message Queue",    "Persistent queue with TTL, priority and DLQs."],
        ["Audit Trail",      "All actions logged, tamper-proof. PDF/CSV export."],
        ["Rule Engine",      "AI-based routing & filtering. Real-time semantics."],
        ["Plugin Slot",      "Attach Guard, Responder or RouteMind AI modules."],
        ["Semantic Router",  "LLM-enhanced 2-D topic mapping & routing."],
        ["Receiver",         "Reliable end-delivery, fully confirmed & traceable."]
    ];

    /* --- DOM --- */
    const circle  = document.getElementById("pipeline-circle");   // nur Hülle
    const nodes   = [...circle.querySelectorAll(".station")];
    const icon    = document.getElementById("pipeline-icon");
    const title   = document.getElementById("pipeline-title");
    const desc    = document.getElementById("pipeline-desc");

    /* --- Konstanten & State --- */
    let RADIUS, STEP, rotation = 0, active = 0;
    const SPEED = 0.1;                    // ° pro Frame  →  1 U ~ 40 s
    let auto   = true;

    /* --- Hilfsfunktionen --- */
    const mod  = a => ((a % 360) + 360) % 360;

    function layout(){
        const w = circle.offsetWidth;
        RADIUS  = w/2 - 46;                // 46 px ≈ halbe Station
        STEP    = 360 / nodes.length;
    }

    function setActive(i){
        if (i === active) return;
        nodes[active].classList.remove("active");
        nodes[i].classList.add("active");
        icon.src = nodes[i].querySelector("img").src;
        title.textContent = data[i][0];
        desc.textContent  = data[i][1];
        active = i;
    }

    function render(){
        nodes.forEach((btn,i)=>{
            const angle = i*STEP + rotation;
            /* 1. um die Mitte »aufspeichen«, 2. Gegenrotation für aufrechte Icons */
            btn.style.transform =
                `rotate(${angle}deg) translate(${RADIUS}px) rotate(${-angle}deg)`;
        });

        /* Index bestimmen: wessen Winkel liegt am nächsten bei 0 °? */
        const idx = mod(Math.round(-rotation / STEP)) % nodes.length;
        setActive(idx);
    }

    /* Klick   ---------------------------------------------------- */
    nodes.forEach((btn,i)=>{
        btn.addEventListener("click", ()=>{
            const target = -i*STEP;          // dieser Winkel soll 0 ° werden
            /* kürzesten Weg im Uhrzeigersinn wählen */
            let delta = mod(target - rotation);
            rotation = mod(rotation + delta);
            render();

            auto = false;
            setTimeout(()=>auto = true, 1200);
        });
    });

    /* Loop  ------------------------------------------------------ */
    function loop(){
        if (auto){
            rotation = mod(rotation + SPEED);
            render();
        }
        requestAnimationFrame(loop);
    }

    /* Init ------------------------------------------------------- */
    layout();
    render();
    loop();
    window.addEventListener("resize", ()=>{ layout(); render(); });
});
