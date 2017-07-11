var circle = 12;
function setup() {
    createCanvas(480, 600);
    circleDiameter = width/circle;
}
function draw() {
    var y = 0;
    while(y <= height)
    {
        var x = 0;
        while (x <= width)
        {
            ellipse(x, y, circleDiameter, circleDiameter)
            x += circleDiameter;
        }
        y += circleDiameter;
    }
}