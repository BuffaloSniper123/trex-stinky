var fate
var sus_dino
var bigboi
var bigboiImg
var trex ,trex_running;
var msmondol ,groundImage
var drink_ur_milk
var stinky
var stinky1
var stinky2
var stinky3
var stinky4
var stinky5
var cactus
var cloudies
var gameover
var gameoverImg
var restart
var restartImg
var gamestate="liv"
var twentyk
var fortyk
var bounce
var died
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
  bigboiImg=loadImage("cloud.png")
  stinky=loadImage("obstacle1.png")
  stinky1=loadImage("obstacle2.png")
  stinky2=loadImage("obstacle3.png")
  stinky3=loadImage("obstacle4.png")
  stinky4=loadImage("obstacle5.png")
  stinky5=loadImage("obstacle6.png")
sus_dino=loadAnimation("trex_collided.png")
gameoverImg=loadImage("gameOver.png")
restartImg=loadImage("restart.png")
twentyk=loadSound("cool.mp3")
fortyk=loadSound("uhuhhh.mp3")
bounce=loadSound("bounce.mp3")
died=loadSound("ded.mp3")


}

function setup(){
  fate=0
  createCanvas(600,200)
  msmondol=createSprite(200,180,400,5)
  msmondol.addImage(groundImage)
  
  mama=createSprite(200,190,400,10)
  mama.visible= false
 trex= createSprite(50,150,25,100)
 trex.addAnimation("run",trex_running)
trex.addAnimation("die",sus_dino)

gameover=createSprite(300,100)
gameover.addImage(gameoverImg)
restart=createSprite(300,150)
restart.addImage(restartImg)
gameover.scale=0.5
restart.scale=0.5

 trex.scale=0.5
// trex.debug=true
trex.setCollider("circle",0,0,40)




 var urmom=Math.round(random(69,420))
 console.log(urmom)
 //creating groups OwO
 cactus=createGroup()
 cloudies=new Group()
 


}

function draw(){
  background("Coral")
  //display score
 text("Score: "+fate,450,50)
 

 if(gamestate=="liv"){
   //making restart and gameover invis
gameover.visible=false
restart.visible=false


  if(fate==20000){
    twentyk.play()
  }
  if(fate==40000){
    fortyk.play()
  }




   //move ground
   msmondol.velocityX=-2
   //increase score
   fate=fate+Math.round(getFrameRate()/0.2)

   //adding gravity
   trex.velocityY=trex.velocityY+1
   //jump
   if(keyDown("space") && trex.collide(mama)){
    trex.velocityY=-15
    bounce.play()
  }
  // i am make ground inf
  if(msmondol.x<0){
    msmondol.x=200
  }
  //makee cloud and cactus
  bebe()
  saisha_bad()
  //check colision
  if(trex.isTouching(cactus)){
gamestate="ded"
died.play()
  }

 }
else if(gamestate=="ded"){
  //Za warudo
  msmondol.velocityX=0
  cactus.setVelocityXEach(0)
  cloudies.setVelocityXEach(0)
cactus.setLifetimeEach(-1)
cloudies.setLifetimeEach(-1)
trex.changeAnimation("die")

   //making restart and gameover visiblé
   gameover.visible=true
   restart.visible=true
   








}








 

 trex.collide(mama)

 drawSprites()
}

function bebe(){
  if(frameCount%75==0){
    bigboi=createSprite(610,10,40,10)
 cloudies.add(bigboi)




    bigboi.lifetime=234
    bigboi.addImage(bigboiImg)
    bigboi.velocityX=-3
    bigboi.y=Math.round(random(10,100))
    //fixing trex uwu
    trex.depth=bigboi.depth+1
    console.log("ms.mondol stinky")
  }
}
function saisha_bad(){
  if(frameCount%55==0){
    drink_ur_milk=createSprite(600,165,10,40)



    cactus.add (drink_ur_milk)
    drink_ur_milk.velocityX=-6
    var burger_king= Math.round(random(1,6))
    switch(burger_king){
      case 1:drink_ur_milk.addImage(stinky)
      break;
      case 2:drink_ur_milk.addImage(stinky1)
      break;
      case 3:drink_ur_milk.addImage(stinky2)
      break;
      case 4:drink_ur_milk.addImage(stinky3)
      break;
      case 5:drink_ur_milk.addImage(stinky4)
      break;
      case 6:drink_ur_milk.addImage(stinky5)
      break;
      default:break;
    }
drink_ur_milk.scale=0.5
drink_ur_milk.lifetime=300







  }
}













