const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um belo dia dona Joana estava fazendo sua caminhada quando encontrou um gatinho que miava muito, vendo ele nessas condições pensei em levá-lo para casa ou levar ele para um abrigo de animais. dona Joana levou ele para onde?",

        alternativas: [
            {
                texto: "sua casa",
                afirmacao: "Dona Joana decidiu levar o gatinho para casa, onde poderia cuidar dele pessoalmente e garantir que ele tivesse um lar acolhedor. "
            },
            {
                texto: "abrigo",
                afirmacao: "Dona Joana decidiu levar o gatinho para um abrigo de animais, mas, ao chegar lá, foi informada de que o abrigo estava lotado. Comovida com a situação, ela resolveu levar o gatinho para casa temporariamente, até que encontrasse uma solução definitiva."
            }
        ]
    },
    {
        enunciado: "quando Dona Joana foi buscar o gatinho Miau no petShop avistou várias roupinhas para o gato, mas ficou em dúvida entre duas cores de roupa, azul e verde. Qual cor Dona Joana escolheu?",
        alternativas: [
            {
                texto: "azul",
                afirmacao: "Dona Joana escolheu a roupinha azul, pois achou que combinaria perfeitamente com os olhos do gatinho Miau, realçando sua fofura."
            },
            {
                texto: "verde",
                afirmacao: "Dona Joana escolheu a roupinha verde, pois acreditava que a cor representava esperança e combinaria bem com o espírito aventureiro do gatinho Miau."
            }
        ]
    },
    {
        enunciado: "quando já estava saindo da loja avistou um brinquedo diferente e interesante para o gatinho, mas ficou em dúvida se comprava ou não",
        alternativas: [
            {
                texto: "comprou o brinquedo",
                afirmacao: "Dona Joana decidiu comprar o brinquedo, pensando que o gatinho Miau iria adorar brincar com algo novo e diferente, ajudando a estimular sua curiosidade e energia."
            },
            {
                texto: "não comprou o brinquedo",
                afirmacao: "Dona Joana decidiu não comprar o brinquedo, pois percebeu que não tinha dinheiro suficiente naquele momento. Ela prometeu voltar outro dia para comprar algo especial para o gatinho Miau."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "e entao ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
