var fixedRect, movingRect;

function setup() {
  createCanvas(1000,800);
  fixedRect=createSprite(400, 200, 50, 100);
  movingRect=createSprite(600,200,100,50);
  movingRect.shapeColor= "blue";
  fixedRect.shapeColor="blue";

  movingRect.debug= true;
  fixedRect.debug=true;
}

function draw() {
  background(0);  
  drawSprites();

  movingRect.velocityX= 3;

  movingRect.x= mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
fixedRect.shapeColor= "yellow";
movingRect.shapeColor="yellow";
  }else{
fixedRect.shapeColor="blue";
movingRect.shapeColor="blue";
  }

drawSprite();
}