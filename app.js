var canvas = document.getElementById("myCanvas");
let points = document.getElementById("pointsEl");
let tocka = 0;
var ctx = canvas.getContext("2d");

let x1 = canvas.width/2;
let y1 = canvas.height/2;

let x2 = Math.random()*450;
let y2 = Math.random()*450;

let dx = 4;
let dy = -4;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }
    if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
    if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed = true;
    }
    if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed = true;
    }
}

function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = false;
    }
    if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = false;
    }
    if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed = false;
    }
    if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed = false;
    }
}


function drawRect1(){
    ctx.beginPath();
    ctx.rect(x1, y1, 20, 20);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawRect2(){
    ctx.beginPath();
    ctx.rect(x2, y2, 20, 20);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawRect3(){
    ctx.beginPath();
    ctx.rect(x3, y3, 20, 20);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawRect4(){
    ctx.beginPath();
    ctx.rect(x4, y4, 20, 20);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
}



function collisionDetection(){
    if(x1 > x2 && x1 < x2 + 20 && y1 > y2 && y1 < y2 + 20){
        x2 = Math.random()*450;
        y2= Math.random()*450;
        tocka++;
        points.innerHTML = "Points:" + tocka;

        x3 = Math.random()*450;
        y3 = Math.random()*450;
        x4 = Math.random()*450-100;
        y4 = Math.random()*450-100;
    }
}


function game_over(){
    if((x3 > x1 && x3 < x1 + 20 && y3 > y1 && y3 < y1 + 20) || (x4 > x1 && x4 < x1 + 20 && y4 > y1 && y4 < y1 + 20))
    {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect1();
    drawRect2();

    if(rightPressed){
        x1 += 2;
    }
    else if(leftPressed){
        x1 -= 2;
    }
    else if(upPressed)
    {
        y1 -= 2;
    }
    else if(downPressed)
    {
        y1 += 2;
    }
 
    collisionDetection();
    drawRect3();
    drawRect4();

    x3+=dx;
    y3+=dy;

    x4+= dx;
    y4+= dy;

    if(x3 + dx > canvas.width - 20 || x3 + dx < 0){
        dx = -dx;
    }
    if(y3 + dy > canvas.height - 20 || y3 + dy < 0){
        dy = -dy;
    }

    if(x4 + dx > canvas.width - 20 || x4 + dx < 0){
        dx = -dx;
    }
    if(y4 + dy > canvas.height - 20 || y4 + dy < 0){
        dy = -dy;
    }

    game_over();
}

var interval = setInterval(draw, 10);
