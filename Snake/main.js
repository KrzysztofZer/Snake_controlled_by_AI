var offsetX = 15;
var offsetY = 15;
var diameter = 30;
var score = 0;

var snake;
var wall;

function setup(){
	createCanvas(640, 480);
    snake = createSprite(offsetX,offsetY,diameter,diameter);
    createWall();
    snake.shadowColor = color(255)
    fill(255);
}

function draw(){
        background(50);
    text(score,620,15);   
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
    checkValidation();
}
    
if (keyCode === DOWN_ARROW && offsetY<=450){
    offsetY = offsetY+30;
snake.position = createVector(offsetX,offsetY);
    checkValidation();
}
    
if (keyCode === UP_ARROW && offsetY>=30){
        offsetY = offsetY-30;
snake.position = createVector(offsetX,offsetY);
    checkValidation();
}}

function checkValidation (){
       if (snake.position.x <= wall.position.x+30&&snake.position.x >= wall.position.x-30&&snake.position.y <= wall.position.y+30&&snake.position.y >= wall.position.y-30){
           wall.remove();
           score = score+1;
           createWall();
}}

function createWall (){
        wall = createSprite(Math.floor((Math.random() * 590) + 30),Math.floor((Math.random() * 430) + 30),diameter,30);
}
