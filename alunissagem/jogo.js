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
        x: 700,
        y: 100
    },
    angulo: Math.PI/2,
    largura: 20,
    altura: 20,
    cor: "lightgray",
    velocidade:{
        x: -2,
        y: 0,
    },
    motorLigado: false,
    combustivel:1000,
    rotacaoHorario: false,
    rotacaoAntiHorario: false
}

function mostrarCombustivel(){
    contexto.font = "bold 18 px Arial";
    contexto.textAlign = "left";
    contexto.testBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    contexto.fillText(
    `Combustivel: ${(modulolunar.combustivel * 0.1).toFixed(0)} %`,
    50,
    80
    );
}
  
function mostrarVelocidadeVertical(){
    contexto.font = "bold 18 px Arial";
    contexto.textAlign = "left";
    contexto.testBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    contexto.fillText(
    `Velocidade Vertical: ${(10 * modulolunar.velocidade.y ).toFixed(2)}`,
    50,
    60
    );
}
function mostrarVelocidadeHorizontal(){
    contexto.font = "bold 18 px Arial";
    contexto.textAlign = "left";
    contexto.testBaseLine = "middle";
    contexto.fillStyle = "lightgray";
    contexto.fillText(
    `Velocidade Horizontal: ${(10 * modulolunar.velocidade.x ).toFixed(2)}`,
    50,
    40
    );
}
function desenharFundo(){

 //desenhar fundo da tela
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    //salvar as modificacoes atuais
    contexto.save();
    //deixar a tela toda preta
    contexto.fillStyle = "#000";
    contexto.fillRect(0,0, canvas.width, canvas.height);
    contexto.restore();
}

function desenharModuloLunar(){
    
    contexto.save();
    //desenhar modulo lunar
    contexto.beginPath();
    //move a origem das coordenadas para o centro do modulo lunar
    contexto.translate(modulolunar.posicao.x, modulolunar.posicao.y);
    contexto.rotate(modulolunar.angulo);
    contexto.rect(modulolunar.largura * -0.5, modulolunar.altura * -0.5,
     modulolunar.largura, modulolunar.altura);
    contexto.fillStyle = modulolunar.cor;
    contexto.fill();
    contexto.closePath();
     
    if(modulolunar.motorLigado == true && modulolunar.combustivel > 0){
        desenharChama();
        modulolunar.combustivel--;
    if(modulolunar.combustivel == 0){
             modulolunar.motorLigado = false
       }
    }
    contexto.restore();
   
}

function desenharChama(){

    //quando vc quer desenhar(chama do foguete)
    contexto.beginPath();
    //define o ponto de origem da chama no canto inferior esquerdo do modulo
    contexto.moveTo(modulolunar.largura * -0.5, modulolunar.altura * 0.5);
    //desenha uma linha ate o ponto inferior direito do modulo
    contexto.lineTo(modulolunar.largura * 0.5, modulolunar.altura * 0.5);
    //determinar o tamanho da chama
    //desenha uma linha de posicao aleatoria y entre a base de modulo e 35 pixels
    contexto.lineTo(0, modulolunar.altura * 0.5 + Math.random() * 35);
    contexto.closePath();//desenha
    contexto.fillStyle = "orange";
    contexto.fill();
   
}
//animacao sempre comeca no canto superior esquerdo por isso o 0, 0, para 
// limpar tela clearRect, ai comeca a animacao
function desenhar(){

    atracaoGravitacional();
    desenharFundo();
    desenharModuloLunar();
    mostrarCombustivel();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal()
    
     if(modulolunar.posicao.y > canvas.height - modulolunar.altura * 0.5 ){
        if(modulolunar.velocidade.y <= 0.5 &&
            modulolunar.velocidade.x <= 0.5 &&
            modulolunar.angulo <= 5){
        mostrarResultado("Você pousou com sucesso!", cor = "green");
        }else{
        mostrarResultado("Você impactou o solo!", cor = "red" );
    }
        return
   }
    //faz a animacao (so tinhamos feito o desenho)
    requestAnimationFrame(desenhar);
}
function mostrarResultado(mensagem, cor){
    contexto.font = "bold 40px Calibri";
    contexto.textAlign = "center";
    contexto.textBaseline = "middle";
    contexto.fillStyle = cor;
    contexto.fillText(mensagem, canvas.width * 0.5, canvas.height * 0.5);
}
//quando aperta uma das teclas
document.addEventListener('keydown', teclaPressionada);

//dependendo da tecla q vc clicar ele executara uma funcao
function teclaPressionada(evento){
    if(evento.key == "ArrowUp" && modulolunar.combustivel > 0){
        modulolunar.motorLigado = true;
    } else if(evento.key == "ArrowRight"){
        modulolunar.rotacaoHorario = true;
    }else if(evento.key == "ArrowLeft"){
        modulolunar.rotacaoAntiHorario = true;
    }
}

document.addEventListener('keyup', teclaSolta);

function teclaSolta(evento){
    if(evento.key == "ArrowUp"){
        modulolunar.motorLigado = false;
    } else if(evento.key == "ArrowRight"){
        modulolunar.rotacaoHorario = false;
    } else if(evento.key == "ArrowLeft"){
        modulolunar.rotacaoAntiHorario = false;
    }
}
const gravidade = 0.01;

function atracaoGravitacional(){
//atracao gravitacional
    modulolunar.posicao.x += modulolunar.velocidade.x;
    modulolunar.posicao.y += modulolunar.velocidade.y;
    modulolunar.velocidade.y += gravidade;

    if(modulolunar.rotacaoHorario){
        modulolunar.angulo += Math.PI/180
    } else if(modulolunar.rotacaoAntiHorario){
        modulolunar.angulo -= Math.PI/180
    }

    if(modulolunar.motorLigado && modulolunar.combustivel > 0){
        modulolunar.velocidade.y -= 0.0115 * Math.cos(modulolunar.angulo);
        modulolunar.velocidade.x += 0.0115 * Math.sin(modulolunar.angulo);
    }
}

//chamar funcao desenhar
desenhar();