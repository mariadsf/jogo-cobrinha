//Play board é a tela ou tabuleiro

//Container onde a cobra e a comida serão redenrizadas
const playBoard = document.querySelector(".play-board");
//Placar atual do jogador
const scoreElement = document.querySelector(".score");
//recorde (maior pontuação)
const highScoreElement = document.querySelector(".high-score");
//controle de movimento 
//*seleciona elementos <i> icones botões para devices mobile*/
const controls = document.querySelectorAll(".controls i");

//cadastro de variaveis 

/* Variavel bolena que indica se o jogo terminou */ 
let gameOver = false;
//variavel para armazenar as coordenadas x e y da comida 
let foodX, foodY;
//Armazena as coordenadas X e Y da cabeça da cobra (posição de 5)
let snakeX = 5, snakeY = 5;
/* variavel para armazenar a velocidade nas
  direções X e Y , inicialmente em 0, porque a cobra está parada */
let velocityX = 0, velocityY = 0;
//uma Array para armazenar as coordenadas de cada segmento do corpo, primeiro elemento é a cabeça
let sankeBody = [];
/* variavel para armazenar o Id do intervalo que será usado para atualizar o jogo 
em um determinado ritmo */ 
let setIntervalId;
/* uma variavel para manter o controle da pontuação atual do jogador */
let score = 0;




// obtenha pontuação alta do armazenamento local
/*tenta recuperar o valor associado á chave "high-score" do
aramazenamento locaç do navegador */
let highScore = localStorage.getItem("high-score") || 0;
/*se o localStorage retornar NULL (caso ele não exista), 
a variavel highscore sera definida como 0*/

// posição aleatoria entre 1 e 30 para a comida 
/*gera coordenadas aleatórias para a nova posição da comida */
const updateFoodPosition = () => {
    //retorna um numero de ponto flutuante pseudoaleatorio entre 0 e 1
    //*30: multiplica o número aleatório por 30 para obter um valor entre 0 e quase 30
    //math.floor(): Arredonda o resultado 
    //  para o número inteiro mais proximo (entre 0 e 29)
    //+1: adiciona 1 para garantir que as coordenadas de comida estejam entre 1 e 30.
    foodX = Math.floor(Math.random() *30 ) + 1;
    foodY = Math.floor(Math.random() *30) + 1;

    
}

//Função para lidar com o fim do jogo  
/*Função handleGameOver = quando a cobra colide consigo mesma 
ou com as paredes do tabuleiro */

const handleGameOver = () =>{
    clearInterval(setIntervalId);
    alert("game over!😥 Aperto OK para iniciar novamente...");
    location.reload();
}