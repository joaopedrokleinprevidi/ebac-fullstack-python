class Veiculo {
    constructor(marca, cor, potencia){
        this.marca = marca;
        this.cor = cor;
        this.potencia = potencia;
        this.ligar = function(){
            console.log(this.marca + " ligou vrumm")
        }
        this.desligar = function(){
            console.log(this.marca + " desligou shhhhh")
        }
}}

class Moto extends Veiculo {
    constructor( marca, cor, potencia, marcaGuidao ){
    super (marca, cor, potencia)
    
    this.marcaGuidao = marcaGuidao;
    }
}

class Carro extends Veiculo {
    constructor(marca, cor, potencia, marcaVolante ){
    super(marca, cor, potencia)
    
    this.marcaVolante = marcaVolante;
    }
}

const cb500 = new Moto('cb500', 'verde', '500 cavalos', 'chinese');
const xj = new Moto('xj', 'azul', '1200 cavalos', 'hornet');

const uno = new Carro('fiat', 'preto', '1.0', 'brasileiro')
const lamborghini = new Carro('lamborghini', 'vermelho', '1000 cavalos', 'lamborghini');

console.log(lamborghini.cor)
console.log(lamborghini.ligar())