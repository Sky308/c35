var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //.ref functiion is to point towards the database
    var ballPosition = database.ref("ball/position");
    //.on is to read the value fro the database 
    ballPosition.on("value",readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y,
    })
}

function readPosition(data){
position = data.val();
console.log(position)
ball.x=position.x;
ball.y=position.y;
}

function showError(){
console.log("error")
}