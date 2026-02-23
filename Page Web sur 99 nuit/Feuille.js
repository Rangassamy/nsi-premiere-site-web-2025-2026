let feuillesActives = 0;
let MAX_FEUILLES = 50;

setInterval(function() {
    if (feuillesActives < MAX_FEUILLES) {
        creerFeuille();
    }
}, 200);

function creerFeuille() {
    let feuille = document.createElement("img");
    feuille.src = "feuille.png";
    feuille.className = "feuille";

    let x = Math.random() * window.innerWidth;
    let y = -50;

    let taille = 15 + Math.random() * 25;
    feuille.style.width = taille + "px";
    feuille.style.height = taille + "px";

    let angleRotation = Math.random() * 360;
    feuille.style.transform = "rotate(" + angleRotation + "deg)";

    let deviationX = (Math.random() - 0.5) * 200; 
    let startX = x;

    feuille.style.left = x + "px";
    feuille.style.top = y + "px";

    document.body.appendChild(feuille);
    feuillesActives++;

    deplacerFeuille(feuille, x, y, startX, deviationX, angleRotation);
}

function deplacerFeuille(feuille, x, y, startX, deviationX, angleRotation) {
    let vitesseY = 1 + Math.random() * 2;
    let compteur = 0;

    let animation = setInterval(function() {
        y += vitesseY;

        x = startX + deviationX * (y / window.innerHeight) + Math.sin(compteur) * 10;
        compteur += 0.05;

        feuille.style.left = x + "px";
        feuille.style.top = y + "px";

        angleRotation += 2;
        feuille.style.transform = "rotate(" + angleRotation + "deg)";

        if (y > window.innerHeight + 50) {
            clearInterval(animation);
            feuille.remove();
            feuillesActives--;
        }
    }, 30);
}