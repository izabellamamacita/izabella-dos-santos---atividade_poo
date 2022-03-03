class Retangulo{
  constructor(largura, altura){
    this.largura = largura;
    this.altura = altura;
  } 
  calcularArea(){
    return this.largura * this.altura
  }
  area(){
    return this.calcularArea()
  }
 
}

let retangulo = new Retangulo(25, 40);
console.log(retangulo.calcularArea())
let quadrado = new Retangulo(15, 25);
console.log(quadrado.calcularArea())
let triangulo = new Retangulo(30, 40);
console.log(retangulo.area());
