const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bike;
var ground;
var backgroundImg;
function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
} 

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    bike = new Bike(60,370,200,160);
    ground = new Ground(400,460,800,20);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    bike.display();
    ground.display();
    bike.velocity.x = -3;
    drawSprites();
}
