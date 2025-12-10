// Animação de corações flutuantes (já no CSS, mas podemos adicionar mais dinâmica)
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar mais corações dinamicamente para efeito
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heartsContainer.appendChild(heart);
    }

    // Interação das caixinhas surpresas
    const boxes = document.querySelectorAll('.surprise-box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Efeito de hover nas fotos com zoom suave
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animação de fade-in para seções ao rolar
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out';
            }
        });
    });

    document.querySelectorAll('.message-box, .surprise-box').forEach(el => {
        observer.observe(el);
    });
});