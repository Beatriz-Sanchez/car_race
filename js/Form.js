class Form {
  constructor() {
    this.input = createInput("Nome");
    this.button = createButton("Jogar");
    this.greeting = createElement("h3");
    console.log(this.button)
  }

  esconder(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  display() {
    var titulo = createElement('h2');
    titulo.html("Jogo de Corrida");
    titulo.position(displayWidth/2-80, 0);//novo

    //ajeita posição dos elementos html
    //this.input.position(displayWidth/2-80, displayHeight/2-120);//novo
    //this.button.position(displayWidth/2-20, displayHeight/2-50);//novo

    //quando clicar no botão
    this.button.mousePressed(() => {
      //esconder entrada e botão
      this.input.hide();
      this.button.hide();

      jogador.nome = this.input.value();

      //aumentar o valor do numJogadores e atualizar o nome do jogador no banco de dados
      numJogadores += 1;
      jogador.indice = numJogadores; 
      jogador.update();
      jogador.updateCount(numJogadores);

      //mostrar mensagem de boas-vindas
      this.greeting.html("Olá " + jogador.nome);
      this.greeting.position(displayWidth/2-40, displayHeight/2-120);//novo
    });
  }
}
