let index = 0;
let totalSlides = 4;

function majSlider() {
    const slider = document.querySelector(".slider");
    slider.style.transform = "translateX(" + (-index * 100) + "%)";
}

function prochaineSlide() {
    index = index + 1;
    if (index === totalSlides) {
        index = 0;
    }
    majSlider();
}

function precedenteSlide() {
    index = index - 1;
    if (index < 0) {
        index = totalSlides - 1;
    }
    majSlider();
}

document.getElementById("FlecheDroite").onclick = prochaineSlide;
document.getElementById("FlecheGauche").onclick = precedenteSlide;




