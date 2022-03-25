var bedroom, bedroomImg, livingr, livingrImg, kitchen, kitchenImg;
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;
var marry1, marryImg1, door1, door1Img, Q1, boyQ, boyQImg, clockQ, doorQ;

function preload(){
    bedroomImg = loadImage("assets/darkroom.jpeg");
    marryImg1 = loadImage("assets/G2.png");
    door1Img = loadImage("assets/closedroom.png");

    boyQImg = loadImage("assets/boyQ.png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bedroom = createSprite(width/2,height/2,width,height);
    bedroom.addImage("br",bedroomImg);
    bedroom.scale = 4;

    marry1 = createSprite(width/2 - 500, height - 220);
    marry1.addImage("girl1", marryImg1);
    marry1.scale = 0.5;

    door1 = createSprite(width/2 + 500, height - 320);
    door1.addImage("door1", door1Img);
    door1.scale = 0.3;

    boyQ = createSprite(width/2 - 300, height/2 + 10,120,150);
    boyQ.addImage("boy", boyQImg);
    boyQ.visible = false;

    }

function draw() {
    background("black");

    /*if (gameState === PLAY){

        bedroom.velocityX=-3;
    }

    if (bedroom.x < width/2 - 100){
        bedroom.x = width/2;
    }*/

    if (keyIsDown(RIGHT_ARROW)){
        marry1.x = marry1.x + 7;
    }

    if (marry1.isTouching(door1)){
        quiz1();
    }


    drawSprites();
    
}


function quiz1(){

    background("white")
    marry1.visible = false;
    door1.visible = false;
    bedroom.visible = false;
    textSize (50);
    fill ("black");
    text ("Complete The Quiz To Open The Door", width/2 - 350, height/2 - 200);
    fill ("red");
    text ("What has Hands but cannot Clap?", width/2 - 300, height/2 - 100);

    //Q1 = new Quiz();

    //options
    
    //boyQ.mouseClicked(boyQclicked);
    boyQ.visible = true;
    if (mousePressedOver(boyQ)){
        fill("purple");
        textSize(25);
        text("Wrong Answer",  width/2 - 350, height - 200)
    }

    /*clockQ = createImg("assets/clockQ.png");
    clockQ.position(width/2, height/2 + 10);
    clockQ.size(120,100);
    
    doorQ = createImg("assets/doorQ.png");
    doorQ.position(width/2 + 300, height/2 + 10);
    doorQ.size(100,150);*/

    }

function boyQclicked() {

   
        fill("purple");
        textSize(25);
        text("Wrong Answer",  width/2 - 350, height - 200)
  

    /*else if (doorQ.mousePressedOver()){
        text("Wrong Answer",  width/2 - 350, height - 200)
    }

    else {
        text("Correct Answer",  width/2 - 350, height - 200)
    }*/
}