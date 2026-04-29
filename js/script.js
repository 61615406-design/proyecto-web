document.addEventListener("DOMContentLoaded", () => { 
    console.log("✅ Sitio cargado correctamente");

    // ========== 1. BOTÓN IR ARRIBA (CORREGIDO) ==========
    const btnTop = document.getElementById("btnTop");
    if(btnTop) {
        window.addEventListener("scroll", () => {
            // CORREGIDO: scrollY (no scrolly) y btnTop (no btntop)
            btnTop.style.display = window.scrollY > 200 ? "block" : "none";
        });

        btnTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ========== 2. BOTÓN IR ABAJO (NUEVO) ==========
    const btnDown = document.getElementById("btnDown");
    if(btnDown) {
        btnDown.addEventListener("click", () => {
            window.scrollTo({ 
                top: document.body.scrollHeight, 
                behavior: "smooth" 
            });
        });
    }

    // ========== 3. BOTÓN MODO OSCURO/CLARO (NUEVO) ==========
    const btnDarkMode = document.getElementById("btnDarkMode");
    if(btnDarkMode) {
        btnDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            // Cambiar texto del botón
            if(document.body.classList.contains("dark-mode")) {
                btnDarkMode.textContent = "☀️ Modo Claro";
                localStorage.setItem("modo", "oscuro");
                console.log("🌙 Modo oscuro activado");
            } else {
                btnDarkMode.textContent = "🌙 Modo Oscuro";
                localStorage.setItem("modo", "claro");
                console.log("☀️ Modo claro activado");
            }
        });
        
        // Cargar modo guardado
        if(localStorage.getItem("modo") === "oscuro") {
            document.body.classList.add("dark-mode");
            btnDarkMode.textContent = "☀️ Modo Claro";
        }
    }

    // ========== 4. BOTÓN MOSTRAR/OCULTAR MENSAJE (NUEVO) ==========
    const btnMensaje = document.getElementById("btnMensaje");
    const mensajeFlotante = document.getElementById("mensajeFlotante");
    
    if(btnMensaje && mensajeFlotante) {
        btnMensaje.addEventListener("click", () => {
            if(mensajeFlotante.style.display === "none" || !mensajeFlotante.style.display) {
                mensajeFlotante.style.display = "block";
                btnMensaje.textContent = "🔽 Ocultar mensaje";
                console.log("💬 Mensaje mostrado");
            } else {
                mensajeFlotante.style.display = "none";
                btnMensaje.textContent = "🔼 Mostrar mensaje de bienvenida";
                console.log("💬 Mensaje ocultado");
            }
        });
    }

    // ========== 5. BOTÓN COPIAR CORREO (NUEVO) ==========
    const btnCopiar = document.getElementById("btnCopiar");
    if(btnCopiar) {
        btnCopiar.addEventListener("click", async () => {
            const email = "contacto@maricielo.com"; // Cambia por tu email
            try {
                await navigator.clipboard.writeText(email);
                btnCopiar.textContent = "✅ ¡Copiado!";
                btnCopiar.style.background = "#4CAF50";
                console.log("📧 Email copiado:", email);
                
                // Restaurar botón después de 2 segundos
                setTimeout(() => {
                    btnCopiar.textContent = "📋 Copiar Email";
                    btnCopiar.style.background = "";
                }, 2000);
            } catch(err) {
                console.error("❌ Error al copiar:", err);
                alert("No se pudo copiar el email");
            }
        });
    }

    // ========== 6. BOTÓN DE DESPLAZAMIENTO SUAVE A SECCIONES (NUEVO) ==========
    const btnsSeccion = document.querySelectorAll("[data-scroll]");
    btnsSeccion.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const seccionId = btn.getAttribute("data-scroll");
            const seccion = document.getElementById(seccionId);
            if(seccion) {
                seccion.scrollIntoView({ behavior: "smooth", block: "start" });
                console.log(`📜 Desplazando a: ${seccionId}`);
            }
        });
    });

    // ========== 7. BOTÓN DE RECARGAR PÁGINA (NUEVO) ==========
    const btnRecargar = document.getElementById("btnRecargar");
    if(btnRecargar) {
        btnRecargar.addEventListener("click", () => {
            if(confirm("¿Quieres recargar la página?")) {
                location.reload();
                console.log("🔄 Página recargada");
            }
        });
    }

    // ========== 8. BOTÓN ELIMINAR BORRADOR (NUEVO) ==========
    const btnLimpiar = document.getElementById("btnLimpiar");
    if(btnLimpiar) {
        btnLimpiar.addEventListener("click", () => {
            if(confirm("¿Borrar todos los datos del formulario?")) {
                const formulario = document.querySelector("form");
                if(formulario) {
                    formulario.reset();
                    localStorage.removeItem("borradorContacto");
                    console.log("🗑️ Formulario limpiado");
                    
                    // Mostrar notificación temporal
                    const notificacion = document.createElement("div");
                    notificacion.textContent = "✅ Formulario limpiado";
                    notificacion.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: #4CAF50;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 5px;
                        z-index: 9999;
                        animation: fadeOut 2s ease;
                    `;
                    document.body.appendChild(notificacion);
                    setTimeout(() => notificacion.remove(), 2000);
                }
            }
        });
    }

    // ========== 9. BOTÓN DE CONTACTO RÁPIDO (NUEVO) ==========
    const btnContactoRapido = document.getElementById("btnContactoRapido");
    if(btnContactoRapido) {
        btnContactoRapido.addEventListener("click", () => {
            const telefono = "51935764032"; // Tu número de WhatsApp
            const mensaje = "Hola, vi tu página web y quiero contactarte";
            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
            console.log("📱 Abriendo WhatsApp");
        });
    }

    // ========== 10. BOTÓN DE INFORMACIÓN (NUEVO) ==========
    const btnInfo = document.getElementById("btnInfo");
    if(btnInfo) {
        btnInfo.addEventListener("click", () => {
            alert("📌 Información:\n\n• Maricielo Carbajal Jimenez\n• Desarrolladora Web\n• Especialista en E-commerce\n• Contacto: contacto@maricielo.com");
            console.log("ℹ️ Información mostrada");
        });
    }

    console.log("🎉 Todos los botones están funcionando correctamente");
});

// CSS que debes agregar a tu archivo style.css
const estilosAdicionales = `
    /* Estilos para el modo oscuro */
    .dark-mode {
        background-color: #1a1a1a;
        color: #ffffff;
    }
    
    .dark-mode .servicio,
    .dark-mode .formulario {
        background-color: #2d2d2d;
        color: #ffffff;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .dark-mode .input-text {
        background-color: #3d3d3d;
        color: #ffffff;
        border-color: #555;
    }
    
    .dark-mode .servicio p {
        color: #cccccc;
    }
    
    /* Animación para notificaciones */
    @keyframes fadeOut {
        0% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    /* Estilos base para los botones (opcional) */
    button {
        transition: all 0.3s ease;
    }
    
    button:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
`;

// Agregar estilos al documento (opcional)
const styleSheet = document.createElement("style");
styleSheet.textContent = estilosAdicionales;
document.head.appendChild(styleSheet);