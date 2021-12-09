var starImg,bgImg;
var star, starBody;
var fada,imgFada;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

}

function setup() {
    createCanvas(800, 750);
   
   

    fada = createSprite(400,325);
    fada.addAnimation("fada",imgFada);
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);


if(keyDown(LEFT_ARROW)){
fada.x = fada.x + -3;
}

if(keyDown(RIGHT_ARROW)){
    fada.x = fada.x + 3;
}
	
if(keyDown(DOWN_ARROW)){
 Matter.Body.setStatic(starBody,false);
}


if(star.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
}



    drawSprites();
}
