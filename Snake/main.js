var offsetX = 15;
var offsetY = 15;
var diameter = 30;
var score = 0;

var snake = [];
var wall;

function setup(){
	createCanvas(640, 480);
    snake.push(createSprite(offsetX,offsetY,diameter,diameter));
    createWall();
    snake[0].shadowColor = color(255)
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
    for (var i=snake.length-1; i>=0;i--){
        if (i===0){
            snake[0].position = createVector(offsetX, offsetY);}
        else{
            snake[i].position = createVector(snake[i-1].position.x,snake[i-1].position.y)
        }
        
    }

checkValidation();
}

if (keyCode === LEFT_ARROW && offsetX>=30){
    offsetX = offsetX-30;
    snake[0].position = createVector(offsetX, offsetY);
     for (var i=snake.length-1; i>=0;i--){
        if (i===0){
            snake[0].position = createVector(offsetX, offsetY);}
        else{
            snake[i].position = createVector(snake[i-1].position.x,snake[i-1].position.y)
        }
        
    }

    checkValidation();
}
    
if (keyCode === DOWN_ARROW && offsetY<=450){
    offsetY = offsetY+30;
snake[0].position = createVector(offsetX,offsetY);
     for (var i=snake.length-1; i>=0;i--){
        if (i===0){
            snake[0].position = createVector(offsetX, offsetY);}
        else{
            snake[i].position = createVector(snake[i-1].position.x,snake[i-1].position.y)
        }
        
    }
    checkValidation();
}
    
if (keyCode === UP_ARROW && offsetY>=30){
        offsetY = offsetY-30;
snake[0].position = createVector(offsetX,offsetY);
     for (var i=snake.length-1; i>=0;i--){
        if (i===0){
            snake[0].position = createVector(offsetX, offsetY);}
        else{
            snake[i].position = createVector(snake[i-1].position.x,snake[i-1].position.y)
        }
        
    }
    checkValidation();
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
    snake.push(createSprite(snake[snake.length-1].position.x-30,offsetY,diameter,diameter));
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
