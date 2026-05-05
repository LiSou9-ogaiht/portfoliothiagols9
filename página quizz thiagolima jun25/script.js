// Definição das perguntas com suas opções e pesos para os eixos
// 'lr_score' indica o impacto no eixo Esquerda-Direita:
// valores negativos movem para Esquerda, positivos para Direita.
// 'al_score' indica o impacto no eixo Autoritário-Libertário:
// valores positivos movem para Autoritário, negativos para Libertário.

const questions = [
    // --- Perguntas do Eixo Esquerda-Direita (LR) ---
    {
        id: 'lr_1',
        question: "Os serviços essenciais, como saúde e educação, devem ser integralmente financiados e geridos pelo estado.",
        answers: [
            { text: "Concordo totalmente", lr_score: -1.0, al_score: 0 },
            { text: "Concordo", lr_score: -0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: 1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_2',
        question: "A privatização de indústrias e serviços públicos melhora a eficiência e a qualidade.",
        answers: [
            { text: "Concordo totalmente", lr_score: 1.0, al_score: 0 },
            { text: "Concordo", lr_score: 0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: -0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: -1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_3',
        question: "As desigualdades econômicas são uma consequência inevitável e aceitável do livre mercado.",
        answers: [
            { text: "Concordo totalmente", lr_score: 1.0, al_score: 0 },
            { text: "Concordo", lr_score: 0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: -0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: -1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_4',
        question: "É responsabilidade da sociedade garantir que todos tenham uma rede de segurança social abrangente.",
        answers: [
            { text: "Concordo totalmente", lr_score: -1.0, al_score: 0 },
            { text: "Concordo", lr_score: -0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: 1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_5',
        question: "Os impostos sobre as grandes fortunas e empresas devem ser significativamente aumentados para redistribuir a riqueza.",
        answers: [
            { text: "Concordo totalmente", lr_score: -1.0, al_score: 0 },
            { text: "Concordo", lr_score: -0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: 1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_6',
        question: "O livre comércio internacional, sem muitas barreiras, beneficia todas as nações a longo prazo.",
        answers: [
            { text: "Concordo totalmente", lr_score: 1.0, al_score: 0 },
            { text: "Concordo", lr_score: 0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: -0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: -1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_7',
        question: "As corporações têm o direito de operar com o mínimo de regulamentação governamental possível.",
        answers: [
            { text: "Concordo totalmente", lr_score: 1.0, al_score: 0 },
            { text: "Concordo", lr_score: 0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: -0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: -1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_8',
        question: "O papel principal do governo é garantir que a economia funcione de forma justa para todos.",
        answers: [
            { text: "Concordo totalmente", lr_score: -1.0, al_score: 0 },
            { text: "Concordo", lr_score: -0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: 1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_9',
        question: "A propriedade privada deve ser restrita em benefício da coletividade, quando necessário.",
        answers: [
            { text: "Concordo totalmente", lr_score: -1.0, al_score: 0 },
            { text: "Concordo", lr_score: -0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: 1.0, al_score: 0 }
        ]
    },
    {
        id: 'lr_10',
        question: "A globalização econômica é, no geral, benéfica para os países em desenvolvimento.",
        answers: [
            { text: "Concordo totalmente", lr_score: 1.0, al_score: 0 },
            { text: "Concordo", lr_score: 0.5, al_score: 0 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: -0.5, al_score: 0 },
            { text: "Discordo totalmente", lr_score: -1.0, al_score: 0 }
        ]
    },
    // --- Perguntas do Eixo Autoritário-Libertário (AL) ---
    {
        id: 'al_1',
        question: "A liberdade individual deve ser limitada para garantir a segurança nacional.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_2',
        question: "É justificável que o governo censure informações que possam causar pânico ou desordem social.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_3',
        question: "A autoridade deve ser respeitada acima de tudo, mesmo que algumas regras pareçam arbitrárias.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_4',
        question: "O estado tem o direito de monitorar as comunicações de seus cidadãos para prevenir crimes.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_5',
        question: "As decisões morais e éticas devem ser guiadas principalmente por tradições e instituições estabelecidas.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_6',
        question: "É mais importante manter a ordem social do que permitir a expressão de opiniões controversas.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_7',
        question: "A pena de morte é uma forma justificada de punição para crimes graves.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_8',
        question: "As leis devem ser estritamente aplicadas, mesmo que pareçam duras em casos individuais.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_9',
        question: "É dever do estado promover e proteger os valores culturais e morais tradicionais da nação.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    },
    {
        id: 'al_10',
        question: "Cidadãos com bom comportamento devem ter mais direitos e liberdades do que outros.",
        answers: [
            { text: "Concordo totalmente", lr_score: 0, al_score: 1.0 },
            { text: "Concordo", lr_score: 0, al_score: 0.5 },
            { text: "Neutro", lr_score: 0, al_score: 0 },
            { text: "Discordo", lr_score: 0, al_score: -0.5 },
            { text: "Discordo totalmente", lr_score: 0, al_score: -1.0 }
        ]
    }
];

const questionElement = document.getElementById("question"); // Corrigido para 'question' minúsculo
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let leftRightScore = 0; // Pontuação para o eixo Esquerda-Direita
let authoritarianLibertarianScore = 0; // Pontuação para o eixo Autoritário-Libertário

function startQuiz() {
    currentQuestionIndex = 0;
    leftRightScore = 0;
    authoritarianLibertarianScore = 0;
    nextButton.innerHTML = "Próxima";
    nextButton.style.display = "none"; // Esconde o botão 'Próxima' no início
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none"; // Garante que o botão 'Próxima' esteja oculto
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Corrigido de removeShild para removeChild
    }
    // Remove qualquer classe de 'selected' dos botões anteriores
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("selected");
    });
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`; // Usando template literal para clareza

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.lrScore = answer.lr_score; // Armazena a pontuação LR no dataset
        button.dataset.alScore = answer.al_score; // Armazena a pontuação AL no dataset
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    // Adiciona uma classe para indicar que foi selecionado
    selectedBtn.classList.add("selected");

    // Desabilita todos os botões após uma seleção
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });

    // Adiciona a pontuação com base na seleção
    leftRightScore += parseFloat(selectedBtn.dataset.lrScore);
    authoritarianLibertarianScore += parseFloat(selectedBtn.dataset.alScore);

    // Mostra o botão 'Próxima' após a seleção
    nextButton.style.display = "block";
}

function showResults() {
    resetState();

    // Normalizar as pontuações para a escala de 0 a 10
    // As pontuações variam de -10 a +10. Para escalar para 0-10:
    // (score + 10) / 2
    const normalizedLeftRight = ((leftRightScore + 10) / 20) * 10;
    const normalizedAuthoritarianLibertarian = ((authoritarianLibertarianScore + 10) / 20) * 10;

    questionElement.innerHTML = `
        <h3>Resultados Finais:</h3>
        <p>Eixo Esquerda-Direita: ${normalizedLeftRight.toFixed(1)}/10</p>
        <p>Eixo Autoritário-Libertário: ${normalizedAuthoritarianLibertarian.toFixed(1)}/10</p>
        <p>Lembre-se: estes resultados são uma simplificação e servem como um ponto de partida para reflexão.</p>
    `;
    nextButton.innerHTML = "Refazer Quiz";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults(); // Mudamos para showResults no final
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Se o quiz terminou, recomeça
    }
});

startQuiz();

/*const questions = [
    {
        question: "Pergunta 1",
        answers: [
            { id: 1, text: "Resposta 1"},
            { id: 2, text: "Resposta 2"},
            { id: 3, text: "Resposta 3"},
            { id: 4, text: "Resposta 4"},
            { id: 5, text: "Resposta 5"}
        ]
    }
]


const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.Button.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeShild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz(); */


//modificar e colocar TODAS as perguntas mais tarde!!!!!!!!!!!! - colocar que nenhuma resposta está certa ou errada, só que ela tem que atingir mínimo de 0 e máximo de 10 tanto para o eixo X quanto para o eixo Y
