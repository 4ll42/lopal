function conjunto(){
    const letras = new Set();
    letras.add("a");
    letras.add("b");
    letras.add("c");
   
    
    letras.delete("c")
    console.log(letras)

    // retorna a mesma colecao que values e vice e versa
    for(const x of letras.keys()){
        console.log(x)
    }

}
conjunto();