function procedimento(){


function inicio(){
 
    mensagem(frase = "o resultado de a² + b² é :" +  calcular( b = 5));
}

inicio();

function mensagem(frase){
   let linha = "-"
    let i = 0;
   
    do{
        linha = linha + "-"
        i++;

    }while( i < 50 );

    alert(linha + "\n" + frase + "\n" + linha); 


}

function calcular (a, b ){
    return a * a + b * b;
    
}

}