var INITIAL_AGE = 24;
var INITIAL_LIFE_EXPECTANCY = 70;
function setup() {
    createCanvas(windowWidth, windowHeight);
    document.getElementById('age-input-box').value = INITIAL_AGE;
    document.getElementById('life-expectancy-input-box').value = INITIAL_LIFE_EXPECTANCY;
}

function draw() {
    var ageValue = document.getElementById('age-input-box').value;
    var lifeExpectancyValue = document.getElementById('life-expectancy-input-box').value;
    var age = parseInt(ageValue);
    var lifeExpectancy = parseInt(lifeExpectancyValue);
    if(typeof age !== "number" || isNaN(age)) {
        age = INITIAL_AGE;
    }
    if(typeof lifeExpectancy !== "number" || isNaN(lifeExpectancy)) {
        lifeExpectancy = INITIAL_LIFE_EXPECTANCY;
    }
    var numberofWeeks = age*365.25/7;
    var numberofWeeksinLife = lifeExpectancy*365.25/7;
    // var numberofWeeksinLife = 1;
    background('white');
    var c = new Container({
        width: windowWidth - 350,
        height: windowHeight,
        numberOfLifeboxesToFill: numberofWeeks,
        numberOfLifeboxes: numberofWeeksinLife,
        boxDimensions: {
            x: 6,
            y: 6
        },
        boxFillColor: color('white'),
        boxStrokeColor: color('#1E88E5'),
        boxRectMode: CORNER,
        filledBoxFillColor: color('#BBDEFB'),
        filledBoxStrokeColor: color('blue'),
        filledBoxRectMode: CORNER,

    });
    // console.log(c);
    c.draw((windowWidth-c.width)/2,(windowHeight-c.height)/2);
}

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}