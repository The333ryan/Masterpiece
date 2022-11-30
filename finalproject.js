var scene = 0;
var sm256 = createFont("Super Mario 256");
var ocr = createFont("OCR A");
textFont(sm256);

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
    arc(bitmojiX-39*p,bitmojiY+74*p,30*p,44*p,-237*p,-23*p);//left shoulder
    arc(bitmojiX+41*p,bitmojiY+73*p,30*p,43*p,-173*p,75*p);//right shoulder
    fill(219, 174, 107);
    arc(bitmojiX+0*p,bitmojiY+57*p,22*p,15*p,0*p,180*p);//neckinshirt
    fill(0, 30, 255);
    textSize(29*p);
    fill(0, 0, 0);
    textFont(createFont("TIMES",(42*p)));
    textAlign(LEFT, CENTER);
    text("EM",bitmojiX+-30*p,bitmojiY+81*p);
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

var drawScene0 = function() {
    background(101, 0, 184);
    drawBitmoji(135, 225, 75);
    drawEthansBitmoji(265, 225, 44);
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
    text("Character select", 200, 20);
    stroke(255, 255, 255);
    fill(0, 0, 0);
    for (var i = 0; i < 4; i++) {
        rect(i*100 + 5, 150, 90, 90);
    }
};

draw = function() {
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
};
