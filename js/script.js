// Inicializa o AOS
AOS.init({
    duration: 1000,
    once: true
});

// Alternar menu lateral em dispositivos móveis
function toggleMenu() {
    const menu = document.querySelector('.d-flex');
    menu.classList.toggle('show-menu');
}

document.querySelector('.navbar-toggler').addEventListener('click', toggleMenu);

// Destacar a seção ativa no menu lateral
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Rolagem suave para as seções ao clicar no menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Barra de progresso global
window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    document.getElementById('progressBar').style.width = `${scrolled}%`;
});

// Gráfico com Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas Mensais',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Sistema de avaliação
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        const rating = this.getAttribute('data-value');
        document.getElementById('ratingMessage').textContent = `Você avaliou com ${rating} estrela(s)!`;

        document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));

        for (let i = 0; i < rating; i++) {
            document.querySelectorAll('.star')[i].classList.add('active');
        }
    });

    star.addEventListener('mouseover', function () {
        const value = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach((s, index) => {
            if (index < value) {
                s.style.color = '#ffcc00';
            } else {
                s.style.color = '#ccc';
            }
        });
    });

    star.addEventListener('mouseout', function () {
        document.querySelectorAll('.star').forEach(s => {
            if (s.classList.contains('active')) {
                s.style.color = '#ffcc00';
            } else {
                s.style.color = '#ccc';
            }
        });
    });
});

// Sistema de comentários
document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('commentName').value;
    const text = document.getElementById('commentText').value;

    if (name && text) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<strong>${name}</strong>: ${text}`;
        document.getElementById('comments').appendChild(commentDiv);

        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Widget de chat
document.getElementById('openChat').addEventListener('click', function () {
    document.getElementById('chatWidget').style.display = 'flex';
});

document.getElementById('closeChat').addEventListener('click', function () {
    document.getElementById('chatWidget').style.display = 'none';
});

document.getElementById('chatForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const message = document.getElementById('chatInput').value;

    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `Você: ${message}`;
        chatMessages.appendChild(messageDiv);

        document.getElementById('chatInput').value = '';

        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.textContent = "Suporte: Obrigado! Como posso ajudar?";
            chatMessages.appendChild(responseDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100        }, 1000);
    }
});

// Botão "Voltar ao Topo"
window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});