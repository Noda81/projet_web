const max_i = 5
const min_i = 1
var index = 1;

const images = {
    1: "images/galerie/robot_plat.png",
    2: "images/galerie/robot_haut.png",
    3: "images/galerie/chassis_final.jpg",
    4: "images/galerie/instructions.png",
    5: "images/galerie/virtuel.png"
};

const titres = {
    1: "Robot plat",
    2: "Robot haut",
    3: "Châssis final",
    4: "Instructions",
    5: "Modélisation"
};

const descriptions = {
    1: "Architecture avec un châssis plat. Cette approche donne la priorité à la stabilité et permet d'avoir un robot prévisible.",
    2: "Architecture avec un châssis haut. Cette approche met la physique au centre de son design, réduit les frottements avec le sol mais peut être moins stable.",
    3: "L'architecture de châssis retenue pour le robot final, pensée pour offrir les avantages des deux autre châssis.",
    4: "Extrait des instructions de construction du robot",
    5: "Construction virtuelle du robot pour manipuler sont architecture à tout moment."
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