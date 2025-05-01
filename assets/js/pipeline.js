document.addEventListener("DOMContentLoaded", () => {
    /* metadata for the 8 stations in the same order as HTML buttons */
    const data = [
        ["MQTT Source",      "Ultra-fast MQTT from edge to core. Minimal overhead."],
        ["Secure Gateway",   "TLS/mTLS, JWT and RBAC for robust security."],
        ["Message Queue",    "Persistent queue with TTL, priority and DLQs."],
        ["Audit Trail",      "All actions logged, tamper-proof. PDF/CSV export."],
        ["Rule Engine",      "AI-based routing & filtering. Real-time semantics."],
        ["Plugin Slot",      "Attach Guard, Responder or RouteMind AI modules."],
        ["Semantic Router",  "LLM-enhanced 2-D topic mapping & routing."],
        ["Receiver",         "Reliable end-delivery, fully confirmed & traceable."]
    ];

    const circle   = document.getElementById("pipeline-circle");
    const btns     = circle.querySelectorAll(".station");
    const icon     = document.getElementById("pipeline-icon");
    const titleEl  = document.getElementById("pipeline-title");
    const descEl   = document.getElementById("pipeline-desc");

    let auto = true, timer;

    function setActive(idx){
        btns.forEach(b => b.classList.remove("active"));
        btns[idx].classList.add("active");
        /* update info panel */
        icon.src   = btns[idx].querySelector("img").src;
        titleEl.textContent = data[idx][0];
        descEl.textContent  = data[idx][1];
    }
    /* initial */
    setActive(0);

    /* pause auto-rotation 3 s when user clicks */
    btns.forEach((btn,i)=>{
        btn.addEventListener("click", ()=>{
            circle.style.animationPlayState="paused";
            clearTimeout(timer);
            setActive(i);
            timer=setTimeout(()=>circle.style.animationPlayState="running",3000);
        });
    });
});
