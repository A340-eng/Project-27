const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;	
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    bobObject1 = new Bob(100, 80, 50);
	bobObject2 = new Bob(200, 80, 50);
	bobObject3 = new Bob(300, 80, 50);
	bobObject4 = new Bob(400, 80, 50);
	bobObject5 = new Bob(500, 80, 50);
	roof = new Roof(350,50, 550, 50);
	rope1 = new Rope(bobObject1.body, roof.body, 20,0);
	rope2 = new Rope(bobObject2.body, roof.body, 20,20);
	rope3 = new Rope(bobObject3.body, roof.body, 20,40);
	rope4 = new Rope(bobObject4.body, roof.body, 20,50);
	rope5 = new Rope(bobObject5.body, roof.body, 20,60);
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background('red'); 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}