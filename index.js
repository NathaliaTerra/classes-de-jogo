class HeroiAventureiro {
    // Construtor para inicializar o herói com nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que define o tipo de ataque com base no tipo do herói
    atacar() {
      let ataque;
  
      // Estrutura de decisão para definir o ataque conforme o tipo do herói
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "desconhecido";
      }
  
      // Exibe a mensagem do tipo de ataque do herói
      console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
  }
  
  // Exemplo de criação de objetos da classe HeroiAventureiro
  
  const mago = new HeroiAventureiro("Gandalf", 1000, "mago");
  const guerreiro = new HeroiAventureiro("Arthur", 30, "guerreiro");
  const monge = new HeroiAventureiro("Shaolin", 40, "monge");
  const ninja = new HeroiAventureiro("Naruto", 17, "ninja");
  
  // Chamando o método atacar para cada herói
  mago.atacar(); // Output: O mago atacou usando magia.
  guerreiro.atacar(); // Output: O guerreiro atacou usando espada.
  monge.atacar(); // Output: O monge atacou usando artes marciais.
  ninja.atacar(); // Output: O ninja atacou usando shuriken.