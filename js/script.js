document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargando correctamente");

    const btnTop = document.getElementById("btnTop");
    if (btnTop) {
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });
        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
    // Mostrar frases motivadoras al hacer clic - No funciona en botones ni casillas
const frases = [
    "✨ Aplicasión Web",
    "💪 Sigue adelante",
    "🌟 Eres increíble",
    "🎯 No te rindas",
    "🚀 Éxito en tu día"
];

document.body.addEventListener("click", (e) => {
    const elementosIgnorar = e.target.closest("button, a, input, textarea, select, label");
    
    if (!elementosIgnorar) {
        const frase = frases[Math.floor(Math.random() * frases.length)];
        alert(frase);
    }
});
});