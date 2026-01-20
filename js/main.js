function renderWorld() {
    worldElement.innerHTML = "";
    world.forEach((type, index) => {
        const tile = document.createElement("div");
        tile.className = `tile ${type}`;
        tile.addEventListener("click", () => handleTileClick(index, tile));

        worldElement.appendChild(tile);
    });
}

function handleTileClick(index, tileEl) {
    if (isBreaking) return;

    const type = world[index];

    if (selectedBlock && type === "sky") {
        world[index] = selectedBlock;

        inventory[selectedBlock]--;
        if (inventory[selectedBlock] === 0) {
            delete inventory[selectedBlock];
            selectedBlock = null;
        }

        renderWorld();
        renderInventory();
        return;
    }

    if (!selectedTool) return;
    if (!toolRules[selectedTool]?.includes(type)) return;

    swingTool(selectedTool);


    startBreaking(tileEl, () => {
        addToInventory(type);
        world[index] = "sky";
        renderWorld();
        renderInventory();
    });
}


document.getElementById("applyMapSize").addEventListener("click", () => {
    const v = Number(document.getElementById("mapSize").value);
    mapScale = isNaN(v) ? 1 : v;
    WorldSize()
    rebuildWorld();
});


function rebuildWorld() {
    World(); 
    Caves(); 
    addDiamonds(); 
    addTrees(); 
    addFlowers(); 
    renderWorld(); 
    renderInventory();
}


window.addEventListener("resize", () => {
    WorldSize(); 
    rebuildWorld(); 
});


WorldSize();
World();
Caves();
addDiamonds();
addTrees();
addFlowers();
renderWorld();
renderInventory();
highlightTools();
