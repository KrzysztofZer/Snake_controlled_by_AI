// Project made by Krzysztof Zerman

// Start X point
var offsetX = 15;
// Start Y point
var offsetY = 15;
// Define how big is one part of snake and food
var diameter = 30;
// Score visible in right-top corrner
var score = 0;
// Snake diraction define in what diraction snake is movin ('r'-right, 'l'-left, 'u'-up, 'd'-down)
var snakeDiraction = 'r';
// Needed for counting when snake have to move
var time = 0;
// Evry millisecound snake will be make move
var speed = 100;
// Array witch will be have snake parts
var snake = [];
// Food object
var food;

// This function is activate during start program
function setup() {
    createCanvas(630, 480);
    snake.push(createSprite(offsetX, offsetY, diameter, diameter));
    createFood();
    snake[0].shadowColor = color(0, 0, 0);
    fill(255);

    //check if mobile and add buttons if it is
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Create <div></div>
        var div = document.createElement('div');
        // Add div to HTML
        document.body.appendChild(div);
        // Add "mobile" id to div
        div.id = "mobile";
        // Add buttons to created div
        document.getElementById('mobile').innerHTML = "<table><tr><th></th><th><input id=\"UP\" type=\"button\" value=\"UP\" onclick=\"mobileUp();\"/></th><th></th></tr><tr><td><input id=\"LEFT\" type=\"button\" value=\"LEFT\" onclick=\"mobileLeft();\" /></td><td><input id=\"DOWN\" type=\"button\" value=\"DOWN\" onclick=\"mobileDown();\" /></td><td><input id=\"RIGHT\" type=\"button\" value=\"RIGHT\" onclick=\"mobileRight();\" /></td></tr></table>"

    }


}

// This function is going non stop refreshing
function draw() {
    background(50);
    text(score, 610, 15);
    drawSprites();
    
    // Snake making one move every "speed" millisecounds
    if (millis() - time >= speed) {
        snakeMoves();
        time = millis();
    }
}

// Used for control snake on desktop, waiting for press any button and check if it was arrow
function keyPressed() {
    if (keyCode === RIGHT_ARROW && snakeDiraction != 'l') {
        snakeDiraction = 'r';
    }

    if (keyCode === LEFT_ARROW && snakeDiraction != 'r') {
        snakeDiraction = 'l';

    }

    if (keyCode === DOWN_ARROW && snakeDiraction != 'u') {
        snakeDiraction = 'd';
    }

    if (keyCode === UP_ARROW && snakeDiraction != 'd') {
        snakeDiraction = 'u';
    }
}

// Check if snake eating food or himself
function checkValidation() {
    if (snake[0].position.x <= food.position.x + 30 && snake[0].position.x >= food.position.x - 30 && snake[0].position.y <= food.position.y + 30 && snake[0].position.y >= food.position.y - 30) {
        food.remove();
        score = score + 1;
        createFood();
        addSnake();
    }
    if (snake.length > 4) {
        for (var i = 5; i < snake.length; i++) {
            if (snake[0].position.x <= snake[i].position.x + 15 && snake[0].position.x >= snake[i].position.x - 15 && snake[0].position.y <= snake[i].position.y + 15 && snake[0].position.y >= snake[i].position.y - 15) {
                snakeEnd();
            }
        }
    }
}

// Create new food in game
function createFood() {
    food = createSprite(Math.floor((Math.random() * 590) + 30), Math.floor((Math.random() * 430) + 30), diameter, 30);
    food.shapeColor = color(255, 0, 0);
}

// This function add one part to snake
function addSnake() {
    snake.push(createSprite(-60, -60, diameter, diameter));
    snake[snake.length - 1].shadowColor = color(255);
    fill(255);
}

// Function is activated when snake eat himself
function snakeEnd() {
    score = 0;
    for (var i = snake.length - 1; i > 0; i--) {
        snake[i].remove();
        snake.pop();
    }
}
//Snake moving right
function moveRight() {
    if (snake[0].position.x > 614) {
        offsetX = 15;
        oneMove();
    } else {
        offsetX = offsetX + 30;
        oneMove();
    }

    checkValidation();
}

//Snake moving left
function moveLeft() {
    if (snake[0].position.x < 19) {
        offsetX = 615;
        oneMove();
    } else {
        offsetX = offsetX - 30;
        oneMove();
    }

    checkValidation();
}

//Snake moving up
function moveUp() {
    if (snake[0].position.y < 19) {
        offsetY = 475;
        oneMove();
    } else {
        offsetY = offsetY - 30;
        oneMove();
    }

    checkValidation();
}

//Snake moving down
function moveDown() {
    if (snake[0].position.y > 464) {
        offsetY = 15;
        oneMove();
    } else {
        offsetY = offsetY + 30;
        oneMove();
    }

    checkValidation();
}

//Snake automatic moves
function snakeMoves() {
    if (snakeDiraction === 'r') {
        moveRight();
    }
    if (snakeDiraction === 'l') {
        moveLeft();
    }
    if (snakeDiraction === 'u') {
        moveUp();
    }
    if (snakeDiraction === 'd') {
        moveDown();
    }
}

// This function move head of snake and rest of his body
function oneMove() {
    for (var i = snake.length - 1; i >= 0; i--) {
        if (i === 0) {
            snake[0].position = createVector(offsetX, offsetY);
        } else {
            snake[i].position = createVector(snake[i - 1].position.x, snake[i - 1].position.y)
        }
    }
}

// Go right on mobile
function mobileRight() {
    if (snakeDiraction != 'l') {
        snakeDiraction = 'r';
    }
}

// Go left on mobile
function mobileLeft() {
    if (snakeDiraction != 'r') {
        snakeDiraction = 'l';
    }
}

// Go up on mobile
function mobileUp() {
    if (snakeDiraction != 'd') {
        snakeDiraction = 'u';
    }
}

// Go down on mobile
function mobileDown() {
    if (snakeDiraction != 'u') {
        snakeDiraction = 'd';
    }
}