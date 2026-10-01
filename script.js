const TEL_WHATSAPP = "573182740604";

/* ===== WhatsApp ===== */
function contactarWhatsApp(motivo) {
    const mensaje = encodeURIComponent(`Hola Surtimangueras Chimitá, necesito información sobre: ${motivo}`);
    window.open(`https://wa.me/${TEL_WHATSAPP}?text=${mensaje}`, '_blank');
}

// Botón "Agenda tu llamada": ahora abre WhatsApp (antes intentaba hacer una llamada telefónica)
function llamarTaller() {
    contactarWhatsApp('agendar una llamada de diagnóstico');
}

/* ===== Modal ===== */
function openModal(titulo, descripcion) {
    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDescription').innerText = descripcion;
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

/* ===== Filtro de productos ===== */
function filtrar(categoria) {
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    const productos = document.querySelectorAll('.prod-card');
    productos.forEach(prod => {
        if (categoria === 'todos' || prod.classList.contains(categoria)) {
            prod.style.display = 'block';
        } else {
            prod.style.display = 'none';
        }
    });
}

/* ===== Menú responsivo (hamburguesa) ===== */
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (!toggle || !nav) return;

    function cerrarMenu() {
        nav.classList.remove('abierto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
    }

    toggle.addEventListener('click', () => {
        const abierto = nav.classList.toggle('abierto');
        toggle.setAttribute('aria-expanded', abierto);
        toggle.textContent = abierto ? '✕' : '☰';
    });

    // Cierra el menú al tocar un enlace
    nav.querySelectorAll('a').forEach(enlace => {
        enlace.addEventListener('click', cerrarMenu);
    });

    // Si se agranda la pantalla, deja el menú en su estado normal
    window.addEventListener('resize', () => {
        if (window.innerWidth > 850) cerrarMenu();
    });
});