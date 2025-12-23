/* ============================================
   MAIN.JS - Core Functionality
   ============================================ */

// Menú móvil hamburguesa
const initMobileMenu = () => {
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector(".navbar-menu");
    const menuLinks = document.querySelectorAll(".navbar-link");

    if (!toggle || !menu) return;

    // Toggle menú al hacer clic en hamburguesa
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");

        // Prevenir scroll del body cuando menú está abierto
        document.body.style.overflow = menu.classList.contains("active")
            ? "hidden"
            : "";
    });

    // Cerrar menú al hacer clic en un enlace
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
            document.body.style.overflow = "";
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            toggle.classList.remove("active");
            menu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // Cerrar menú al cambiar tamaño de ventana (si se vuelve a desktop)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            toggle.classList.remove("active");
            menu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
};

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    console.log("Allia Studio - Website Loaded");
});
