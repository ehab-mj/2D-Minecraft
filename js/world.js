const worldElement = document.getElementById("world");

function WorldSize() {
    const baseColm = Math.floor(window.innerWidth / Block_Size);
    const baseRows = Math.floor(window.innerHeight / Block_Size);

    mapScale = Math.max(1, Math.min(MAX_SCALE, mapScale));

    COLM = Math.floor(baseColm * mapScale);
    ROWS = baseRows;

    worldElement.style.display = "grid";
    worldElement.style.gridTemplateColumns = `repeat(${COLM}, ${Block_Size}px)`;
    worldElement.style.gridTemplateRows = `repeat(${ROWS}, ${Block_Size}px)`;
}

function World() {
    world = new Array(ROWS * COLM);

    let groundHeight = Math.floor(ROWS * 0.5);
    for (let col = 0; col < COLM; col++) {
        groundHeight += Math.floor(Math.random() * 3 - 1);
        groundHeight = Math.max(Math.floor(ROWS * 0.35),
            Math.min(Math.floor(ROWS * 0.65), groundHeight));
        for (let row = 0; row < ROWS; row++) {
            const x = row * COLM + col;
            if (row < groundHeight)
                world[x] = "sky";
            else if (row === groundHeight)
                world[x] = "grass";
            else if (row <= groundHeight + 3)
                world[x] = "dirt";
            else world[x] = "rock";
        }
    }
}

function Caves() {
    for (let i = 0; i < world.length; i++) {
        if (world[i] === "rock" && Math.random() < 0.08) {
            world[i] = "sky";
        }
    }
}

function addDiamonds() {
    const diamondTypes = ["diamond-red", "diamond-blue", "diamond-yellow", "diamond-green"];

    for (let i = 0; i < world.length; i++) {
        const row = Math.floor(i / COLM);
        if (world[i] === "rock" && row > ROWS * 0.7) {
            if (Math.random() < 0.04) {
                world[i] = diamondTypes[Math.floor(Math.random() * diamondTypes.length)];
            }
        }
    }
}

function addTrees() {
    for (let col = 2; col < COLM - 2; col++) {
        if (Math.random() < 0.12) {
            for (let row = 0; row < ROWS; row++) {
                if (world[row * COLM + col] === "grass") {
                    world[(row - 1) * COLM + col] = "wood";
                    world[(row - 2) * COLM + col] = "wood";
                    world[(row - 3) * COLM + col] = "wood";
                    world[(row - 4) * COLM + col] = "leaves";
                    world[(row - 4) * COLM + col - 1] = "leaves";
                    world[(row - 4) * COLM + col + 1] = "leaves";
                    world[(row - 5) * COLM + col] = "leaves";
                    break;
                }
            }
        }
    }
}
function addFlowers() {
    const flowers = ["flower-red", "flower-yellow", "flower-blue", "flower-white", "flower-purple"];

    for (let col = 1; col < COLM - 1; col++) {
        for (let row = 1; row < ROWS; row++) {
            const x = row * COLM + col;
            if (world[x] === "grass") {
                const aboveX = (row - 1) * COLM + col;
                if (world[aboveX] === "sky" && Math.random() < 0.20) {
                    world[aboveX] = flowers[Math.floor(Math.random() * flowers.length)];
                }
            }
        }
    }
}


window.initGame = function () {
    WorldSize();
    World();
    Caves();
    addDiamonds();
    addTrees();
    addFlowers();
    renderWorld();
    renderInventory();
    if (typeof highlightTools === "function") highlightTools()
};