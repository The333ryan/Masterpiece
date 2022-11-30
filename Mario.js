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
    fill(255, 255, 255);//brown eyes
    ellipse(bitmojiX-10*p,bitmojiY-0*p,15*p,14*p);//left eye
    ellipse(bitmojiX+16*p,bitmojiY-0*p,15*p,14*p);//right eye
    fill(0, 242, 255);
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
var drawHair = function(bitmojiX,bitmojiY,h)
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
var drawHat = function (bitmojiX,bitmojiY,h)
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
var drawBody = function(bitmojiX,bitmojiY,h)
{
    var p=h/100;
    rectMode(CORNER);
    fill(219, 174, 107);//armscolor
    rect(bitmojiX-53*p,bitmojiY+70*p,106*p,38*p);//arms
    fill(255, 0, 0);
    arc(bitmojiX-39*p,bitmojiY+65*p,30*p,44*p,-237*p,-23*p);//left shoulder
    arc(bitmojiX+41*p,bitmojiY+65*p,30*p,43*p,-173*p,75*p);//right shoulder
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
drawHead(bitmojiX,bitmojiY,h);
drawGlasses(bitmojiX,bitmojiY,h);
drawFaceDetails(bitmojiX,bitmojiY,h);
drawHair(bitmojiX,bitmojiY,h);
drawBody(bitmojiX,bitmojiY,h);
drawHat(bitmojiX,bitmojiY,h);
};
