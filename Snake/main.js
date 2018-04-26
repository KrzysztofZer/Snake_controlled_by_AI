var offsetX = 15;
var offsetY = 15;
var diameter = 30;

var snake;
var wall1;

function setup(){
	createCanvas(640, 480);
  //  ellipse(offsetX, offsetY, 30, 30);
    snake = createSprite(offsetX,offsetY,diameter,diameter);
    wall1 = createSprite(105,15,diameter,30);
    snake.shadowColor = color(255)
    fill(255);

}
function draw(){
        background(50);


   
    drawSprites();


}

function keyPressed(){
if (keyCode === RIGHT_ARROW && offsetX<=610){
offsetX = offsetX+30;
snake.position = createVector(offsetX, offsetY);
checkValidation();

}

if (keyCode === LEFT_ARROW && offsetX>=30){
    offsetX = offsetX-30;
snake.position = createVector(offsetX, offsetY);
}
    
if (keyCode === DOWN_ARROW && offsetY<=450){
    offsetY = offsetY+30;
snake.position = createVector(offsetX,offsetY);
}
    
if (keyCode === UP_ARROW && offsetY>=30){
        offsetY = offsetY-30;
snake.position = createVector(offsetX,offsetY);
}
}

function checkValidation (){
//    print(snake.position.x);
//    print(wall1.position.x);
       if (snake.position.x === wall1.position.x){
           print("test");
           wall1.remove();
       }           
}
