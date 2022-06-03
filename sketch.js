
//Não consegui rotacionar o braço dele

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var angle;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcher = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 0
  player= new Player(150, 240, 80, 150, angle);
}

function draw() {
  background(backgroundImg);
   

  //exibir a imagem do jogador usando a função image()  
  push();
  rotate();
  imageMode(CENTER);
  image(playerimage,150, 240, 80, 150);
  pop();  

   push();
   rotate(angle);
   image(playerArcher,175, 160, 80, 100);
   pop();

  
  //exibir a imagem da base do jogador usando a função image()
   image(baseimage,70,300,200,200);
   noFill();

  Engine.update(engine);

  player.display();
  playerArcher.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);



}
