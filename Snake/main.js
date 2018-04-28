var offsetX = 15;
var offsetY = 15;
var diameter = 30;
var score = 0;
var snakeDiraction = 'r';
var time =0;
var speed = 100;

var snake = [];
var wall;

function setup(){
	createCanvas(630, 480);
    snake.push(createSprite(offsetX,offsetY,diameter,diameter));
    createWall();
    snake[0].shadowColor = color(255)
    fill(255);
    
    //check if mobile and add buttons if it is
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//document.getElementById('mobile').innerHTML = "<table><tr><th></th><th><input id=\"UP\" type=\"button\" value=\"UP\" onclick=\"mobileUp();\"/></th><th></th></tr><tr><td><input id=\"LEFT\" type=\"button\" value=\"LEFT\" onclick=\"mobileLeft();\" /></td><td><input id=\"DOWN\" type=\"button\" value=\"DOWN\" onclick=\"mobileDown();\" /></td><td><input id=\"RIGHT\" type=\"button\" value=\"RIGHT\" onclick=\"mobileRight();\" /></td></tr></table>"
$("body").append("<table><tr><th></th><th><input id=\"UP\" type=\"button\" value=\"UP\" onclick=\"mobileUp();\"/></th><th></th></tr><tr><td><input id=\"LEFT\" type=\"button\" value=\"LEFT\" onclick=\"mobileLeft();\" /></td><td><input id=\"DOWN\" type=\"button\" value=\"DOWN\" onclick=\"mobileDown();\" /></td><td><input id=\"RIGHT\" type=\"button\" value=\"RIGHT\" onclick=\"mobileRight();\" /></td></tr></table>");
    }


}
                        

function draw(){
        background(50);
    text(score,610,15);   
    drawSprites();
           if (millis() - time >= speed)
    {
    snakeMoves();
    time = millis();
    }
}

function keyPressed(){
if (keyCode === RIGHT_ARROW&& snakeDiraction!='l'){
    snakeDiraction = 'r';
}

if (keyCode === LEFT_ARROW&& snakeDiraction!='r'){
        snakeDiraction = 'l';

}
    
if (keyCode === DOWN_ARROW&& snakeDiraction!='u'){
        snakeDiraction = 'd';
}
    
if (keyCode === UP_ARROW&& snakeDiraction!='d'){
        snakeDiraction = 'u';
}}

function checkValidation (){
       if (snake[0].position.x <= wall.position.x+30&&snake[0].position.x >= wall.position.x-30&&snake[0].position.y <= wall.position.y+30&&snake[0].position.y >= wall.position.y-30){
           wall.remove();
           score = score+1;
           createWall();
           addSnake();
}
if (snake.length>4){
    for (var i=5; i<snake.length; i++){
         if (snake[0].position.x <= snake[i].position.x+15&&snake[0].position.x >= snake[i].position.x-15&&snake[0].position.y <= snake[i].position.y+15&&snake[0].position.y >= snake[i].position.y-15){
             snakeEnd();
         }
    }
}
}

function createWall (){
        wall = createSprite(Math.floor((Math.random() * 590) + 30),Math.floor((Math.random() * 430) + 30),diameter,30);
}

function addSnake(){
    snake.push(createSprite(-60,-60,diameter,diameter));
        snake[snake.length-1].shadowColor = color(255);
        fill(255);
}

function snakeEnd(){
    score =0;
    for (var i = snake.length-1; i>0;i--){
        snake[i].remove();
        snake.pop();
    }    
}
//Snake moving right
function moveRight(){
    if(snake[0].position.x>614){
        offsetX = 15;
        oneMove();
   }
                
    else{  
        offsetX = offsetX+30;
        oneMove();
    }

checkValidation();
}

//Snake moving left
function moveLeft(){
    if(snake[0].position.x<15){
    offsetX = 615;
    oneMove();
    }
    
    else{
    offsetX = offsetX-30;
    oneMove();
    }

    checkValidation();
}

//Snake moving up
function moveUp(){
            if(snake[0].position.y<15){
                        offsetY = 475;
     oneMove();
            }
    
    else{
    offsetY = offsetY-30;
    oneMove();
    }
    
    checkValidation();
}

//Snake moving down
function moveDown(){
if(snake[0].position.y>464){
    offsetY = 15;
    oneMove();
}
    
else{
    offsetY = offsetY+30;
    oneMove();
}
        
    checkValidation();
}

//Snake automatic moves
function snakeMoves(){
    if (snakeDiraction === 'r'){
        moveRight();
    }
    if (snakeDiraction === 'l'){
        moveLeft();
    }
    if (snakeDiraction === 'u'){
        moveUp();
    }
    if (snakeDiraction === 'd'){
        moveDown();
    }
}

function oneMove(){
     for (var i=snake.length-1; i>=0;i--){
        if (i===0){
            snake[0].position = createVector(offsetX, offsetY);}
        else{
            snake[i].position = createVector(snake[i-1].position.x,snake[i-1].position.y)
        }
    }
}
function mobileRight(){
    if (snakeDiraction!='l'){
    snakeDiraction = 'r';
}
}
function mobileLeft(){
        if (snakeDiraction!='r'){
    snakeDiraction = 'l';
}
}
function mobileUp(){
        if (snakeDiraction!='d'){
    snakeDiraction = 'u';
}
}
function mobileDown(){
        if (snakeDiraction!='u'){
    snakeDiraction = 'd';
}
}