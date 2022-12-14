var r = 3;
var g = 13;
var b = 137;
var carSpeed = 3;
var turningSpeed = 3;

var Car = function(x, y, color, angle) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle;
};

Car.prototype.draw = function() {
    rectMode(CENTER);
    fill(this.color);
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, 60, 30);
    fill(148, 148, 148);
    rect(-16, -18, 15, 5);
    rect(-16, 18, 15, 5);
    rect(16, -18, 15, 5);
    rect(16, 18, 15, 5);
    fill(176, 192, 255);
    rect(20, 0, 10, 15);
    popMatrix();
};

var playerCar = new Car(80, 60, color(r, g, b), 0);

draw = function() {
    background(203, 186, 255);
    fill(125, 0, 0);
    ellipse(200, 200, 50, 50);
    var carAngle;
    playerCar.draw();
    
    if (keyIsPressed && keyCode === RIGHT) {
        playerCar.angle+=turningSpeed;
    }
    else if (keyIsPressed && keyCode === LEFT) {
        playerCar.angle-=turningSpeed;
    }
    
    if (playerCar.angle >= 0 && playerCar.angle < 90) {
        carAngle = playerCar.angle;
        if (keyIsPressed && keyCode === UP) {
            playerCar.x+=carSpeed*(1-carAngle/90);
            playerCar.y+=carSpeed*(carAngle/90);
        }
        else if (keyIsPressed && keyCode === DOWN) {
            playerCar.x-=carSpeed*(1-carAngle/90);
            playerCar.y-=carSpeed*(carAngle/90);
        }
    }
    else if (playerCar.angle >= 90 && playerCar.angle < 180) {
        carAngle = playerCar.angle;
        if (keyIsPressed && keyCode === UP) {
            playerCar.x+=carSpeed*(1-carAngle/90);
            playerCar.y+=carSpeed*(2-carAngle/90);
        }
        else if (keyIsPressed && keyCode === DOWN) {
            playerCar.x-=carSpeed*(1-carAngle/90);
            playerCar.y-=carSpeed*(2-carAngle/90);
        }
    }
    else if (playerCar.angle >= 180 && playerCar.angle < 270) {
        carAngle = playerCar.angle-180;
        if (keyIsPressed && keyCode === UP) {
            playerCar.x-=carSpeed*(1-carAngle/90);
            playerCar.y-=carSpeed*(carAngle/90);
        }
        else if (keyIsPressed && keyCode === DOWN) {
            playerCar.x+=carSpeed*(1-carAngle/90);
            playerCar.y+=carSpeed*(carAngle/90);
        }
    }
    else if (playerCar.angle >= 270 && playerCar.angle < 360) {
        carAngle = playerCar.angle-180;
        if (keyIsPressed && keyCode === UP) {
            playerCar.x-=carSpeed*(1-carAngle/90);
            playerCar.y-=carSpeed*(2-carAngle/90);
        }
        else if (keyIsPressed && keyCode === DOWN) {
            playerCar.x+=carSpeed*(1-carAngle/90);
            playerCar.y+=carSpeed*(2-carAngle/90);
        }
    }
    
    

    
    if (playerCar.angle%360 === 0) {
        playerCar.angle = 0;
    }
    if (playerCar.angle > 360) {
        playerCar.angle = turningSpeed;
    }
    if (playerCar.angle < 0) {
        playerCar.angle = 360-turningSpeed;
    }
};
