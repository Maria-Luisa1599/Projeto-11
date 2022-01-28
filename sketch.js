var pessoa, pessoaImg;
var fundo, fundoImg;
var coin, coinImg;

function preload(){
  //imagens pré-carregadas
  pessoaImg = loadAnimation("Runner-1.png", "Runner-2.png");
  fundoImg = loadAnimation("path.png");
  coinImg = loadAnimation("coin.png");
}

function setup(){
  createCanvas(260,600);
  //crie sprite aqui
  pessoa = createSprite(170, 550);
  pessoa.addAnimation("correndo", pessoaImg);
  pessoa.scale = 0.05;

  fundo = createSprite(130,200,400,20);
  fundo.addAnimation("fundo", fundoImg);

  coin =  createSprite(50,10);
  coin.addAnimation("coin", coinImg);
  coin.scale = 0.3;
  coin.velocityY = 8

  var rand =  Math.round(random(1,100))
  console.log(rand)
}

function draw() {
  background(0);
  pessoa.x = World.mouseX;
  
  fundo.velocityY = fundo.velocityY + 0.05
  if (fundo.velocityY = 8){
    fundo.velocityY = fundo.velocityY + 0.05
  }

  if(fundo.y > 600){
    fundo.y = fundo.width/2;
 
  }
  
  if(pessoa.isTouching(coin)){
   coin.visible = false;
  }

  fundo.depth = pessoa.depth;
  pessoa.depth = pessoa.depth +1 ;

  fundo.depth = coin.depth;
  spawnCoin();
  drawSprites();

}
function spawnCoin(){
  if (frameCount % 60 == 10){
   coin = createSprite(50,10);
   coin.addAnimation("coin", coinImg);
   coin.velocityY = 11;
   coin.y = Math.round(random(150, 10));
   coin.x = Math.round(random(10, 280))
   coin.scale = 0.3;
  }
}