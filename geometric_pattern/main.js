var circle = 12;
var circleDiameter;
var circleRadius;
var r;
var g;
var b;

function setup() {
    createCanvas(480, 600);
    
    frameRate(5);
    
    circleDiameter = width/circle;
    circleRadius = circleDiameter/2;
    
    r = 255;
    g = 0;
    b = 0;
}

function draw() {
    var isShifted = false;
    
    var y = height;
    while(y >= 0)
    {
        var x;
        
        if(isShifted){
            x = circleRadius
        } else {
            x = 0;  
        }
        while (x <= width)
        {
            fill(color(r,g,b))
            stroke(color(r,g,b))
            ellipse(x, y, circleDiameter, circleDiameter)
            x += circleDiameter;
        }
        y -= circleRadius;
        isShifted = !isShifted;
        r = (r + 254) % 256;
        g = (g + 7) % 256;
        b = (b + 3) % 256;
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas('geometricPattern', 'png')
    }
    return false;
}