const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2,ground,pig1,stick1,bird

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES)
    box1 = new Box(1000,750,50,50);
    box2=  new Box(800,750,50,50)
    ground= new Ground()
    pig1= new Pig(900,750,50,50);
    stick1= new Stick(900,700,300,20,0)
    box3= new Box(800,650,50,50)
    box4= new Box(1000,650,50,50)
    pig2= new Pig(900,650,50,50)    
    stick2= new Stick(900,600,300,20,0)
    box5= new Box(900,550,50,50)    
    bird= new Bird(600,600,50,50)
    stick3= new Stick(850,550,100,20,-45)
    stick4= new Stick(930,550,85,20,45)
}


function draw(){
    background(0);
    text(mouseX+","+mouseY,mouseX,mouseY)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    stick1.display();
    box3.display();
    box4.display();
    pig2.display();
    stick2.display();
    box5.display();
    bird.display();
    stick3.display();
    stick4.display();
}