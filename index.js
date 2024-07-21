document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const timeElement = document.getElementById("time");

    const updateTime = () => {
        const now = new Date();
        yearElement.textContent = now.getFullYear();
        timeElement.textContent = now.toLocaleTimeString();
    };

    updateTime();
    setInterval(updateTime, 1000);
});
