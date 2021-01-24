
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ground = new Ground(100,390,1300,20)
  Dustbin = new dustbin(600,370,200,100)
  paper = new Paper (100,100,20,20)
}


function draw() {
  rectMode(CENTER);
  background(175);
  text (mouseX +":" +mouseY,100,50)
  ground.display();
  Dustbin.display();
  paper.display();
 // drawSprites();
 
 }

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce (paper.body,paper.body.position,{ x:50,y:-50})
  }
}