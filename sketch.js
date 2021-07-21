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
	
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

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
    star=new star(200,200,50,50);
	star2=new star(300,200,30,30);
    star3=new star(400,200,10,10);
	star4=new star(500,200,20,20);
	star5=new star(600,200,15,15);
	star6=new star(700,200,20,20);
	star7=new star(800,200,40,40);
	star8=new star(100,200,20,20);
	star9=new star(50,200,10,10);

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

	

