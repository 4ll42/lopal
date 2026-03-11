function idade(){
    let idade;
    do{
        idade = parseInt(prompt("informe sua idade (valores aceitos de 5 a 150):"));
    }while( idade < 5 || idade > 150 || idade !=  idade );
    alert ("idade validada.");
}