export default class Produto{
  #nome;
  #valor;
  #codigo;
  #tipo;

  constructor(nome, valor, codigo, tipo){
    this.#nome = nome;
    this.#valor = valor;
    this.#codigo = codigo;
    this.#tipo = tipo;
  }

  aplicarDesconto(){
    return this.#valor - this.#valor * 0.1;
  }

  get nome(){
    return this.#nome;
  }
  get valor(){
    return this.#valor;
  }
  get codigo(){
    return this.#codigo;
  }
  get tipo(){
    return this.#tipo;
  }

}