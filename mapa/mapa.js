function mapa(){
   const frutas = new Map();

   frutas.set("maçã", 500);
   frutas.set("banana", 300);
   frutas.set("laranja", 200);
   frutas.set("pera", 200)
   
   let preco = frutas.get("pera");

   console.log(frutas);

   //side é uma propriedade que armazena o tamanho do mapa
   console.log(frutas.size)

   //o metodo has() retorna verdadeiro ou falso para uma determinada chave
   console.log(frutas.has('banana'));
   frutas.forEach((valor, chave) => console.log (`${chave} =R$${valor},00`))

   //o metodo Keys() retorna uma colecao com as chaves do mapa
   //a estrutura de repeticao for of itera sobre os valores de uma colecao
   for (const x of frutas.keys()){
      console.log(x);
   }

   //values() é um metodo que retorna uma colecao contendo todos os valores de um mapa
   for (const x of frutas.valeus()){
      console.log(x);
   }
   
}
mapa();