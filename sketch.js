//for creating sprite for a wall and thickness
var thickness;
var wall;

//for creating sprite for bullet, speed and weight
var bullet;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

//for setting up randonm values for speed, weight and thickness
speed = random(223,321);
wight = random(30,52);
thickness = (22,83);

//for the car sprite
bullet = createSprite(50,200,100,29);

//for creating the wall and also giving the wall a color
wall = createSprite(1200,300,thickness,height/2);
wall.shapeColor = (80,80,80);

//for giving the car a velocity basically a speed
bullet.velocityX = speed;

//for giving the bullet a color
bullet.shapeColor = color(255);


}

function draw() {
  background(0);  
  

//for the collided funciton of the wall,the bullet and for the damage instruction
if(hasCollided (bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10)
  {

      wall.shapeColor = color(255,0,0);

  }

  if(damage < 10)
  {

    wall.shapeColor = color(0,255,0);

  }


}

  drawSprites();
  
}

//for calling the function collide
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x +lbullet.width;

  wallLeftEdge = lwall.x;

if (bulletRightEdge>=wallLeftEdge)   
{

  return true
}
 
return false;
  
}
