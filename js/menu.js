window.startFromMenu = function () {
    const landing = document.getElementById("landing");
    const game = document.getElementById("game");

    landing.classList.add("fade-out")
    landing.style.display = "none";
    game.style.display = "block";
    game.classList.add("fade-in");
    
    setTimeout(() => {
        if (typeof window.initGame === "function") {
            window.initGame();
        } else {
            console.error("initGame() not found. Create window.initGame = function() {...} in world.js");
        }
    }, 0);
};
