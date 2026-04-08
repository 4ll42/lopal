const pessoa = {
    nome:  "Henrique",
    sobrenome:  "Goes",
    idade: 16,
    time:  "palmeiras",
    nomeCompleto: function (){return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this} //retorna o proprio objeto
};

console.log(pessoa.nomeCompleto() + " " +
    "tem" + " " + pessoa.idade + " " + "anos de idade e torce para o " + pessoa.time
);

const pessoaStringificada = JSON.stringify(pessoa);
console.log(pessoaStringificada);

const pessoaParseada = JSON.parse(pessoaStringificada);
 console.log(pessoa.nome + pessoa .sobrenome + "tem " +
    pessoa.idade + "anos e torce para o" + pessoa.time)


    















































