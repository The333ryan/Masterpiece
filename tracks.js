var drawSquareCircuit = function(){
    background(0, 143, 43);
    fill(148, 143, 143);
    rect(47,63,298,272,9);
    fill(0, 143, 43);
    rect(107,117,175,172,9);
    fill(247, 255, 0);
    rect(113,64,13,53);
    fill(0, 225, 255);
    noStroke();
    rect(254,64,13,53);  //checkpoint
    rect(284,264,61,13);  //checkpoint
    rect(113,290,13,45);  //checkpoint
};


var drawCircleCircuit = function(){
    background(0, 143, 43); 
    fill(148, 143, 143);    
    ellipse(197,201,342,372);   
    fill(0, 143, 43);   
    ellipse(194,204,227,263); 
    fill(247, 255, 0); 
    rect(185,13,10,59);  
    fill(0, 225, 255);
    noStroke();
    quad(292,272,340,300,347,285,298,257);
    quad(46,286,56,303,105,285,95,270);
};


var drawTraingleCircuit = function(){
    background(0, 143, 43);
    fill(148, 143, 143);
    triangle(42,328,373,328,186,33);
    fill(0, 143, 43);
    triangle(282,560/2,237/2,560/2,382/2,123);
    fill(247, 255, 0);
    quad(174,158,180,147,149,111,142,123);
    fill(0, 225, 255);
    noStroke();
    quad(278,272,338,272,329,259,271,259);
    rect(126,281,13,46);
};


var drawRyansCircuit = function(){
    background(0, 143, 43);
    fill(148, 143, 143);
    rect(47,63,75,272);
    rect(47,63,298,64);
    quad(215, 227, 295, 228, 345, 127, 267, 128);
    quad(296, 225, 374, 330, 297, 327, 216, 226);
    quad(258, 278, 293, 321, 122, 306, 122, 244);
    fill(255, 238, 0);
    rect(47,181,75,14);
    fill(0, 225, 255);
    noStroke();
    rect(252,64,13,63);
    quad(196,311,214,267,200,264,182,310);

};


