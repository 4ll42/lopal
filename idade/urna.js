function urna (){
    let candidato_a = 0;
    let candidato_b = 0;
    let brancos = 0;
    let nulos = 0;
    let total;
    let porcent_cand_a;
    let porcent_cand_b;
    let porcent_brancos;
    let porcent_nulos;
    let voto;

    do{
        voto = prompt ("escolher seu candidato ou clique zero para encerrar\n" +
            "1  -> Candidato A\n" +
            "2  -> Candidato B\n" +
            "3  -> Branco\n" +
            "\nQualquer outro numero diferente de 0, 1, 2 e 3 anulara seu voto\n" +
             "digite seu voto: ");

        if(voto == "0") {
                alert ("votação encerrada");
            } else if ( voto == "1"){
               //candidato_a = candidato_a + 1;
               //candidato_a++;
                ++candidato_a;
            } else if ( voto == "2" ){
                ++candidato_b;
            } else if( voto == "3"){
                ++brancos;
            } else {
                ++nulos;
            }
                
        
    } while( voto != "0");

    total = candidato_a + candidato_b + brancos + nulos

    if ( total > 0){

        porcent_cand_a = (candidato_a * 100) /total;
        porcent_cand_b = (candidato_b * 100) /total;
        porcent_brancos = (brancos * 100) /total;
        porcent_nulos = (nulos * 100)/total;

              alert("Total de votos: " + total + "\n" +
            "Candidato A: " + candidato_a + " voto(s)." +
            porcent_cand_a + "% do total" +
            "Candidato B: " + candidato_b + " voto(s)." +
            porcent_cand_b + "% do total" +
            "Brancos: " + brancos + " voto(s)." +
            porcent_brancos +  "% do total" +
            "Nulos: " + nulos + " voto(s)." +
            porcent_nulos + "% do total"
        )
           
    }
}