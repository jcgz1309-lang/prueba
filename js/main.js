// ==========================================
// 1. MEDIDAS DE SEGURIDAD (Deshabilitar inspección)
// ==========================================

// Bloquear el clic derecho en toda la página
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Bloquear combinaciones de teclas usadas para abrir DevTools
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
    ) {
        e.preventDefault();
    }
});

// ==========================================
// 2. LÓGICA DE FILTRADO DE LA GALERÍA
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const obraCards = document.querySelectorAll('.obra-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambiar clase activa entre botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filtrar las tarjetas de obras
            obraCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'todos' || filterValue === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});