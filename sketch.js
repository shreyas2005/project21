var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed=random(200,233);    //random speed for random deformation of car
  weight=random(30,52);  //random weight for random deformation of car

  bullet=createSprite(50,200,50,20);
  wall=createSprite(1200,200,thickness,height/2);
   
  bullet.shapeColor="BLACK";
  wall.shapeColor=color(80,80,80); //22 to 83
  bullet.velocityX=2;   //giving random speed to the car

thickness=random(22,83);

}

function draw() {
  background(255,255,255);  
 if (colide_liblary(wall,bullet)){

  bullet.velocityX=0;
 var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness); //deformation formula storing in an variable
 
 if(deformation>10){                  //more the defomation more the danger for pasenger "the red color indicate high deformatiion rate"
 wall.shapeColor=color(255,0,0);
 }

 if(deformation<10 )  { // moderate amount of deformation "the yellow color indicate moderate deformatiion rate"
 wall.shapeColor=color(0,255,0);
 }
 }
  

  drawSprites();
}
