var frec,mrec,ob1,ob2,ob3,ob4,ob5;

function setup() {
  createCanvas(1200,800);
  frec = createSprite(600,400,10,80);
  frec.shapeColor="red";
  mrec = createSprite(200,200,30,10);
  mrec.shapeColor="red";
  ob1 = createSprite(300,460,10,10);
  ob1.shapeColor="yellow"
  ob2 = createSprite(300,450,10,10);
  ob2.shapeColor="yellow"
  ob3 = createSprite(300,550,10,10);
  ob3.shapeColor="yellow"
  ob4 = createSprite(300,500,10,10);
  ob4.shapeColor="yellow"
  ob5 = createSprite(300,400,10,10);
  ob5.shapeColor="yellow"
}

function draw() {
  background("black");
  console.log(mrec.x-frec.x);
  if (isTouching(ob1,mrec)){
    ob1.shapeColor="green";
    mrec.shapeColor="green";
  }
  else {
    ob1.shapeColor="yellow";
    mrec.shapeColor="red";
  }
  mrec.x=World.mouseX;  
  mrec.y=World.mouseY;  
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2 
    && object2.y-object1.y<object2.height/2+object1.height/2){
     return true;
  }
  else {
    return false;
  }
}