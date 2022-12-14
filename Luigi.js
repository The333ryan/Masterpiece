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
