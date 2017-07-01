function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    var c = new Container({
        width: windowHeight,
        height: windowHeight,
        numberOfLifeboxes: 3652,
        boxDimensions: {
            x: 6,
            y: 6
        },
        boxFillColor: color('white'),
        boxStrokeColor: color(140),
        boxRectMode: CORNER
    });
    c.draw((windowWidth-c.width)/2,(windowHeight-c.height)/2);
}

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}