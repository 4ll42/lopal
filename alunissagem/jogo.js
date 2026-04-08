//jogo da alunissagem
//4ll42
//08/04/2026
//Versão 0.1.0

/** @type {HTMLCanvasElement} */

//canvas (feito para fazer jogos)
let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

let modulolunar = {
    posicao: {
        x: 100,
        y: 100
    },
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: 0,
        y: 2
    }
}

//animacao sempre comeca no canto superior esquerdo por isso o 0, 0, para 
// limpar tela clearRect, ai comeca a animacao
function desenhar(){
    //atracao gravitacional
    modulolunar.posicao.x += modulolunar.velocidade.x;
    modulolunar.posicao.y += modulolunar.velocidade.y;

    //desenhar fundo da tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    //salvar as modificacoes atuais
    contexto.save();
    //deixar a tela toda preta
    contexto.fillStyle = "#000";
    contexto.fillRect(0,0, canvas.width, canvas.height);
    contexto.restore();

    //desenhar modulo lunar
    contexto.save();
    contexto.beginPath();
    contexto.translate(modulolunar.posicao.x, modulolunar.posicao.y);
    contexto.rect(modulolunar.largura * -0.5, modulolunar.altura * -0.5,
        modulolunar.largura, modulolunar.altura);
    contexto.fillStyle = modulolunar.cor;
    contexto.fill();
    contexto.closePath();
    contexto.restore();
    
    //faz a animacao (so tinhamos feito o desenho)
    requestAnimationFrame(desenhar);
}

//chamar funcao desenhar
desenhar();