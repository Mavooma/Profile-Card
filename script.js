document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const card = document.querySelector("[data-testid='test-profile-card']");
    const timeEl = document.getElementById("time");

    // Simulated loading animation
    setTimeout(() => {
        loader.style.display = "none";
        card.hidden = false;
    }, 1500);

    // Display current time in milliseconds
    const updateTime = () => {
        timeEl.textContent = Date.now();
    };

    updateTime();
    setInterval(updateTime, 1000);

    // Hidden Easter Egg (keyboard trigger only)
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "p") {
            alert("🥚 Hidden Power Mode Activated!");
        }
    });
});