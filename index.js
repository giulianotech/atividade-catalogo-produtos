import {Produto} from './produto.js'

// 1. variáveis - var, let e const
const nomeLoja = 'Áudio & Chi-Fi Store';
let desconto = 0.15;
var categoriaPrincipal = 'Fones In-Ear';

// 2. funções e arrow Functions

//funcão tradidicional

function calcularValorfinal (preco, desconto) {
    return preco - (preco * desconto);
}

//Agora com Arrow function

const calcularValorfinalarrow = (preco, desconto) => preco - (preco * desconto);

// 3. Objetos e classes - Objeto literal 

const acessorioliteral = {
    nome: 'TRN Black Pearl DAC',
    preco: 350.50,
    categoria: 'DAC/Amp'
}

// 4. Arrays e Manipulação de Arrays - Arrays com 5 instâncias

const produto1 = new Produto('KZ Decet', 180.00, 'Fones In-Ear');
const produto2 = new Produto('TRN Conch', 195.00, 'Fones In-Ear');
const produto3 = new Produto('KZ EDC pro', 85.00, 'Fones In-Ear');
const produto4 = new Produto('Kefine klean', 310.00, 'Fones In-Ear'); 
const produto5 = new Produto('Fosi audio IM4', 250.00, 'Fones In-Ear'); 

let catalogo = [produto1, produto2, produto3, produto4, produto5];

console.log( `--- Bem-vindo à ${nomeLoja}---`);

// map - listando apenas os nomes dos produtos
const nomeDosProdutos = catalogo.map(produto => produto.nome);
console.log('nomes dos Produtos no Catálogo: ',nomeDosProdutos);

// filter - filtrando produtos de uma categoria ou faixa de preço
const fonesAcessiveis = catalogo.filter(produto => produto.preco < 100.00);
console.log('Fones mais acessíveis:', fonesAcessiveis);

// reduce - calculando o preço total do catálogo

const valorTotalCatalogo = catalogo.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(`Valor Total do Catálogo: R$ ${valorTotalCatalogo.toFixed(2)}`);

// 5. Destructuring e Tempatle Literals
const {nome, preco} = produto1;
console.log (`Destaque: ${nome} (5 DDs por lado, total de 10) custa R$ ${preco.toFixed(2)}`);

// 7. Operadores - Operador Ternário

const statusPromocao = produto3.preco < 100 ? 'Sim, está em promoção!': 'preço normal.';
console.log(`O ${produto3.nome} está em promoção? ${statusPromocao}`);

// Operadores - Spread Operator
// Clonando o array e adicionando um novo produto
 
const novoItem = new Produto( 'KZ Vader (3DD)',210, 'Fones In-Ear');
const catalogoAtualizado = [...catalogo, novoItem];

console.log('Catálogo Atualizado (com Spread operator):', catalogoAtualizado);