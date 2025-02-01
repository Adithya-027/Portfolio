document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    // Smooth Scrolling for Navigation
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
