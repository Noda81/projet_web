const max_i = 2
const min_i = 1
var index = 1;

const images = {
    1: "images/robot_plat.png",
    2: "images/robot_haut.png"
};

const titres = {
    1: "Robot plat",
    2: "Robot haut"
};

const descriptions = {
    1: "Architecture avec un châssis plat. Cette approche donne la priorité à la stabilité et permet d'avoir un robot prévisible.",
    2: "Architecture avec un châssis haut. Cette approche met la physique au centre de son design, réduit les frottements avec le sol mais peut être moins stable."
};

function next() {
    index = index+1;
    if (index > max_i) {
        index = min_i;
    }
    update()
}

function prev() {
    index = index-1;
    if (index < min_i) {
        index = max_i;
    }
    update()
}

function update() {
    document.getElementById("image-galerie").src = images[index];
    document.getElementById("image-titre").textContent = titres[index];
    document.getElementById("image-desc").textContent = descriptions[index];
}

update()