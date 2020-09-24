var movingRect,fixedRect


function setup() {
  createCanvas(1200,600);
 movingRect= createSprite(400, 200, 50, 50);
  fixedRect=createSprite(200,200,50,90);
  movingRect.velocityY=-4;
  fixedRect.velocityY=4;
}

function draw() {
  background(0);
  movingRect.x=World.mouseX; 
  movingRect.y=World.mouseY; 
 
   bounceOff(movingRect,fixedRect);  
  drawSprites();
}
function bounceOff(){
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
     ){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    } 

    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
      fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 
       ){
        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);
       }
}