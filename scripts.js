document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar');
    const linksMobile = document.querySelectorAll('#menu-mobile a');

    function toggleMenu() {
        menu.classList.toggle('abrir-menu');
        overlay.classList.toggle('mostrar');
    }

    function fecharMenu() {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('mostrar');
    }

    // Ouvintes de evento com suporte nativo a cliques e toques (iOS)
    btnMenu.addEventListener('click', toggleMenu);
    btnFechar.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);

    // Fecha o menu automaticamente ao clicar em uma seção interna
    linksMobile.forEach(link => {
        link.addEventListener('click', fecharMenu);
    });
});
