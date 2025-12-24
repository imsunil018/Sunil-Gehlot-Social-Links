const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// create progress bar
const progressBar = document.createElement("div");
progressBar.id = "scroll-progress";
document.body.appendChild(progressBar);

// basic styles via JS (no CSS file needed)
Object.assign(progressBar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    width: "0%",
    backgroundColor: "#3b82f6",
    zIndex: "9999",
    transition: "width 0.1s linear"
});

// update progress on scroll
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
});


