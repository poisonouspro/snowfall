var backgroundImg
var snow1,snow2,snow3,snow4,snow5,snow6,snow7;
var snowImg

function preload(){
 backgrImg = loadImage("snow3.jpg");
 snowImg = loadImage("snow5.webp");
}

if(snow1.isTouching(Edges))
snow1.Y = 1;


function setup() {
  createCanvas(1200,1200);
  createSprite(400, 200, 50, 50);
  background(backgrImg);
  snow1 = createSprite(100,1);
  snow2 = createSprite(30,1);
  snow3 = createSprite(600,1);
  snow4 = createSprite(200,1);
  snow5 = createSprite(700,1);
  snow6 = createSprite(500,1);
  snow7 = createSprite(800,1);

  snow1.addImage(snowImg);
  snow2.addImage(snowImg);
  snow3.addImage(snowImg); 
  snow4.addImage(snowImg);
  snow5.addImage(snowImg);
  snow6.addImage(snowImg);
  snow7.addImage(snowImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  snow1.velocityY = 1
  snow2.velocityY = 2
  snow3.velocityY = 1.6
  snow4.velocityY = 3
  snow5.velocityY = 1.9
  snow6.velocityY = 1.4
  snow7.velocityY = 1.8
  
  snow1.scale = 0.3;
  snow2.scale = 0.3;
  snow3.scale = 0.3;
  snow4.scale = 0.3;
  snow5.scale = 0.3;
  snow6.scale = 0.3;
  snow7.scale = 0.3;
  createEdgeSprites();


}
