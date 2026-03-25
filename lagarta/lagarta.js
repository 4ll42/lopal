async function lagarta(){
    let lagarta = "()()()(0,0)"
    let espaco = "  ";
    let abre = "(  ) (  ) (  ) (0,0)"

    function sleep(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 30; i++){

        lagarta = espaco + lagarta;
        abre = espaco + abre
        console.log(i % 2 == 0? lagarta: abre);
        await sleep (600);
        console.clear();
       
    }
}