document.addEventListener("DOMContentLoaded", function () {
    // Fermer automatiquement les alertes après 3 secondes
    let alerts = document.querySelectorAll(".alert");
    alerts.forEach((alert) => {
        setTimeout(() => {
            alert.classList.add("fade");
            setTimeout(() => alert.remove(), 500);
        }, 3000);
    });

    // Navbar responsive
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    if (navbarToggler) {
        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let img = document.querySelector(".img-custom");

    if (img) {
        img.style.opacity = "0"; // Masquer l'image au début
        setTimeout(() => {
            img.style.opacity = "1"; // Apparition progressive
            img.style.transition = "opacity 1s ease-in-out";
        }, 300);
    }
});
