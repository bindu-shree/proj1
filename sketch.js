var PLAY = 1;
var END = 0;
var gameState = PLAY;

var luffy;

var pirate1,pirate2;
var coin;

var treasure=0;

function preload(){

    

}

function setup() {
 createCanvas(800,400);

 //stroke=("black");
 //desert = createSprite(0,0,800,400);
 luffy = createSprite(100,200,35,35);
 luffy.shapeColor="green";


 pirate1Group = new Group();
 pirate2Group = new Group();
 coinGroup = new Group();
}

function draw() {
 background(0);
 if(gameState === PLAY){

   // desert.velocityX = -5;
   // if (desert.x < 0){
   //     desert.x = desert.width/2;
   // }
    luffy.y = World.mouseY

    var select_object = Math.round(random(1,3));

    if (World.frameCount % 100 ==  0){
        switch(select_object){
            case 1: pirate1();
            break ; 
            case 2: pirate2();
            break ; 
            case 3: coin();
            break ;
            default:break;
        }
    }
    if(luffy.isTouching(pirate1Group)){
        pirate1Group.destroyEach();
        gameState=END;
    }
    if(luffy.isTouching(pirate2Group)){
        pirate2Group.destroyEach();
        gameState=END;
    }

    if (gameState === END){
        luffy.destroy();
        pirate1Group.destroyEach();
        pirate2Group.destroyEach();
        coinGroup.destroyEach();
    }
    if(luffy.isTouching(coinGroup)){
        coinGroup.destroyEach();
        treasure=treasure+1;
    }
 }


 drawSprites();
 text("Treasure: "+treasure,700,50 );  
}

function pirate1(){
    var pirate1 = createSprite(800,Math.round(random(20,370)))
    pirate1.shapeColor="red";
    pirate1.velocityX = -5;
    pirate1.lifetime=350;
    pirate1Group.add(pirate1) 
}
function pirate2(){
    var pirate2 = createSprite(800,Math.round(random(20,370)))
    pirate2.shapeColor="red";
    pirate2.velocityX = -5;
    pirate2.lifetime=350;
    pirate2Group.add(pirate2);  
}
function coin(){
    var coin = createSprite(800,Math.round(random(20,370)))
    coin.shapeColor="yellow";
    coin.velocityX = -5;
    coin.lifetime=350;
    coinGroup.add(coin); 
}
                                                                   