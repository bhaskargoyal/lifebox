var INITIAL_AGE = 0;
var INITIAL_LIFE_EXPECTANCY = 0;
var ageInput, ageValue, ageText, ageString="enter your age";
var lifeExpectancyInput, lifeExpectancyValue, lifeExpectancyText, lifeExpectancyString="enter your country's life expectancy";
var container;
var textStrokeColor = '#9FA8DA', textFillColor= '#9FA8DA';
var boxDimension = {
    x: 4,
    y: 4
};
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    stroke(textStrokeColor);
    fill(textFillColor);
    ageText = text(ageString, (width - textWidth(ageString))/2, 180);
    ageInput = createInput();
    ageInput.position((width-ageInput.width)/2,200);
    ageInput.elt.value = INITIAL_AGE;
    lifeExpectancyText = text(lifeExpectancyString, (width - textWidth(lifeExpectancyString))/2, 280);
    lifeExpectancyInput = createInput();
    lifeExpectancyInput.position((width-ageInput.width)/2, 300);
    lifeExpectancyInput.elt.value = INITIAL_LIFE_EXPECTANCY;
    container = new Container({
        width: width,
        height: height,
        numberOfLifeboxesToFill: 0,
        numberOfLifeboxes: 0,
        boxDimensions: boxDimension,
        boxFillColor: color('white'),
        boxStrokeColor: color('#1E88E5'),
        boxRectMode: CORNER,
        filledBoxFillColor: color('#BBDEFB'),
        filledBoxStrokeColor: color('blue'),
        filledBoxRectMode: CORNER,

    });
}

function draw() {
    ageValue = ageInput.elt.value;
    lifeExpectancyValue = lifeExpectancyInput.elt.value;
    age = parseFloat(ageValue);
    lifeExpectancy = parseFloat(lifeExpectancyValue);
    if(typeof age !== "number" || isNaN(age)) {
        age = INITIAL_AGE;
    }
    if(typeof lifeExpectancy !== "number" || isNaN(lifeExpectancy)) {
        lifeExpectancy = INITIAL_LIFE_EXPECTANCY;
    }
    if(lifeExpectancy > 150) {
        lifeExpectancy = 150;
        lifeExpectancyInput.elt.value = lifeExpectancy;
    }
    var numberofWeeks = age*365.25/7;
    var numberofWeeksinLife = lifeExpectancy*365.25/7;
    // var numberofWeeksinLife = 1;
    
    
    if(container.numberOfLifeboxes !== numberofWeeksinLife || container.numberOfLifeboxesToFill !== numberofWeeks ) {
        background('white');
        container.setNumberOfLifeboxesToFill(numberofWeeks);
        container.setNumberOfLifeboxes(numberofWeeksinLife);
        container.update();
        container.draw((width-container.width)/2,(height-container.height)/2);
        stroke(textStrokeColor);
        fill(textFillColor);
        ageText = text(ageString, (width - textWidth(ageString))/2, 180);
        lifeExpectancyText = text(lifeExpectancyString, (width - textWidth(lifeExpectancyString))/2, 280);
    }
    
    // console.log(c);
    
}

function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
}