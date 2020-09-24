var car_img, raceTrack_img;
var car, collider;
var points, eligibleForPoints;
var endLine, pointLine;

function preload(){
  car_img = loadImage("car.png");
  raceTrack_img = loadImage("raceTrack.png");
}

function setup() {
  createCanvas(600, 400);
  car = createSprite(425, 105);
  car.rotation = 180;
  car.addImage(car_img);
  car.scale = 0.075;
  
  collider = createSprite(300, 200, 350, 100);
  collider.visible = false;

  eligibleForPoints = false;
  points = 0;

  pointLine = createSprite(65, 200, 150, 10);
  pointLine.visible = false;

  endLine = createSprite(390, 300, 10, 100);
  endLine.visible = false;
}

function draw() {
  background(0, 75, 0)
  background(raceTrack_img);
  drawSprites();

  fill("white");
  textSize(15);
  text("Points: " + points, 10, 20);

  car.collide(collider);

  if(keyDown("up")){
    car.addSpeed(0.1, car.rotation);
  }
  if(keyDown("right")){
    car.rotation+=2;
  }
  if(keyDown("left")){
    car.rotation-=2;
  }
  if(keyDown("shift")){
    car.velocityX *= 0.97;
    car.velocityY *= 0.97;
  }
  car.velocityX *= 0.98;
  car.velocityY *= 0.98;

  if(car.isTouching(pointLine)){
    eligibleForPoints = true;
  }

  if(car.isTouching(endLine) && eligibleForPoints === true){
    points++;
    eligibleForPoints = false;
  }
}