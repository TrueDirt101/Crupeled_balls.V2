var PaperIMG,canIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  canIMG=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 400);
  
  can4=createSprite(665, 280, 10,10);
	can4.addImage(canIMG);
	can4.scale=0.7


	engine = Engine.create();
	world = engine.world;

ground = new Floor (400,400,800,30)
ball = new paper (100,380,40)
can = new Trashcan (580,280,20,170)
can2 = new Trashcan (750,280,20,170)
can3 = new Trashcan (665,370,180,20)

	Engine.run(engine);
  

	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ball.display();
  can4.display();
  ground.display();

  
}

function keyPressed()

{
 if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y: -400})

 }

}


