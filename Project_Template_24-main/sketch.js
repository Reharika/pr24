const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var playerArcher,playerArrow;
var arrow;
var computerArcher;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

 
  //Create Player Archer Object
  


  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computerArcher = new ComputerArcher(
    width - 300,
    computerBase.body.position.y - 153,
    50,
    180
  );

  playerBase = new PlayerBase(200, random(450, height - 300), 180, 150);
  playerArcher = new PlayerArcher(200, playerBase.body.position.y - 153, 50, 180);


  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  playerArrow = new PlayerArrow(130,50,450,78);

  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  

  computerBase.display();
  
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  playerArrow.display();
  playerArcher.display();
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArcher.body.angle);

  }
}



