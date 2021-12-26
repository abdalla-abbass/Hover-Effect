const container = document.querySelector(".container");

let colors = [];
while (colors.length < 100) {
    do {
        var color = Math.floor(Math.random() * 1000000 + 1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}

for (i = 0; i < 1200; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
        let randomNum = Math.floor(Math.random() * colors.length);
        square.style.background = `${colors[randomNum]}`;
    });

    square.addEventListener("mouseleave", () => {
        square.style.background = "#333";
    });

    container.appendChild(square);
}
