document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú hamburguesa para smartphones
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú automáticamente al hacer clic en cualquier opción
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Copiar Binance UID al portapapeles
    const btnCopiar = document.getElementById('btn-copiar-uid');
    if (btnCopiar) {
        btnCopiar.addEventListener('click', () => {
            const uidTexto = document.getElementById('binance-uid').innerText;
            navigator.clipboard.writeText(uidTexto).then(() => {
                const textoOriginal = btnCopiar.innerText;
                btnCopiar.innerText = '¡Copiado!';
                btnCopiar.style.background = '#25D366';
                btnCopiar.style.color = '#ffffff';

                setTimeout(() => {
                    btnCopiar.innerText = textoOriginal;
                    btnCopiar.style.background = '#f0b90b';
                    btnCopiar.style.color = '#000000';
                }, 2000);
            });
        });
    }

    // 3. Modales nativos (<dialog>)
    document.querySelectorAll('.link-modal').forEach(boton => {
        boton.addEventListener('click', () => {
            const modalId = boton.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    document.querySelectorAll('.btn-cerrar-modal').forEach(boton => {
        boton.addEventListener('click', () => {
            const modal = boton.closest('dialog');
            if (modal) {
                modal.close();
            }
        });
    });

    document.querySelectorAll('.modal-legal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.close();
            }
        });
    });
});