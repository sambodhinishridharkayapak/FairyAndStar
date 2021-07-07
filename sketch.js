var  fairyImg, bgImg;
var fairy , fairyVoice;
var land;
var star, star2,star3, star4, star5, star6, star7, star8,star9, star10;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	



	//star = createSprite(650,30);
	//star.addImage(starImg);
	//star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;
     
	
	Engine.run(engine);
    star=new stars(200,200,50,50);
	star2=new stars(300,200,30,30);
    star3=new stars(400,200,10,10);
	star4=new stars(500,200,20,20);
	star5=new stars(600,200,15,15);
	star6=new stars(700,200,20,20);
	star7=new stars(800,200,40,40);
	star8=new stars(100,200,20,20);
	star9=new stars(50,200,10,10);

	land=new ground(400,740,800,20);
	land.visible =false;

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  

  //console.log(star.y);
  fairy.display();
  star.display();
  star2.display();
  star3.display();
  star4.display();
  star5.display();
  star6.display();
  star7.display();
  star8.display();
  star9.display();
  land.display();

}
function keyPressed()
{
	

	if(keyCode===37)
	{
		fairy.x = fairy.x - 5;
	}
	if(keyCode===39)
	{
		fairy.x = fairy.x + 5;
	}
	
}

	

