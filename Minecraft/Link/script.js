const boutons = document.querySelectorAll(".BT2");

boutons.forEach(b => {
    b.addEventListener("mouseenter", () => {
        b.style.transform = "scale(1.15)";
        b.style.transition = "0.2s";
    });

    b.addEventListener("mouseleave", () => {
        b.style.transform = "scale(1)";
    });
});

function creerBulleHazard() {
    const bulle = document.createElement("div");

    const taille = Math.random() * 30 + 20;
    const posX = Math.random() * window.innerWidth;
    const direction = Math.random() < 0.5 ? "haut" : "bas";

    bulle.style.width = taille + "px";
    bulle.style.height = taille + "px";
    bulle.style.background = "rgba(0, 255, 0, 0.5)";
    bulle.style.position = "fixed";
    bulle.style.left = posX + "px";
    bulle.style.borderRadius = "50%";
    bulle.style.zIndex = "2";

    if (direction === "haut") {
        bulle.style.top = window.innerHeight + "px";
        bulle.style.animation = "monte 5s linear forwards";
    } else {
        bulle.style.top = "-50px";
        bulle.style.animation = "descend 5s linear forwards";
    }

    document.body.appendChild(bulle);

    bulle.addEventListener("click", () => {
        bulle.remove();
    });

    setTimeout(() => bulle.remove(), 6000);
}

setInterval(creerBulleHazard, 700);


