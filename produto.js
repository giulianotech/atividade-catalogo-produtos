// 6. Módulo ES6 - Exportando a classe
export class produto {
    // 3. Objetos e Classes - Criação da classe com propriedades
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    //Método para retornar o preço com desconto
    aplicarDesconto(taxaDesconto) {
        return this.preco - (this.preco * taxaDesconto);
    }
    //Método para exibir informações formatadas
    exibirInfo() {
        // Template Literals
        console.log (`O produto ${this.nome} custa R$ ${this.preco.toFixed(2)}`);

    }
}