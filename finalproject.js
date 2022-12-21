var scene = 0;
var sm256 = createFont("Super Mario 256");
var ocr = createFont("OCR A");
textFont(sm256);
var character;
var r = 3;
var g = 13;
var b = 137;
var carSpeed = 3;
var turningSpeed = 3;
var startingX = 80;
var startingY = 60;
var cpc = 0;
var cps = 0;
var cpt = 0;
var cpr = 0;
var frames = 0;
var seconds = 0;
var lap = 1;

//Ryan Bitmoji
var drawBitmoji = function(mojiX, mojiY, mojiSize) {
strokeWeight(mojiSize*0.4/151);
fill(255, 209, 135);
ellipse(mojiX, mojiY, mojiSize*129/151, mojiSize);
rectMode(LEFT);
rect(mojiX-8*mojiSize/151, mojiY+75*mojiSize/151, mojiSize*16/151, mojiSize*15/151);
strokeWeight(mojiSize*1/151);
arc(mojiX, mojiY+mojiSize*40/151, mojiSize*20/151, mojiSize*10/151, 0, 180);
triangle(mojiX-mojiSize*3/151, mojiY+mojiSize*23/151, mojiX+mojiSize*3/151, mojiY+mojiSize*23/151, mojiX, mojiY+mojiSize*12/151);
fill(255, 255, 255);
ellipse(mojiX-mojiSize*21/151, mojiY-mojiSize*10/151, mojiSize*27/151, mojiSize*29/151);
ellipse(mojiX+mojiSize*21/151, mojiY-mojiSize*10/151, mojiSize*27/151, mojiSize*29/151);
fill(0, 0, 0);
ellipse(mojiX-mojiSize*21/151, mojiY-mojiSize*10/151, mojiSize*11/151, mojiSize*18/151);
ellipse(mojiX+mojiSize*21/151, mojiY-mojiSize*10/151, mojiSize*11/151, mojiSize*18/151);
stroke(94, 44, 0);
strokeWeight(mojiSize*5/151);
line(mojiX-mojiSize*55/151, mojiY-mojiSize*40/151, mojiX-mojiSize*67/151, mojiY+mojiSize*7/151);
line(mojiX-mojiSize*55/151, mojiY-mojiSize*40/151, mojiX-mojiSize*61/151, mojiY+mojiSize*4/151);
line(mojiX-mojiSize*55/151, mojiY-mojiSize*40/151, mojiX-mojiSize*65/151, mojiY+mojiSize*16/151);
line(mojiX+mojiSize*55/151, mojiY-mojiSize*40/151, mojiX+mojiSize*67/151, mojiY+mojiSize*7/151);
line(mojiX+mojiSize*55/151, mojiY-mojiSize*40/151, mojiX+mojiSize*61/151, mojiY+mojiSize*4/151);
line(mojiX+mojiSize*55/151, mojiY-mojiSize*40/151, mojiX+mojiSize*65/151, mojiY+mojiSize*16/151);
strokeWeight(mojiSize*2/151);
line(mojiX+mojiSize*9/151, mojiY-mojiSize*30/151, mojiX+mojiSize*33/151, mojiY-mojiSize*31/151);
line(mojiX-mojiSize*9/151, mojiY-mojiSize*30/151, mojiX-mojiSize*33/151, mojiY-mojiSize*31/151);
fill(30, 0, 255);
stroke(0, 0, 0);
strokeWeight(mojiSize*1/151);
arc(mojiX, mojiY-mojiSize*40/151, mojiSize*113/151, mojiSize*86/151, 180, 360);
arc(mojiX, mojiY-mojiSize*40/151, mojiSize*113/151, mojiSize*11/151, 0, 180);
line(mojiX-mojiSize*55/151, mojiY-mojiSize*40/151, mojiX+mojiSize*55/151, mojiY-mojiSize*40/151);
fill(255, 255, 255);
arc(mojiX, mojiY-mojiSize*40/151, mojiSize*44/151, mojiSize*46/151, 180, 360);
fill(30, 0, 255);
textFont(ocr);
textSize(mojiSize*23/151);
textAlign(LEFT);
text("R", mojiX-mojiSize*8/151, mojiY-mojiSize*41/151);
arc(mojiX, mojiY+mojiSize*122/151, mojiSize*116/151, mojiSize*66/151, 180, 360);
fill(255, 255, 255);
text("RM", mojiX-mojiSize*18/151, mojiY+mojiSize*114/151);
};

//Ethan Bitmoji
var drawHead = function(bitmojiX,bitmojiY,h)   
{
    var p=h/149;
    fill(219, 174, 107);//skin tone
    rect(bitmojiX-9*p,bitmojiY+23*p,21*p,64*p);
    fill(219, 174, 107); //ear color
    arc(bitmojiX-36*p,bitmojiY+5*p,23*p,28*p,-1*p,373*p);//left ear
    arc(bitmojiX+33*p,bitmojiY+3*p,23*p,28*p,-1*p,381*p);//right ear
    ellipse(bitmojiX+2*p,bitmojiY+2*p,104*p,148*p);//head
};
var drawGlasses = function(bitmojiX,bitmojiY,h) 
{
    var p=h/100;
    rect(bitmojiX-20*p,bitmojiY-10*p,19*p,19*p); //glasses left
    rect(bitmojiX+6*p,bitmojiY-10*p,19*p,18*p); //glasses right
    line(bitmojiX-2*p,bitmojiY-2*p,bitmojiX+5*p,bitmojiY-2*p);//glasses bridge
    line(bitmojiX-33*p,bitmojiY-13*p,bitmojiX-20*p,bitmojiY-1*p);//glasses side left
    line(bitmojiX+25*p,bitmojiY+0*p,bitmojiX+35*p,bitmojiY-13*p);//glasses side right
    fill(255, 255, 255);//brown eyes
    ellipse(bitmojiX-10*p,bitmojiY-0*p,15*p,14*p);//left eye
    ellipse(bitmojiX+16*p,bitmojiY-0*p,15*p,14*p);//right eye
    fill(255, 183, 0);
    ellipse(bitmojiX-10*p,bitmojiY+0*p,5*p,8*p);//brownleft pupil
    ellipse(bitmojiX+16*p,bitmojiY+0*p,5*p,8*p);//brownright pupil 
};
var drawFaceDetails = function(bitmojiX,bitmojiY,h) 
{
    var p=h/100;
    fill(0, 0, 0);
    ellipse(bitmojiX-10*p,bitmojiY-0*p,2*p,3*p);//left pupil
    ellipse(bitmojiX+16*p,bitmojiY-0*p,2*p,3*p);//right pupil
    fill(219, 174, 107); //nose
    bezier(bitmojiX-1*p,bitmojiY+1*p,bitmojiX+21*p,bitmojiY+22*p,bitmojiX-8*p,bitmojiY+20*p,bitmojiX-4*p,bitmojiY+15*p);//nose
    arc(bitmojiX+3*p,bitmojiY+28*p,20*p,8*p,1*p,180*p);//bottomlip
    fill(0, 0, 0);
    arc(bitmojiX+3*p,bitmojiY+27*p,30*p,-10*p,-6,188);//beardtop
    fill(168, 110, 59);
    arc(bitmojiX+3*p,bitmojiY+27*p,30*p,-8*p,-6,188);//toplip
    fill(0, 0, 0);
    arc(bitmojiX+1*p,bitmojiY+46*p,9*p,-5*p,-188,5);//chinbeard
    line(bitmojiX-12*p,bitmojiY+28*p,bitmojiX+17*p,bitmojiY+27*p);//line between mouth
};
var drawHair = function(bitmojiX,bitmojiY,h)
{
    var p=h/100;

    fill(89, 67, 15); //brown hair
    ellipse(bitmojiX-30*p,bitmojiY-36*p,25*p,26*p);//1 hair
    ellipse(bitmojiX-12*p,bitmojiY-44*p,31*p,27*p);//2 hair
    ellipse(bitmojiX+11*p,bitmojiY-45*p,31*p,19*p);//3 hair
    ellipse(bitmojiX+29*p,bitmojiY-36*p,23*p,26*p);//4 hair
    stroke(0,0,0);//black glasses
};
var drawHat = function (bitmojiX,bitmojiY,h)
{
    var p=h/100;
    fill(0, 0, 0);
    ellipse(bitmojiX+2*p,bitmojiY-54*p,108*p,23*p); //hat 
    ellipse(bitmojiX+2*p,bitmojiY-65*p,71*p,35*p); //tophat 
};
var drawBody = function(bitmojiX,bitmojiY,h)
{
    var p=h/100;
rectMode(CORNER);
fill(219, 174, 107);//armscolor
rect(bitmojiX-53*p,bitmojiY+70*p,106*p,66*p);//arms
fill(222, 222, 222);//shirt color
rect(bitmojiX-47*p,bitmojiY+57*p,95*p,85*p);//shirt
fill(222, 222, 222);
arc(bitmojiX-39*p,bitmojiY+74*p,30*p,44*p,-575*p,-94*p);//left shoulder
arc(bitmojiX+41*p,bitmojiY+73*p,30*p,43*p,-309*p,138*p);//right shoulder
fill(219, 174, 107);
arc(bitmojiX+0*p,bitmojiY+57*p,22*p,15*p,44*p,349*p);//neckinshirt
fill(0, 30, 255);
textSize(29*p);
fill(0, 0, 0);
textFont(createFont("TIMES",(42*p)));
textAlign(LEFT, CENTER);
text("EM",bitmojiX+-30*p,bitmojiY+99*p);
};
var drawEthansBitmoji = function(bitmojiX,bitmojiY,h)
{
drawHead(bitmojiX,bitmojiY,h);
drawGlasses(bitmojiX,bitmojiY,h);
drawFaceDetails(bitmojiX,bitmojiY,h);
drawHair(bitmojiX,bitmojiY,h);
drawBody(bitmojiX,bitmojiY,h);
drawHat(bitmojiX,bitmojiY,h);
};

//Luigi
var drawLuigi = function(x, y, size) {
    var sm256 = createFont("Super Mario 256", "super mario 256");
strokeWeight(size*0.4/151);
fill(255, 209, 135);
ellipse(x, y, size*129/151, size);
rectMode(LEFT);
rect(x-8*size/151, y+75*size/151, size*16/151, size*15/151);
strokeWeight(size*1/151);
arc(x, y+size*45/151, size*20/151, size*8/151, 0, 180);
ellipse(x, y+size*20/151, size*30/151, size*23/151);
fill(255, 255, 255);
ellipse(x-size*21/151, y-size*10/151, size*27/151, size*29/151);
ellipse(x+size*21/151, y-size*10/151, size*27/151, size*29/151);
fill(0, 153, 255);
ellipse(x-size*21/151, y-size*10/151, size*11/151, size*18/151);
ellipse(x+size*21/151, y-size*10/151, size*11/151, size*18/151);
fill(0, 0, 0);
ellipse(x-size*21/151, y-size*10/151, size*7/151, size*9/151);
ellipse(x+size*21/151, y-size*10/151, size*7/151, size*9/151);
stroke(94, 44, 0);
strokeWeight(size*5/151);
line(x-size*55/151, y-size*40/151, x-size*67/151, y+size*7/151);
line(x-size*55/151, y-size*40/151, x-size*61/151, y+size*4/151);
line(x-size*55/151, y-size*40/151, x-size*65/151, y+size*16/151);
line(x+size*55/151, y-size*40/151, x+size*67/151, y+size*7/151);
line(x+size*55/151, y-size*40/151, x+size*61/151, y+size*4/151);
line(x+size*55/151, y-size*40/151, x+size*65/151, y+size*16/151);
strokeWeight(size*2/151);
noFill();
stroke(0, 0, 0);
strokeWeight(size*2/151);
arc(x+size*23/151, y-size*24/151, size*30/151, size*17/151, 180, 360);
arc(x-size*23/151, y-size*24/151, size*30/151, size*17/151, 180, 360);
fill(0, 120, 28);
stroke(0, 0, 0);
strokeWeight(size*1/151);
arc(x, y-size*40/151, size*113/151, size*86/151, 180, 360);
arc(x, y-size*40/151, size*113/151, size*11/151, 0, 180);
line(x-size*55/151, y-size*40/151, x+size*55/151, y-size*40/151);
fill(255, 255, 255);
arc(x, y-size*40/151, size*44/151, size*46/151, 180, 360);
fill(0, 120, 28);
textFont(sm256);
textSize(size*23/151);
textAlign(LEFT);
text("L", x-size*8/151, y-size*41/151);
arc(x, y+size*122/151, size*116/151, size*66/151, 180, 360);
fill(0, 0, 0);
arc(x-size*18/151, y+size*27/151, size*35/151, size*24/151, 0, 180);
arc(x+size*18/151, y+size*27/151, size*35/151, size*24/151, 0, 180);
fill(0, 34, 145);
rect(x-size*35/151, y+size*96/151, size*15/151, size*26/151);
rect(x+size*20/151, y+size*96/151, size*15/151, size*26/151);
fill(255, 255, 0);
ellipse(x-size*27.5/151, y+size*102/151, size*10/151, size*10/151);
ellipse(x+size*27.5/151, y+size*102/151, size*10/151, size*10/151);
};
//Mario
var drawMarioHead = function(bitmojiX,bitmojiY,h)   
{
    var p=h/149;
    fill(219, 174, 107);//skin tone
    rect(bitmojiX-9*p,bitmojiY+23*p,21*p,64*p);
    fill(219, 174, 107); //ear color
    arc(bitmojiX-36*p,bitmojiY+5*p,23*p,28*p,-1*p,373*p);//left ear
    arc(bitmojiX+33*p,bitmojiY+3*p,23*p,28*p,-1*p,381*p);//right ear
    ellipse(bitmojiX+2*p,bitmojiY+2*p,104*p,148*p);//head
};
var drawMarioGlasses = function(bitmojiX,bitmojiY,h) 
{
    var p=h/100;
    fill(255, 255, 255);//brown eyes
    ellipse(bitmojiX-10*p,bitmojiY-0*p,15*p,14*p);//left eye
    ellipse(bitmojiX+16*p,bitmojiY-0*p,15*p,14*p);//right eye
    fill(0, 242, 255);
    ellipse(bitmojiX-10*p,bitmojiY+0*p,5*p,8*p);//brownleft pupil
    ellipse(bitmojiX+16*p,bitmojiY+0*p,5*p,8*p);//brownright pupil 
};
var drawMarioFaceDetails = function(bitmojiX,bitmojiY,h) 
{
    var p=h/100;
    fill(0, 0, 0);
    ellipse(bitmojiX-10*p,bitmojiY-0*p,2*p,3*p);//left pupil
    ellipse(bitmojiX+16*p,bitmojiY-0*p,2*p,3*p);//right pupil
    fill(219, 174, 107); //nose
    bezier(bitmojiX-1*p,bitmojiY+1*p,bitmojiX+21*p,bitmojiY+22*p,bitmojiX-8*p,bitmojiY+20*p,bitmojiX-4*p,bitmojiY+15*p);//nose
    //arc(bitmojiX+3*p,bitmojiY+28*p,20*p,8*p,1*p,180*p);//bottomlip
    
    noFill();
    arc(bitmojiX+-10*p,bitmojiY+-5*p,19*p,16*p,182,360);//eyebrow
    arc(bitmojiX+15*p,bitmojiY+-5*p,19*p,16*p,182,360);//eyebrow

    //fill(168, 110, 59);
    //arc(bitmojiX+3*p,bitmojiY+27*p,30*p,-8*p,-6,188);//toplip
    //fill(0, 0, 0);
    noFill();
    arc(bitmojiX+0*p,bitmojiY+30*p,36*p,-4*p,-188,5);//mouth
    //line(bitmojiX-12*p,bitmojiY+26*p,bitmojiX+17*p,bitmojiY+27*p);//line between mouth
    fill(69, 53, 11);
    noStroke();
    //arc(bitmojiX+3*p,bitmojiY+23*p,40*p,-8*p,124,408);//beardtop
    arc(bitmojiX+-15*p,bitmojiY+19*p,19*p,-15*p,182,360);//beardtop
    arc(bitmojiX+1*p,bitmojiY+19*p,19*p,-15*p,182,360);//beardtop
    arc(bitmojiX+16*p,bitmojiY+19*p,19*p,-15*p,182,360);//beardtop

};
var drawMarioHair = function(bitmojiX,bitmojiY,h)
{
    var p=h/100;
    fill(74, 54, 7); //brown hair
    noStroke();
    ellipse(bitmojiX-28*p,bitmojiY-9*p,14*p,27*p);//1 hair
    //ellipse(bitmojiX-12*p,bitmojiY-44*p,31*p,27*p);//2 hair
    //ellipse(bitmojiX+11*p,bitmojiY-45*p,31*p,19*p);//3 hair
    ellipse(bitmojiX+32*p,bitmojiY-9*p,14*p,26*p);//4 hair
    stroke(0,0,0);//black glasses
};
var drawMarioHat = function (bitmojiX,bitmojiY,h)
{
    var p=h/100;
    fill(255, 0, 0);
    noStroke();
    ellipse(bitmojiX+1*p,bitmojiY-24*p,93*p,23*p); //hat 
    ellipse(bitmojiX+2*p,bitmojiY-40*p,65*p,52*p); //tophat 
    fill(255, 255, 255);
    textFont(createFont("TIMES",(30*p)));
    text("M",bitmojiX+-12*p,bitmojiY+-36*p);

};
var drawMarioBody = function(bitmojiX,bitmojiY,h)
{
    var p=h/100;
    rectMode(CORNER);
    fill(219, 174, 107);//armscolor
    rect(bitmojiX-53*p,bitmojiY+70*p,106*p,38*p);//arms
    fill(255, 0, 0);
    arc(bitmojiX-39*p,bitmojiY+65*p,30*p,44*p,-490*p,-23*p);//left shoulder
    arc(bitmojiX+41*p,bitmojiY+65*p,30*p,43*p,-490*p,75*p);//right shoulder
    fill(0, 81, 255);//shirt color
    rect(bitmojiX-47*p,bitmojiY+57*p,95*p,55*p);//shirt
    fill(219, 174, 107);
    arc(bitmojiX+0*p,bitmojiY+57*p,22*p,15*p,0*p,180*p);//neckinshirt
    fill(255, 238, 0);
    ellipse(bitmojiX+19*p,bitmojiY+80*p,12*p,14*p); //Yellow Buttons on shirt 
    ellipse(bitmojiX+-11*p,bitmojiY+80*p,12*p,14*p); //Yellow Buttons on shirt 

    fill(0, 0, 0);
};
var drawMario = function(bitmojiX,bitmojiY,h)
{
drawMarioHead(bitmojiX,bitmojiY,h);
drawMarioGlasses(bitmojiX,bitmojiY,h);
drawMarioFaceDetails(bitmojiX,bitmojiY,h);
drawMarioHair(bitmojiX,bitmojiY,h);
drawMarioBody(bitmojiX,bitmojiY,h);
drawMarioHat(bitmojiX,bitmojiY,h);
};



//Button class
var Button = function(x, y, width, height, color, label) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.label = label;
};

//Draw button method
Button.prototype.draw = function() {
    fill(this.color);
    strokeWeight(1);
    stroke(0, 0, 0);
    rectMode(CORNER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 255, 255);
    textSize((this.height+this.width)/6);
    textAlign(CENTER, CENTER);
    text(this.label, this.x+this.width/2, this.y+this.height/2-3);
};

var start = new Button(150, 315, 100, 50, color(0, 115, 94), "START");

//Car
var Car = function(x, y, color, angle) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle;
};

Car.prototype.draw = function() {
    rectMode(CENTER);
    fill(this.color);
    stroke(0, 0, 0);
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



var drawScene0 = function() {
    background(101, 0, 184);
    drawBitmoji(135, 225, 75);
    drawEthansBitmoji(268, 225, 44);
    textFont(sm256);
    textAlign(CENTER, CENTER);
    textSize(14);
    fill(255, 255, 255);
    text("Our super duper awesome Mario Kart ripoff!", 200, 100);
    text("by Ethan & Ryan", 200, 140);
    start.draw();
};
var drawScene1 = function() {
    background(0, 106, 138);
    fill(255, 255, 255);
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Character select", 200, 25);
    stroke(255, 255, 255);
    fill(97, 97, 97);
    for (var i = 0; i < 4; i++) {
        rect(i*100 + 5, 150, 90, 90);
    }
    stroke(0, 0, 0);
    drawLuigi(49,186,66);
    drawMario(149,185,49);
    stroke(0, 0, 0);
    drawBitmoji(251,186,66);
    stroke(0, 0, 0);
    drawEthansBitmoji(350,177,45);
    fill(255, 255, 255);
    textFont(sm256);
    textSize(15);
    text("Mario", 128, 253);
    text("Luigi", 29, 253);
    text("Ryan", 229, 253);
    text("Ethan", 330, 253);
    textFont(sm256);
    mouseClicked = function() {
        if (mouseX >= 5 && mouseX <= 95 && mouseY >= 150 && mouseY <= 240 && mouseIsPressed) {
            character = "Luigi";
            scene = 2;
            r = 0;
            g = 128;
            b = 20;
        }
        else if (mouseX >= 105 && mouseX <= 195 && mouseY >= 150 && mouseY <= 240) {
            character = "Mario";
            scene = 2;
            r = 255;
            g = 0;
            b = 0;
        }
        else if (mouseX >= 205 && mouseX <= 295 && mouseY >= 150 && mouseY <= 240) {
            character = "Ryan";
            scene = 2;
            r = 15;
            g = 0;
            b = 255;
        }
        else if (mouseX >= 305 && mouseX <= 395 && mouseY >= 150 && mouseY <= 240) {
            character = "Ethan";
            scene = 2;
            r = 0;
            g = 0;
            b = 0;
        }
    };
};

var drawScene2 = function() {
    background(140, 0, 0);
    fill(255, 255, 255);
    textSize(34);
    textAlign(CENTER, CENTER);
    text("Track select", 200, 25);
    stroke(255, 255, 255);
    fill(2, 128, 0);
    for (var i = 0; i < 4; i++) {
        rect(i*100 + 5, 150, 90, 90);
    }
    textSize(9);
    fill(158, 168, 255);
    text("Circle Circuit", 50, 247);
    text("Square Circuit", 150, 247);
    text("Triangle Circuit", 250, 247);
    text("Ryan's Racetrack", 350, 247);
    fill(161, 161, 161);
    ellipse(50, 195, 70, 70);
    fill(2, 128, 0);
    ellipse(50, 195, 40, 40);
    fill(161, 161, 161);
    rect(115, 160, 70, 70);
    fill(2, 128, 0);
    rect(130, 175, 40, 40);
    fill(161, 161, 161);
    triangle(250, 161, 215, 230, 285, 230);
    fill(2, 128, 0);
    triangle(250, 187, 233, 220, 267, 220);
    fill(161, 161, 161);
    quad(315, 160, 335, 160, 335, 230, 315, 230);
    quad(335, 160, 385, 160, 385, 175, 335, 175);
    quad(370, 175, 385, 175, 370, 200, 355, 200);
    quad(370, 230, 385, 230, 370, 200, 355, 200);
    quad(366, 220, 370, 228, 335, 219, 335, 208);
};

//Track scene functions
var drawSquareCircuit = function(){
    background(0, 143, 43);
    fill(148, 143, 143);
    rectMode(CORNER);
    rect(47,63,298,272,9);
    fill(0, 143, 43);
    rect(107,117,175,172,9);
    fill(247, 255, 0);
    rect(145,64,13,53);
    fill(0, 213, 255);
    rect(283,152,62,13);
    rect(239,290,13,45);
    rect(48,246,59,13);
    
};


var drawCircleCircuit = function(){
    rectMode(CORNER);
    background(0, 143, 43); 
    fill(148, 143, 143);    
    ellipse(197,201,342,372);   
    fill(0, 143, 43);   
    ellipse(194,204,227,263); 
    fill(247, 255, 0); 
    rect(185,13,10,59);  
    fill(0, 217, 255);
    rect(308, 195, 60, 10);
    rect(193, 336, 10, 51);
    rect(26, 195, 55, 10);
};


var drawTriangleCircuit = function(){
    background(0, 143, 43);
    rectMode(CORNER);
    fill(148, 143, 143);
    triangle(42,328,373,328,186,33);
    fill(0, 143, 43);
    triangle(282,560/2,237/2,560/2,382/2,123);
    fill(247, 255, 0);
    quad(174,158,180,147,149,111,142,123);
    fill(0, 213, 255);
    quad(265,157,258,147,217,168,223,178);
    rect(252, 280, 10, 48);
    quad(73,264,78,254,123,270,119,280);
};


var drawRyansCircuit = function(){
    background(0, 143, 43);
    fill(148, 143, 143);
    rectMode(CORNER);
    rect(47,63,75,272);
    rect(47,63,298,64);
    quad(215, 227, 295, 228, 345, 127, 267, 128);
    quad(296, 225, 374, 330, 297, 327, 216, 226);
    quad(258, 278, 293, 321, 122, 306, 122, 244);
    fill(255, 238, 0);
    rect(129,63,14,64);
    fill(0, 213, 255);
    quad(260, 140, 255, 150, 333, 150, 339, 140);
    quad(246, 275, 256, 277, 249, 318, 237, 316);
    rect(47, 245, 74, 10);
};

if (character === "Mario") {
        r = 255;
        g = 0;
        b = 0;
    }
    else if (character === "Luigi") {
        r = 0;
        g = 128;
        b = 20;
    }
    else if (character === "Ryan") {
        r = 15;
        g = 0;
        b = 255;
    }
    else if (character === "Ethan") {
        r = 0;
        g = 0;
        b = 0;
    }

var playerCar = new Car(startingX, startingY, color(r, g, b), 0);    

draw = function() {
    var carAngle;
    
    if (scene === 0) {
        drawScene0();
        mouseClicked = function() {
            if (mouseX >= start.x && mouseX <= start.x+start.width && mouseY >= start.y && mouseY <= start.y+start.height) {
                scene = 1;
            }
        };
    }
    else if (scene === 1) {
        drawScene1();
    }
    else if (scene === 2) {
        drawScene2();
        mouseClicked = function() {
        if (mouseX >= 5 && mouseX <= 95 && mouseY >= 150 && mouseY <= 240) {
            scene = 4;
        }
        else if (mouseX >= 105 && mouseX <= 195 && mouseY >= 150 && mouseY <= 240) {
            scene = 3;
        }
        else if (mouseX >= 205 && mouseX <= 295 && mouseY >= 150 && mouseY <= 240) {
            scene = 5;
        }
        else if (mouseX >= 305 && mouseX <= 395 && mouseY >= 150 && mouseY <= 240) {
            scene = 6;
        }
    };
    }
    else if (scene === 3) {
        startingX = 90;
        startingY = 100;
        drawSquareCircuit();
        playerCar.draw();
        fill(21, 0, 255);
        textSize(20);
        text("Lap: "+lap, 53, 10);
        text("Time: "+seconds+"s", 333, 10);
        frames++;
        if (cps === 0 && playerCar.x >= 283 && playerCar.x <= 345 && playerCar.y >= 152 && playerCar.y <= 165) {
            cps = 1;
        }
        if (cps === 1 && playerCar.x >= 239 && playerCar.x <= 252 && playerCar.y >= 290 && playerCar.y <= 335) {
            cps = 2;
        }
        if (cps === 2 && playerCar.x >= 48 && playerCar.x <= 107 && playerCar.y >= 246 && playerCar.y <= 259) {
            cps = 3;
        }
        if (cps === 3 && playerCar.x >= 145 && playerCar.x <= 158 && playerCar.y >= 64 && playerCar.y <= 117) {
            cps = 0;
            lap++;
        }
    }
    else if (scene === 4) {
        drawCircleCircuit();
        playerCar.draw();
        fill(21, 0, 255);
        textSize(20);
        text("Lap: "+lap, 53, 10);
        text("Time: "+seconds+"s", 333, 10);
        frames++;
        if (cpc === 0 && playerCar.x >= 308 && playerCar.x <= 368 && playerCar.y >= 195 && playerCar.y <= 205) {
            cpc = 1;
        }
        if (cpc === 1 && playerCar.x >= 193 && playerCar.x <= 203 && playerCar.y >= 336 && playerCar.y <= 387) {
            cpc = 2;
        }
        if (cpc === 2 && playerCar.x >= 26 && playerCar.x <= 81 && playerCar.y >= 195 && playerCar.y <= 205) {
            cpc = 3;
        }
        if (cpc === 3 && playerCar.x >= 185 && playerCar.x <= 195 && playerCar.y >= 13 && playerCar.y <= 72) {
            cpc = 0;
            lap++;
        }
    }
    else if (scene === 5) {
        startingX = 120;
        startingY = 180;
        drawTriangleCircuit();
        playerCar.draw();
    }
    else if (scene === 6) {
        startingY = 90;
        drawRyansCircuit();
        playerCar.draw();
    }
    
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
    
    if (frames >= 60) {
        frames = 0;
        seconds++;
    }
};
