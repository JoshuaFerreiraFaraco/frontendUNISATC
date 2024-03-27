//console.log(10 === '10');
//console.log(10 !== '10');

/* var a = 2;
let b = 3;
const c = 4;

if(true){
    var d = 2;
    let e = 3;
    const f = 4;
    // console.log(a)
    // console.log(b)
    // console.log(c)
} */

/* console.log(d) */

/* const g = 1, h = 2, i = 3 */

/* const user = 'rodrigo'
if(user === 'rodrigo'){
    // console.log('Usuario logado..!');
} else {
    // console.log('Usuario nao cadastrado...!');
} */

// user === 'rodrigo' ? console.log('Usuario logado..!') : console.log('Usuario nao cadastrado...!');

/* const curso = 'SW'
switch (curso) {
    case 'SW':
        // console.log('Engenharia de Software');
        break;
    case 'ENC':
        // console.log('Engenharia da Computacao');
        break;
    default:
       // console.log('Curso não cdastrado') 
}; */

/* let j = 0;
while(j < 10){
    // j++;
    //console.log(j);
    j++;
}; */

/* let k = 0;
do {
    // console.log(k)
    k++;
} while (k < 10); */

/* for(let i = 0; i < 10; i++){
    // console.log(i);
} */

/* for(let i = 0; i < 10; i++){
    if(i === 3){
        break;
    }
    // console.log(i);
} */

//funcao sem passagem de parametro e sem retorno

/* function myFunction() {
    console.log('oi');
} */

// myFunction()

/* const myFunction2 = () => {
    console.log('oi arrow');
} */

// myFunction2()

//funcao com passagem de parametro e sem retorno
/* function defineParOuImpar(numero) { 
    if(numero % 2 === 0){
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é impar`);
    }
} */

// defineParOuImpar(5);

/* const defineParOuImpar2 = (numero) => {
    numero % 2 === 0 ? console.log(`${numero} é par`) : console.log(`${numero} é impar`);
} */

// defineParOuImpar2(6);

//funcao com passagem de parametro e com retorno
/* function calculaRaiz(numero) { 
    return Math.sqrt(numero)
} */

/* const resultado = calculaRaiz(9);
console.log(resultado);
console.log(calculaRaiz(81)); */

//ARRAYS

//let nomes = ['joão', 'maria', 'rodrigo'];
// // console.log(nomes[0]);
// console.log(typeof nomes);
// console.log(nomes.length);
// console.log(Object.keys(nomes));

// Métodos

//nomes.unshift('nevio'); // insere no inicio
//nomes.push('alice'); // insere no final
// console.log(nomes);
// nomes.pop(); // remove do final
// nomes.shift(); // remove do inicio
// console.log(nomes);

/* const filteredArray = nomes.filter((nome) => nome.length === 4); */
// console.log(filteredArray);

/* const foundName = nomes.find((nome) => nome.length === 4); */
// console.log(foundName);

/* const foundNameIndex = nomes.findIndex((nome) => nome.length === 4); */
// console.log(foundNameIndex);

/* const slicedNames = nomes.slice(2); */
// console.log(slicedNames);

/* const reversedNames = nomes.reverse(0); */
// console.log(reversedNames);


/* const numeros = [2,3,4,7,8];
for(let i = 0; i < numeros.length; i++){
    // console.log(numeros[i])
}

for(let num of numeros){
    // console.log(num);
} */

// numeros.forEach(num => console.log(num));
// numeros.map(num => console.log(num));
/* const mappedNumbers = numeros.map((num) => num * 2); */
// console.log(mappedNumbers);

// OBJETOS
// forma literal
/* const aluno = {
    id: 1,
    nome: 'joao',
    email: 'joao@email.com',
    info: function() {
        console.log(`Nome: ${this.nome}\nEmail: ${this.email}`)
    }
} */
// console.log(aluno);
// console.log(aluno.nome);
// aluno.info();

/* aluno.matricula = '012345';
delete aluno.id */
// console.log(aluno);

// via funcao construtora 
/* const pessoa = new Object();
pessoa.nome = 'maria';
pessoa.idade = 20;
pessoa.email = 'maria@email.com'; */
// console.log(pessoa);

/* class Carro {
    #potencia // atributo privado
    constructor(marca, cor, potencia) {
        this.marca = marca;
        this.cor = cor;
        this.#potencia = potencia; // atributo privado      
    }

    getPotencia(){
        return this.#potencia;
    }
}

const carro = new Carro('vw', 'prata', '65'); */
// console.log(carro);
// console.log(carro.getPotencia());

// Acesso e manipulação do DOM
/* console.log(document.body.childNodes); */

//Seleção do elemento pelo nome da tag.
/* const nameTag = document.getElementsByTagName('h2');
console.log(nameTag); */

//selecionando por id
/* const title = document.getElementById("title");
console.log(title);
console.log(title.textContent); */

//selecionando por classe
/* const posts = document.getElementsByClassName("posts");
console.log(posts);
console.log(posts[0].textContent); */

//selecionando por CSS
/* const postsQuery = document.querySelectorAll(".posts");
console.log(posts);
console.log(posts[0].textContent);

const container = document.querySelector("#container");
console.log(container);
console.log(container.textContent); */

//Serve para adicionar um novo elemento dentro de outro elemento pai.
/* const p2 = document.createElement("p");
console.log(p2);
p2.textContent = 'Eu sou o novo parágrafo';
console.log(p2);
posts[0].appendChild(p2); */

//Cria um nó de texto que pode ser inserido em um elemento já existente.
/* const myText = document.createTextNode("Inserindo novo título na div container");
const h3 = document.createElement("h3");
h3.appendChild(myText);
container.appendChild(h3); */

//Eventos

//Adição de eventos
/* const btn = document.querySelector("#button");
btn.addEventListener("mouseenter", function () {
 btn.style.backgroundColor = "red";
 console.log("Mouse sobre o botão");
});

btn.addEventListener("mouseleave", function () {
 btn.style.backgroundColor = "blue";
 console.log("Mouse deixou o botão");
})

btn.addEventListener("click", function () {
 console.log("Clicou aqui!");
}); */

/* const mouse = document.querySelector("#mouse");

mouse.addEventListener("dblclick", () => {
 console.log("Clique duplo");
});
mouse.addEventListener("mousedown", () => {
 console.log("Pressionou botão");
});
mouse.addEventListener("mouseup", () => {
 console.log("Soltou botão");
}); */

//Argumento de evento

/* const title = document.querySelector("#title");
title.addEventListener("click", (e) => {
 console.log(e);
}); */

//coordenadas X-Y de movimento do mouse
/* document.addEventListener("mousemove", (e) => {
 console.log(`Eixo X: ${e.x}`);
 console.log(`Eixo Y: ${e.y}`);
}); */

//Eventos do teclado

/* document.addEventListener("keydown", (e) => {
 console.log(`Pressionou ${e.key}`);
});

document.addEventListener("keyup", (e) => {
 console.log(`Soltou ${e.key}`);
}); */

//Removendo efeito padrão

/* const a = document.querySelector("a");
a.addEventListener("click", (e) => {
 e.preventDefault();
 console.log("Desabilitou ação do link");
}); */

//Evento de focus

/* const input = document.querySelector("#input");

input.addEventListener("focus", (e) => {
 console.log("Efeito de focus!");
});

input.addEventListener("blur", (e) => {
 console.log("Efeito de blur!");
}); */