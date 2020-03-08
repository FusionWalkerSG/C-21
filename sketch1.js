var frec,mrec;

function setup() {
  createCanvas(1200,800);
  frec = createSprite(400,100,10,80);
  frec.shapeColor="red";
  frec.velocityY=5;
  mrec = createSprite(400,800,30,10);
  mrec.shapeColor="red";
  mrec.velocityY=-5;
}
function draw(){
    background(20,10,50);
    bounceOff(mrec,frec);
    drawSprites();
}

function bounceOff(object1,object2){
    if (object1.x-object2.x<object2.width/2+object1.width/2 
        && object2.x-object1.x<object2.width/2+object1.width/2){
            object1.velocityX=object1.velocityX*(-1);
            object2.velocityX=object2.velocityX*(-1);  
        }
if (object1.y-object2.y<object2.height/2+object1.height/2 
    && object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);  
    }
}