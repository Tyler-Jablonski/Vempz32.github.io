document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight Navigation Links on Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120; // Offset for header
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 2. Optional: Add dynamic video or image hover handlers to project cards later
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            // Logic for playing video previews or showing technical tags on hover
        });

        card.addEventListener("mouseleave", () => {
            // Logic to pause previews on mouse leave
        });
    });
});