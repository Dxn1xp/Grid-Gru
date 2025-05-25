document.getElementById('loginButton').onclick = function(event) {
    const popover = document.getElementById('popover');
    popover.style.display = popover.style.display === 'block' ? 'none' : 'block';

    // Animação do popover
    popover.animate([
        { opacity: 0, transform: 'scale(0.5)' },
        { opacity: 1, transform: 'scale(1)' }
    ], {
        duration: 300,
        fill: 'forwards'
    });

    // Impede que o clique no botão feche o popover
    event.stopPropagation();
};

// Para fechar o popover ao clicar fora dele
window.onclick = function(event) {
    const popover = document.getElementById('popover');
    if (!event.target.matches('#loginButton') && popover.style.display === 'block') {
        popover.style.display = 'none';
    }
}