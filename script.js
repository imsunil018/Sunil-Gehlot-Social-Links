// ===================================
// SCROLL PROGRESS BAR
// ===================================

// Create progress bar element
const progressBar = document.createElement("div");
progressBar.id = "scroll-progress";
document.body.appendChild(progressBar);

// Style the progress bar
Object.assign(progressBar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    width: "0%",
    background: "linear-gradient(90deg, var(--accent-primary), var(--accent-web3))",
    zIndex: "9999",
    transition: "width 0.1s linear"
});

// Update progress on scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
});
