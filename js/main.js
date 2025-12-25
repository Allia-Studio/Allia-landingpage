/* ============================================
   MAIN.JS
   ============================================ */

const TABLET_BREAKPOINT = 768;

const initMobileMenu = () => {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-menu");
    const menuLinks = document.querySelectorAll(".navbar-link");

    if (!toggle || !menu) return;

    const closeMenu = () => {
        toggle.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = "";
    };

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.style.overflow = menu.classList.contains("active")
            ? "hidden"
            : "";
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > TABLET_BREAKPOINT) {
            closeMenu();
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
});
