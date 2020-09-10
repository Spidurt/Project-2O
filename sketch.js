var car, car2, car3, car4, wall, wall2, wall3, wall4;

var speed, weight, speed2, weight2, speed3, weight3, speed4, weight4;

var table, table2, table3, table4, table5, table6, table7; 
function setup() {
  createCanvas(3000,1400);
 wall = createSprite(2700, 100, 50, 150);
 wall.shapeColor = 80,80,80;

 car = createSprite(50, 100, 50, 50);
 car.shapeColor = "white";

 //

 wall2 = createSprite(2700, 300, 50, 150);
 wall2.shapeColor = 80,80,80;

 car2 = createSprite(50, 300, 50, 50);
 car2.shapeColor = "white";

 table = createSprite(1500, 800, 2980, 10);
 table2 = createSprite(1500, 920, 2980, 10);
 table3 = createSprite(1500, 1040, 2980, 10);
 table4 = createSprite(1500, 1160, 2980, 10);
 table5 = createSprite(1500, 1280, 2980, 10);
 table6 = createSprite(10, 1100, 10, 600);
 table7 = createSprite(2985, 1100, 10, 600);
 //

 wall3 = createSprite(2700, 500, 50, 150);
 wall3.shapeColor = 80,80,80;

 car3 = createSprite(50, 500, 50, 50);
 car3.shapeColor = "white";
 
 //

 wall4 = createSprite(2700, 700, 50, 150);
 wall4.shapeColor = 80,80,80;

 car4 = createSprite(50, 700, 50, 50);
 car4.shapeColor = "white";

 //speed in km/h
  speed = 80;
  
  // weight in KG;
  weight = 800;

  //

  //speed in km/h
  speed2 = 50;
  
  // weight in KG;
  weight2 = 1250;

  //

  //speed in km/h
  speed3 = 75;
  
  // weight in KG;
  weight3 = 1300;

  //

  //speed in km/h
  speed4 = 85;
  
  // weight in KG;
  weight4 = 750;

 

}

function draw() {
  background(0);  
  
 if(keyDown("enter"))
 {
   car.velocityX = speed;
 }

  if(car.x - wall.x <= wall.width/2 + car.width/2
    &&
    wall.x - car.x <= wall.width/2 + car.width/2
    &&
    car.y - wall.y <= wall.height/2 + car.height/2
    &&
    wall.y - car.y <= wall.height/2 + car.height/2)
    {

     car.velocityX = 0;
     wall.velocityX = 0;

     
    }

    /////////////////////////////////////////////////////////////////////////////////////////////

    if(car.x - wall.x <= wall.width/2 + car.width/2
      &&
      wall.x - car.x <= wall.width/2 + car.width/2
      &&
      car.y - wall.y <= wall.height/2 + car.height/2
      &&
      wall.y - car.y <= wall.height/2 + car.height/2)
 {
   textSize(50)
   text("113", 1500, 100)
   text("113", 2350, 1000)

   car.shapeColor = "yellow";
  
   car2.velocityX = speed2;
 }

  if(car2.x - wall2.x <= wall2.width/2 + car2.width/2
    &&
    wall2.x - car2.x <= wall2.width/2 + car2.width/2
    &&
    car2.y - wall2.y <= wall2.height/2 + car2.height/2
    &&
    wall2.y - car2.y <= wall2.height/2 + car2.height/2)
    {

     car2.velocityX = 0;
     wall2.velocityX = 0;

     
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if(car2.x - wall2.x <= wall2.width/2 + car2.width/2
      &&
      wall2.x - car2.x <= wall2.width/2 + car2.width/2
      &&
      car2.y - wall2.y <= wall2.height/2 + car2.height/2
      &&
      wall2.y - car2.y <= wall2.height/2 + car2.height/2)
 {
  textSize(50)
  text("69", 1500, 300)
  text("69", 2350, 1120)

  car2.shapeColor = "green";

  car3.velocityX = speed3;
 }

  if(car3.x - wall3.x <= wall3.width/2 + car3.width/2
    &&
    wall3.x - car3.x <= wall3.width/2 + car3.width/2
    &&
    car3.y - wall3.y <= wall3.height/2 + car3.height/2
    &&
    wall3.y - car3.y <= wall3.height/2 + car3.height/2)
    {

     car3.velocityX = 0;
     wall3.velocityX = 0;

     
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

    if(car3.x - wall3.x <= wall3.width/2 + car3.width/2
      &&
      wall3.x - car3.x <= wall3.width/2 + car3.width/2
      &&
      car3.y - wall3.y <= wall3.height/2 + car3.height/2
      &&
      wall3.y - car3.y <= wall3.height/2 + car3.height/2)
 {
  textSize(50)
  text("162", 1500, 500)
  text("162", 2350, 1240)

  car3.shapeColor = "yellow";
  
  car4.velocityX = speed4;
 }

  if(car4.x - wall4.x <= wall4.width/2 + car4.width/2
    &&
    wall4.x - car4.x <= wall4.width/2 + car4.width/2
    &&
    car4.y - wall4.y <= wall4.height/2 + car4.height/2
    &&
    wall4.y - car4.y <= wall4.height/2 + car4.height/2)
    {

     car4.velocityX = 0;
     wall4.velocityX = 0;

     if(car4.x - wall4.x <= wall4.width/2 + car4.width/2
      &&
      wall4.x - car4.x <= wall4.width/2 + car4.width/2
      &&
      car4.y - wall4.y <= wall4.height/2 + car4.height/2
      &&
      wall4.y - car4.y <= wall4.height/2 + car4.height/2)

      {
        text("120", 1500, 700)
        text("120", 2350, 1360)
        
        car4.shapeColor = "yellow";
      }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
  
  textSize(650)
  text("|" , 800, 1275 );
  text("|" , 1400, 1275 );
  text("|" , 2000, 1275 );

  textSize(75)
  
  //D = 113
  text("McLaren", 250, 50);
  //d= 69
  text("Lamborghini", 250, 250);
  //D=162
  text("Bugatti", 250, 450);
  //d =120
  text("Porche", 250, 650);

  text("McLaren", 250, 1000);
  text("Lamborghini", 250, 1120);
  text("Bugatti", 250, 1240);
  text("Porche", 250, 1360);

  text("800", 1050, 1000);
  text("1250", 1050, 1120);
  text("1300", 1050, 1240);
  text("750", 1050, 1360);

  if (car.x >= 1500)
{
  text("80", 1650, 1000)
}

if (car2.x >= 1500)
{
  text("50", 1650, 1120)
}

if (car3.x >= 1500)
{
  text("75", 1650, 1240)
}

if (car4.x >= 1500)
{
  text("85", 1650, 1360)
}

textStyle(BOLD)
  text("Car Name", 250, 880);
  text("Weight", 1050, 880);
  text("Speed", 1650, 880);
  text("Deformation", 2350, 880);


  drawSprites();
}
