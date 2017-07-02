function setup() {
    
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white');
    console.log(frameCount); 
    var ageValue = document.getElementById('age-input-box').value;
    var lifeExpectancyValue = document.getElementById('life-expectancy-input-box').value;
    var age = parseInt(ageValue);
    var lifeExpectancy = parseInt(lifeExpectancyValue);
    if(typeof age !== "number" || isNaN(age)) {
        age = 24;
    }
    if(typeof lifeExpectancy !== "number" || isNaN(lifeExpectancy)) {
        lifeExpectancy = 70;
    }
    var numberofWeeks = age*365.25/7;
    var numberofWeeksinLife = lifeExpectancy*365.25/7;
    var c = new Container({
        width: windowHeight,
        height: windowHeight,
        numberOfLifeboxesToFill: numberofWeeks,
        numberOfLifeboxes: numberofWeeksinLife,
        boxDimensions: {
            x: 5,
            y: 5
        },
        boxFillColor: color('blue'),
        boxStrokeColor: color(0),
        boxRectMode: CORNER
    });
    // console.log(c);
    c.draw((windowWidth-c.width)/2,(windowHeight-c.height)/2);   
}

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}