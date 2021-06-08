
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const bobObject= Matter.bob;
const Constraint= Matter.Constraint;

function preload(){

}
	


function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
    roof= new Roof (100,50,20,20);
	bobObject1=new Bob(100,30);
	bobObject2=new Bob(100,30);
	bobObject3=new Bob(50,30);
	bobObject4=new Bob(200,30);
	bobObject5=new Bob(150,30);
	rope1=new Rope(bobObject1.body,roof.body,-80,0);
	rope2=new Rope(bobObject2.body,roof.body,90,0);
	rope3=new Rope(bobObject3.body,roof.body,-80,0);
	rope4=new Rope(bobObject4.body,roof.body,80,0);
	rope5=new Rope(bobObject5.body,roof.body,80,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,
								{x:-50,y:-45});
	
		  }
	}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



