const numeros = [45, 4, 9, 16, 25]

/*for( i = 0; i < 5; i++){
    console.log(numeros[i]);
}*/

//ferEach() é um metodo que aplica uma funcao callback
// a cada elemento do array

numeros.forEach(valor => console.log(valor));

//map() é um metodo que cria um novo array com elemontos 
//retornados pot callback function

const numeros2 = numeros.map(valor => valor * 2)
numeros2.forEach(valor => console.log(valor));

//filter() é um metodo que retorna um novo array com
//elementos que atende a um determinado criterio

const numeros3 = numeros.filter(valor => valor > 18)
numeros3.forEach(valor => console.log(valor));

//reduce()produz um unico valor
console.log(
    numeros.reduce((total, valor) => total + valor)
);

//a propriedade length retorna um numero correspondente a quantidade
//de elementos de um array
console.log(numeros.length);
numeros.length = 10;
console.log(numeros);

//console.log(numeros);