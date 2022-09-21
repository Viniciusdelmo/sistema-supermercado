export default class Carrinho{
  #listaDeProdutos;
  #valorTotal;

  constructor(){
    this.#listaDeProdutos = [];
    this.#valorTotal = 0;
  }
  adicionarProduto(produto){
    this.#listaDeProdutos.push(produto);
    this.#valorTotal += produto.valor;
  }
  removerProduto(){
    const produtoRemovido = this.#listaDeProdutos.pop();
    this.#valorTotal -= produtoRemovido.valor;
  }

   calcularValor(){
    let valorDesconto = 0;
    this.#listaDeProdutos.forEach((produto) => {
      valorDesconto += produto.aplicarDesconto();
    })
    return valorDesconto;
   }

  get valor(){
    return this.#valorTotal;
  }
  get listaDeProdutos(){
    return this.#listaDeProdutos;
  }
}