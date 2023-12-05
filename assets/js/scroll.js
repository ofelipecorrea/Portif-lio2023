const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const windowWidth = window.innerWidth;

    // Verifica se a largura da janela é maior que 870px
    if (windowWidth > 870) {
        sections.forEach((section, index) => {
            const scrollY = window.scrollY;
            const translateX = (index % 2 === 0) ? (scrollY / 2) : (-scrollY / 2); // Ajuste conforme necessário para a direção

            section.style.transform = `translateX(${translateX}px)`;
        });
    }
});