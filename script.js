class heroi{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
    
  atacar(){
    var ataque;

    if(this.tipo == "Mago"){
        ataque = "Magia";

      }else if(this.tipo == "Guerreiro"){
          ataque = "Espada";

        }else if(this.tipo == "Monge"){
            ataque = "Artes Marciais";
            
          }else if(this.tipo == "Ninja"){
              ataque = "Shuriken";
        }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}


let exibir = new heroi("Leandro", 26, "Mago");


exibir.atacar();