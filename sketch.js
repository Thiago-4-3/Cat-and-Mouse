var cat, catImg;
var mouse, mouseImg;
var cat2, cat2Img;
var cat3, cat3Img;
var catRunning, catRunningImg;
var garden, gardenImg;
function preload() {
mouseImg = loadImage("mouse1.png"); 
mouse2Img = loadImage("mouse2.png");
catImg = loadImage("cat1.png");
cat2Img = loadImage("cat2.png")
cat3Img = loadImage("cat3.png")
catRunningImg = loadImage("cat4.png")
gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
  cat = createSprite(650,100);
  jerry =  createSprite(150,100);
}

function draw() {

    background.addAnimation("gardenImg");
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
     cat.addAnimation("catLastImage");
     cat.changeAnimation("catLastImage");   
    }
    if(cat.isTouching(jerry)){  
    cat.addAnimation("catRunning", catRunningImg);
    cat.changeAnimation("catRunning");
    }
    drawSprites();
}

//I could not load the live to check if the code was working but from what i read It seems to be ok

function keyPressed(){
if(keyCode === LEFT_ARROW){
cat.velocityX = -5;
cat.addAnimation("cat2", catImg2);    
cat.changeAnimation("cat2");
}



}
