var Ground;
var ball1;
var dust1,dust2,dust3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	Ground = new ground(600,600,1200,20);

	dust1= new dustbin(1100,530,20,120);
	dust2= new dustbin(900,530,20,120);
	dust3=new dustbin(1000,580,180,20);

    ball1= new ball(200,200,30);
   


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ellipseMode(RADIUS);
  ball1.display();

  rectMode(CENTER);
  Ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
 
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:30,y:-33})
}
}

