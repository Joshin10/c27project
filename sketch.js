
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 bob1=new bob(300,400,40,40)
 bob2=new bob(350,400,40,40)
 bob3=new bob(400,400,40,40)
 bob4=new bob(450,400,40,40)
 bob5=new bob(500,400,40,40)
 

 ground=new ground(200,600,300,10)
 var option={
	 BodyA:bob.Body,
	 BodyB:Constraintroof.Body,
	 stiffness:0.2,
	 length:12

 }
 var chain=Constraint.create(option)
 world.add(world.chain)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 constraintroof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

}



