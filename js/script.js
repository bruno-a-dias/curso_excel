// Inicializa o AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Dados do Quiz
const quizData = {
    basico: [
        {
            question: "Qual é a função usada para somar valores no Excel?",
            options: ["=SOMA()", "=MÉDIA()", "=CONTAR()", "=MULT()"],
            answer: "=SOMA()"
        },
        {
            question: "Como você formata uma célula para exibir moeda?",
            options: ["Formatar > Moeda", "Formatar > Data", "Formatar > Texto", "Formatar > Número"],
            answer: "Formatar > Moeda"
        },
        {
            question: "Qual é o atalho para salvar um arquivo no Excel?",
            options: ["Ctrl + S", "Ctrl + P", "Ctrl + Z", "Ctrl + C"],
            answer: "Ctrl + S"
        },
        {
            question: "O que significa a função =MÉDIA()?",
            options: ["Calcula a soma dos valores", "Calcula a média dos valores", "Conta o número de células", "Multiplica os valores"],
            answer: "Calcula a média dos valores"
        },
        {
            question: "Como você insere um gráfico no Excel?",
            options: ["Inserir > Gráfico", "Dados > Gráfico", "Fórmulas > Gráfico", "Exibição > Gráfico"],
            answer: "Inserir > Gráfico"
        },
        {
            question: "Qual é a extensão padrão de um arquivo do Excel?",
            options: [".xlsx", ".docx", ".pptx", ".pdf"],
            answer: ".xlsx"
        },
        {
            question: "O que faz a função =CONTAR()?",
            options: ["Conta o número de células com texto", "Conta o número de células vazias", "Conta o número de células com números", "Conta o número de caracteres"],
            answer: "Conta o número de células com números"
        },
        {
            question: "Como você aplica filtros em uma tabela?",
            options: ["Dados > Filtro", "Inserir > Filtro", "Fórmulas > Filtro", "Exibição > Filtro"],
            answer: "Dados > Filtro"
        },
        {
            question: "Qual é a função usada para calcular o maior valor em um intervalo?",
            options: ["=MÁXIMO()", "=MÍNIMO()", "=SOMA()", "=MÉDIA()"],
            answer: "=MÁXIMO()"
        },
        {
            question: "Como você copia uma fórmula para várias células?",
            options: ["Arrastando o canto inferior direito da célula", "Copiando e colando manualmente", "Usando Ctrl + C e Ctrl + V", "Usando Ctrl + X e Ctrl + V"],
            answer: "Arrastando o canto inferior direito da célula"
        }
    ],
    intermediario: [
        {
            question: "Qual é a função usada para buscar valores em uma tabela?",
            options: ["=PROCV()", "=SE()", "=SOMA()", "=CONTAR()"],
            answer: "=PROCV()"
        },
        {
            question: "O que significa a função =SE()?",
            options: ["Verifica uma condição e retorna um valor", "Soma valores", "Calcula a média", "Conta células"],
            answer: "Verifica uma condição e retorna um valor"
        },
        {
            question: "Como você cria uma Tabela Dinâmica?",
            options: ["Inserir > Tabela Dinâmica", "Dados > Tabela Dinâmica", "Fórmulas > Tabela Dinâmica", "Exibição > Tabela Dinâmica"],
            answer: "Inserir > Tabela Dinâmica"
        },
        {
            question: "Qual é a função usada para concatenar textos?",
            options: ["=CONCATENAR()", "=SOMA()", "=PROCV()", "=SE()"],
            answer: "=CONCATENAR()"
        },
        {
            question: "O que faz a função =ÍNDICE()?",
            options: ["Retorna o valor de uma célula específica", "Calcula a média", "Conta células", "Busca valores em tabelas"],
            answer: "Retorna o valor de uma célula específica"
        },
        {
            question: "Como você protege uma planilha no Excel?",
            options: ["Revisão > Proteger Planilha", "Dados > Proteger Planilha", "Inserir > Proteger Planilha", "Exibição > Proteger Planilha"],
            answer: "Revisão > Proteger Planilha"
        },
        {
            question: "Qual é a função usada para arredondar números?",
            options: ["=ARRED()", "=SOMA()", "=MÉDIA()", "=CONTAR()"],
            answer: "=ARRED()"
        },
        {
            question: "Como você remove duplicatas de uma lista?",
            options: ["Dados > Remover Duplicatas", "Inserir > Remover Duplicatas", "Fórmulas > Remover Duplicatas", "Exibição > Remover Duplicatas"],
            answer: "Dados > Remover Duplicatas"
        },
        {
            question: "Qual é a função usada para calcular o desvio padrão?",
            options: ["=DESVPAD()", "=MÉDIA()", "=SOMA()", "=CONTAR()"],
            answer: "=DESVPAD()"
        },
        {
            question: "Como você cria uma macro no Excel?",
            options: ["Desenvolvedor > Gravar Macro", "Inserir > Macro", "Dados > Macro", "Exibição > Macro"],
            answer: "Desenvolvedor > Gravar Macro"
        }
    ]
};

// Variáveis Globais
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Função para Iniciar o Quiz
function startQuiz(level) {
    currentQuiz = quizData[level];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizTitle").textContent = level === "basico" ? "Quiz Básico" : "Quiz Intermediário";
    showQuestion();
    document.getElementById("nextQuestionBtn").style.display = "inline-block";
    document.getElementById("submitQuizBtn").style.display = "none";
}

// Função para Exibir a Pergunta Atual
function showQuestion() {
    const questionData = currentQuiz[currentQuestionIndex];
    const quizQuestionsDiv = document.getElementById("quizQuestions");
    quizQuestionsDiv.innerHTML = `
        <div class="quiz-question">
            <p>${currentQuestionIndex + 1}. ${questionData.question}</p>
            <div class="quiz-options">
                ${questionData.options.map(option => `
                    <label>
                        <input type="radio" name="quizOption" value="${option}">
                        ${option}
                    </label>
                `).join("")}
            </div>
        </div>
    `;
    if (currentQuestionIndex === currentQuiz.length - 1) {
        document.getElementById("nextQuestionBtn").style.display = "none";
        document.getElementById("submitQuizBtn").style.display = "inline-block";
    } else {
        document.getElementById("nextQuestionBtn").style.display = "inline-block";
        document.getElementById("submitQuizBtn").style.display = "none";
    }
}

// Função para Avançar para a Próxima Pergunta
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta.");
        return;
    }
    if (selectedOption.value === currentQuiz[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    }
}

// Função para Enviar o Quiz
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta.");
        return;
    }
    if (selectedOption.value === currentQuiz[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById("quizQuestions").innerHTML = "";
    document.getElementById("quizResult").textContent = `Você acertou ${score} de ${currentQuiz.length} perguntas!`;
    document.getElementById("nextQuestionBtn").style.display = "none";
    document.getElementById("submitQuizBtn").style.display = "none";
}

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

// Função para Alternar Tema Claro/Escuro
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");

    // Alternar a classe 'dark-mode' no body
    body.classList.toggle("dark-mode");

    // Alterar o ícone com base no tema atual
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

    // Salvar a preferência do usuário no localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Verificar a preferência do usuário ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        body.classList.remove("dark-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});