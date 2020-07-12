var car,wall,speed,weight; 
function setup() { 
  createCanvas(1600,400); 
  speed = random(55,90); 
  weight = random (400,1500); 
  car = createSprite(50,200,50,50); 
  wall = createSprite(1500,200,60,height/2); 
  wall.shapeColor = (80,80,80); 
  car.velocityX=speed;
}
  function draw() { 
    background(255,255,255); 
    if(car.x-wall.x<car.width/2+wall.width/2 && 
      wall.x-car.x<car.width/2+wall.width/2 ){ 
      var deform = 0.5*weight*speed*speed/22500;
      car.velocityX=0; }
    if(deform<180){ 
      car.shapeColor = color(255,0,0); }
    if (180>deform && deform>100){ 
      car.shapeColor= color(230,230,0); }
    if(deform>180){ 
      car.shapeColor=(0,255,0); } 
      drawSprites();
    } 