var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,50);
  car.shapeColor = "black";

   wall = createSprite(730,200,50,height/2);
   wall.shapeColor = "white";
    speed = random(55,90);
     weight = random(400,1500);

      car.velocityX = speed;

}

function draw() {
  background("lightblue");
  
  if (wall.x-car.x < (car.width/2+wall.width/2)){
    car.velocityX = 0;
    var deformation= 0.5 * weight * speed * speed /22509;
     if (deformation>100) {
       car.shapeColor=color(255,0,0);
     }
     if (deformation<100 && deformation>180) {
       car.shapeColor=color(230,230,0);
     }
     if (deformation<180) {
       car.shapeColor=color(0,255,0); 
     }
  } 






  drawSprites();
}