const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,ground1,ball;
var ball2;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;
  ground1=new Ground(400,390,800,10);
  
ball=new Box(200,200,50,50);
ball2=new Box(150,150,50,50);
}

function draw() {
  background( "black");
  Engine.update(engine)
  ground1.display();
ball.display();
ball2.display();
}