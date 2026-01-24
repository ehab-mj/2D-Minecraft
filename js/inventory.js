const inventoryEl = document.getElementById("inventory");

function addToInventory(type) {
    inventory[type] = (inventory[type] || 0) + 1;
}

function renderInventory() {
    inventoryEl.innerHTML = "";

    for (let type in inventory) {
        const slot = document.createElement("div");
        slot.className = `inv-slot ${type}`;

        if (selectedBlock === type) {
            slot.classList.add("active");
        }

        const count = document.createElement("div");
        count.className = "inv-count";
        count.textContent = inventory[type];

        slot.appendChild(count);
        slot.addEventListener("click", () => {
            selectedBlock = type;
            selectedTool = null;
            renderInventory();
        });

        inventoryEl.appendChild(slot);
    }
}
