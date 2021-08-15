var sea,sea_moving,edges;
var ship,ship_moving;
var sea2;

function preload(){
sea_moving = loadImage("sea.png")
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")



}

function setup(){
 createCanvas(600,600)

 ship = createSprite(200,215,200,200);
 

 
 sea = createSprite(0,300,900,10);
sea2 = createSprite(300,415,100,10);
 sea.addImage(sea_moving);
sea.velocityX=-5;




sea.scale=0.5;
sea2.scale=0.5;

}

function draw() {
  background("blue")



  if(sea.x<0){
    sea.x=200
  }

 
ship.collide(sea2);
drawSprites()

}