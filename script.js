//ACORDEÃO (ABRIR E FECHAR CONTEÚDOS)
document.querySelectorAll(".titulo-acordeao").forEach(botao => {
    botao.addEventListener("click", () => {
        let conteudo = botao.nextElementSibling; //pegue o próximo elemento
        let simbolo = botao.querySelector("span");

        // Alterna entre block e none usando operador ternário
        conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
        simbolo.textContent = conteudo.style.display === "block" ? "−" : "+";
    });
});

//LINHA DO TEMPO
function mostrarAno(id, botao) {
    // Esconde todos os eventos de uma vez só
    document.querySelectorAll(".evento").forEach(ev => ev.style.display = "none");
    
    // Remove a classe 'ativo' de todos os botões de anos
    document.querySelectorAll(".anos button").forEach(btn => btn.classList.remove("ativo"));

    // Mostra o evento selecionado e ativa o botão atual
    let eventoSelecionado = document.getElementById(id);
    eventoSelecionado.style.display = "block";
    botao.classList.add("ativo");

    // Rolar suavemente até o marco
    eventoSelecionado.scrollIntoView({ behavior: "smooth", block: "center" });
}

//EIXO E ALIADOS
function mostrarBlocoGuerra(id) {
    let conteudo = document.getElementById(id);
    let estavaAberto = conteudo.style.display === "block";

    // Fecha todos os blocos de guerra em uma linha
    document.querySelectorAll(".conteudo-guerra").forEach(bloco => bloco.style.display = "none");

    // Só reabre se ele já não estivesse aberto antes
    if (!estavaAberto) conteudo.style.display = "block";
}

//QUIZ (DADOS E LÓGICA)
const perguntas = [
    {
        pergunta: "Um aluno tirou as seguintes notas em quatro provas de Matemática: 3, 6, 5 e 9. Qual foi a média aritmética das notas?",
        alternativas: ["5,5", "5,75", "6", "6,25"],
        correta: 1,
        explicacao: "A média aritmética é calculada somando todos os valores e dividindo pela quantidade de dados. (3 + 6 + 5 + 9) / 4 = 23 / 4 = 5.75."
    },
    {
        pergunta: "A média das idades de 10 alunos de uma turma é 32 anos. Em determinado dia, o aluno mais velho faltou e a média dos 9 alunos presentes passou a ser 30 anos. Qual é a idade do aluno que faltou?",
        alternativas: ["42 anos", "48 anos", "50 anos", "52 anos"],
        correta: 2,
        explicacao: "A soma das idades dos 10 alunos é 32 × 10 = 320. A soma das idades dos 9 alunos presentes é 30 × 9 = 270. Portanto, a idade do aluno que faltou é 320 − 270 = 50 anos."
    },
    {
        pergunta: "Uma loja de calçados registrou os números dos calçados vendidos durante uma tarde: 36, 38, 37, 38, 39, 40, 38, 37, 36, 38. Para decidir quais tamanhos devem receber maior reposição de estoque, o gerente analisa a moda dos dados. Qual número de calçado deve receber maior atenção na reposição?",
        alternativas: ["36", "37", "38", "39"],
        correta: 2,
        explicacao: "A moda é o valor que aparece com maior frequência em um conjunto de dados. Na pesquisa da loja, o número 38 foi vendido quatro vezes, enquanto os demais números apareceram menos vezes. Por isso, o tamanho 38 é a moda e deve receber maior atenção na reposição do estoque."
    },
    {
        pergunta: "Uma professora organizou as notas de sete estudantes em ordem crescente: 4,0; 5,5; 6,0; 7,0; 8,0; 8,5; 10,0. Qual é a mediana das notas dessa turma?",
        alternativas: ["6,0", "7,0", "8,0", "8,5"],
        correta: 1,
        explicacao: "A mediana é o valor central de um conjunto de dados organizado em ordem crescente ou decrescente. Como existem sete notas, basta identificar a quarta posição. A sequência é 4,0; 5,5; 6,0; 7,0; 8,0; 8,5; 10,0. Portanto, a mediana é 7,0."
    },
    {
        pergunta: "Em uma semana, um aplicativo registrou a quantidade de quilômetros percorridos por uma pessoa em cinco dias: 3, 5, 4, 6 e 12 km. A pessoa deseja conhecer a distância média percorrida por dia. Qual foi a distância média diária?",
        alternativas: ["4km", "5km", "6km", "7km"],
        correta: 2,
        explicacao: "Para calcular a média aritmética, somamos todos os valores e dividimos pela quantidade de observações. Nesse caso, a soma das distâncias é 3 + 5 + 4 + 6 + 12 = 30 km. Como foram cinco dias, fazemos 30 ÷ 5 = 6 km. Assim, a distância média diária foi de 6 km."
    },
    {
        pergunta: "Uma pesquisa perguntou a 20 estudantes quantos livros haviam lido no último semestre. Os resultados foram: 0 livros (3 estudantes), 1 livro (5), 2 livros (8) e 3 livros (4). Qual é a moda do número de livros lidos?",
        alternativas: [" 0 livro", "1 livro", "2 livros", "3 livros"],
        correta: 2,
        explicacao: " A moda corresponde à categoria com a maior frequência. Na pesquisa, oito estudantes leram dois livros, enquanto cinco leram um livro, quatro leram três livros e três não leram nenhum. Como dois livros foi a resposta mais frequente, essa é a moda da distribuição."
    },
    {
        pergunta: "O tempo, em minutos, que cinco candidatos levaram para concluir uma prova foi: 42, 55, 38, 60 e 45. A coordenação quer utilizar a mediana para representar o tempo típico, reduzindo a influência de valores extremos. Qual é a mediana desses tempos?",
        alternativas: ["42 minutos", "55 minutos", "38 minutos", "45 minutos"],
        correta: 3,
        explicacao: "Primeiro, organizamos os tempos em ordem crescente: 38, 42, 45, 55 e 60 minutos. Como há cinco valores, a mediana é o terceiro número, que ocupa a posição central. Portanto, o tempo mediano é de 45 minutos."
    },
    {
        pergunta: "Um estudante obteve notas 6,0; 7,0 e 8,0 em três avaliações. Para ser aprovado, precisa alcançar média aritmética igual ou superior a 7,0 nas quatro avaliações. A quarta nota terá o mesmo peso das anteriores. Qual é a menor nota que ele deve obter na quarta avaliação para alcançar a média exigida?",
        alternativas: ["6,0", "6,5", "7,0", "7,5"],
        correta: 2,
        explicacao: " Para obter média 7,0 em quatro avaliações, a soma das notas precisa ser 7 × 4 = 28 pontos. O estudante já possui 6 + 7 + 8 = 21 pontos. Portanto, a nota necessária na quarta avaliação é 28 − 21 = 7,0. Essa é a menor nota que permite alcançar a média exigida."
    },
    {
        pergunta: "Em uma pesquisa, os números de pessoas por domicílio foram: 2, 3, 4, 2, 5, 3, 4, 2, 3. Um estudante afirmou que a moda era 4, pois esse valor também aparece repetidamente. Qual análise está correta?",
        alternativas: ["A moda é 2, pois aparece três vezes", " Existem três modas: 2, 3 e 4", " A moda é 3, pois aparece três vezes", "A moda é 2, pois aparece três vezes"],
        correta: 1,
        explicacao: "A moda é o valor que aparece mais vezes. No conjunto apresentado, o número 2 aparece três vezes e o número 3 também aparece três vezes. Como ambos compartilham a maior frequência, o conjunto possui duas modas, sendo chamado de bimodal."
    },
    {
        pergunta: "Uma unidade de saúde registrou o número de atendimentos realizados em cinco períodos: 18, 22, 15, 30 e 20. Para descrever o volume central de atendimentos, a equipe optou pela mediana. Qual valor representa a mediana desses atendimentos?",
        alternativas: ["15", "18", "20", "23"],
        correta: 2,
        explicacao: " Para encontrar a mediana, organizamos os dados em ordem crescente: 15, 18, 20, 22 e 30. Como existem cinco valores, o terceiro ocupa a posição central. Portanto, a mediana é 20 atendimentos, representando o valor central do conjunto."
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    
    document.getElementById("progresso").textContent = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    document.getElementById("pergunta").textContent = pergunta.pergunta;
    
    let alternativasContainer = document.getElementById("alternativas");
    alternativasContainer.innerHTML = ""; // Limpa anterior

    pergunta.alternativas.forEach((alternativa, indice) => {
        let botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.onclick = () => verificarResposta(indice);
        alternativasContainer.appendChild(botao);
    });

    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima").style.display = "none";
}

function verificarResposta(indice) {
    let pergunta = perguntas[perguntaAtual];
    let botoes = document.querySelectorAll("#alternativas button");

    botoes.forEach(btn => btn.disabled = true);

    if (indice === pergunta.correta) {
        botoes[indice].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta correta! ${pergunta.explicacao}`;
        pontos++;
    } else {
        botoes[indice].classList.add("errada");
        botoes[pergunta.correta].classList.add("correta");
        document.getElementById("feedback").textContent = `Resposta incorreta. ${pergunta.explicacao}`;
    }

    document.getElementById("proxima").style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let msg = pontos === perguntas.length ? "Excelente! Você acertou todas!" : 
              pontos >= 7 ? "Muito bom! Ótimo conhecimento." : "Vale a pena revisar o conteúdo.";

    document.getElementById("quiz-container").innerHTML = `
        <h3>Resultado final</h3>
        <p>Você acertou <strong>${pontos}</strong> de <strong>${perguntas.length}</strong> questões.</p>
        <p>${msg}</p>
        <button id='refazer' onclick='refazerQuiz()'>Refazer Quiz</button>
    `;
}

function refazerQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById("quiz-container").innerHTML = `
        <p id="progresso"></p>
        <h3 id="pergunta"></h3>
        <div id="alternativas"></div>
        <p id="feedback"></p>
        <button id="proxima" onclick="proximaPergunta()">Próxima pergunta</button>
    `;
    mostrarPergunta();
}

// Inicialização automática do Quiz
if (document.getElementById("quiz-container")) {
    mostrarPergunta();
}
