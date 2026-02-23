function startLoader() {
    const circle = document.createElement("div");
    circle.id = "loader-circle";
    document.body.appendChild(circle);

    const loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = `
        <p>Loading...</p>
        <div class="cubes">
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
            <div class="cube"></div>
        </div>
    `;
    document.body.appendChild(loader);

    // Faire disparaître le loader après 3 secondes
    setTimeout(() => {
        circle.remove();
        loader.remove();
    }, 3000);
}


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".start-loader");
    buttons.forEach(btn => {
        btn.addEventListener("click", startLoader);
    });
});
