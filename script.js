document.getElementById('btnYes').addEventListener('click', function() {
    mensajeFelicidades.classList.remove('hidden');
});

const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', function() {
    // Obtener dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcular nuevas posiciones aleatorias
    const newX = Math.random() * (windowWidth - btnNo.offsetWidth);
    const newY = Math.random() * (windowHeight - btnNo.offsetHeight);

    // Aplicar nuevas posiciones
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;
});

btnNo.addEventListener('click', function() {
    alert('Oh, tal vez la próxima vez. 😢');
});