function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    var val = document.getElementById('age-input-box').value;
    var age = parseInt(val);
    if(typeof age !== "number" || isNaN(age)) {
        age = 0;
    }
    var numberofWeeks = age*365.25/7;
    var lifeExpentancy = 70;
    var numberofWeeksinLife = lifeExpentancy*365.25/7;
    background('white');
    var c = new Container({
        width: windowHeight -30,
        height: windowHeight -30,
        numberOfLifeboxesToFill: numberofWeeks,
        numberOfLifeboxes: numberofWeeksinLife,
        boxDimensions: {
            x: 6,
            y: 6
        },
        boxFillColor: color('red'),
        boxStrokeColor: color(140),
        boxRectMode: CORNER
    });
    console.log(c);
    c.draw((windowWidth-c.width)/2,(windowHeight-c.height)/2);
}

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}