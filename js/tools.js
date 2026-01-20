function highlightTools() {
    document.querySelectorAll(".slot").forEach(slot => {
        slot.classList.toggle("active", slot.dataset.tool === selectedTool);
    });
}

document.querySelectorAll(".slot").forEach(slot => {
    slot.addEventListener("click", () => {
        selectedTool = slot.dataset.tool;
        selectedBlock = null;
        highlightTools();
        renderInventory();
    });
});

function swingTool(toolName) {
    const slot = document.querySelector(`.slot[data-tool="${toolName}"]`);

    if (!slot) return;
    slot.classList.remove("swing");
    void slot.offsetWidth;
    slot.classList.add("swing")
}
