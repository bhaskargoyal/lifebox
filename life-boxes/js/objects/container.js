/*
 * Container Constructor
 * @options: object
 * throws ContainerException(string)
 * options: {
 *      width: number,
 *      height: number,
 *      spacing: {
 *          x: number,
 *          y: number
 *      },
 *      boxDimenstions: {
 *          x: number,
 *          y: number
 *      },
 *      numberOfLifeboxes: number,
 *      numberOfLifeBoxesToFill: number,
 *      boxStrokeColor: Color Object,
 *      boxFillColor: Color Object,
 *      boxRoundCorner: {
 *          topLeft: number,
 *          topRight: number,
 *          bottomRight: number,
 *          bottomLeft: number
 *      }, 
 *      boxStrokeWeight: number,
 *      boxRectMode: string,
 *      filledBoxStrokeColor: Color Object,
 *      filledBoxFillColor: Color Object,
 *      filledBoxRoundCorner: {
 *          topLeft: number,
 *          topRight: number,
 *          bottomRight: number,
 *          bottomLeft: number
 *      }, 
 *      filledBoxStrokeWeight: number,
 *      filledBoxRectMode: string
 * 
 * }
 * @more properties of the Container oject: {            
 *      boxes: array,
 *      countCells: {
 *          x: number,
 *          y: number
 *      },
 *      containerRatio: number,
 *      maxNumberOfLifeBoxes: number,
 *      factors: array,
 *      partitions: {
 *          ratio: number,
 *          firstPartition: array,
 *          secondPartition: array
 *      }
 *      cellDimensions: {
 *          x: number,
 *          y: number
 *      }
 * }
 * BoxDimensions can override the SpacingDimensions
 * 
 */
function Container(options) {
    if(typeof options === "undefined") {
        throw new ContainerException("no parameter passed while making new Container object");
    }
    if(typeof options !== "object") {
        throw new ContainerException("parameter not of object type");
    }
    this.width = options.width || 0;
    if(typeof this.width !== "number") {
        throw new ContainerException("width property not of number type");
    }
    this.height = options.height || 0;
    if(typeof this.height !== "number") {
        throw new ContainerException("height property not of number type");
    }
    this.spacing = options.spacing || {
        x: 0,
        y: 0
    };
    if(typeof this.spacing !== "object" || typeof this.spacing.x !== "number" || typeof this.spacing.y !== "number") {
        throw new ContainerException("spacing property either not of object type or not properly defined");
    }
    this.boxDimensions = options.boxDimensions || {
        x: 0,
        y: 0
    };
    this.boxDimensions = options.boxDimensions || {
        x: 0,
        y: 0
    };
    if(typeof this.boxDimensions !== "object" || typeof this.boxDimensions.x !== "number" || typeof this.boxDimensions.y !== "number") {
        throw new ContainerException("boxDimensions property either not of object type or not properly defined");
    }
    this.numberOfLifeboxes = Math.floor(options.numberOfLifeboxes) || 0;
    if(typeof this.numberOfLifeboxes !== "number") {
        throw new ContainerException("numberOfLifeboxes property not of number type");
    }
    this.numberOfLifeboxesToFill = Math.floor(options.numberOfLifeboxesToFill) || 0;
    if(typeof this.numberOfLifeboxesToFill !== "number") {
        throw new ContainerException("numberOfLifeboxesToFill property not of number type");
    }
    if(this.numberOfLifeboxesToFill > this.numberOfLifeboxes) {
        this.numberOfLifeboxesToFill = this.numberOfLifeboxes;
    }
    this.boxStrokeColor = options.boxStrokeColor || color(0);
    if(typeof this.boxStrokeColor !== "object") {
        throw new ContainerException("boxStrokeColor property is not of object type");
    }
    this.boxFillColor = options.boxFillColor || color(255);
    if(typeof this.boxFillColor !== "object") {
        throw new ContainerException("boxFillColor property is not of object type");
    }
    this.boxRoundCorner = options.boxRoundCorner || {
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
    }
    if(typeof this.boxRoundCorner !== "object" || typeof this.boxRoundCorner.topLeft !== "number" || typeof this.boxRoundCorner.topRight !== "number" || typeof this.boxRoundCorner.bottomRight !== "number" || typeof this.boxRoundCorner.bottomLeft !== "number") {
        throw new ContainerException("boxRoundCorner property either not of object type or not properly defined");
    }
    this.boxStrokeWeight = options.boxStrokeWeight || 1;
    if(typeof this.boxStrokeWeight !== "number") {
        throw new ContainerException("boxStrokeWeight property is not of number type");
    }
    this.boxRectMode = options.boxRectMode || RADIUS;
    if(this.boxRectMode !== RADIUS && this.boxRectMode !== CENTER && this.boxRectMode !== CORNER && this.boxRectMode != CORNERS) {
        this.boxRectMode = RADIUS;
    }
    if(typeof this.boxRectMode !== "string") {
        throw new ContainerException("boxRectMode property is not of string type");
    }
    this.filledBoxStrokeColor = options.filledBoxStrokeColor || color(0);
    if(typeof this.filledBoxStrokeColor !== "object") {
        throw new ContainerException("filledBoxStrokeColor property is not of object type");
    }
    this.filledBoxFillColor = options.filledBoxFillColor || color(255);
    if(typeof this.filledBoxFillColor !== "object") {
        throw new ContainerException("filledBoxFillColor property is not of object type");
    }
    this.filledBoxRoundCorner = options.filledBoxRoundCorner || {
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
    }
    if(typeof this.filledBoxRoundCorner !== "object" || typeof this.filledBoxRoundCorner.topLeft !== "number" || typeof this.filledBoxRoundCorner.topRight !== "number" || typeof this.filledBoxRoundCorner.bottomRight !== "number" || typeof this.filledBoxRoundCorner.bottomLeft !== "number") {
        throw new ContainerException("filledBoxRoundCorner property either not of object type or not properly defined");
    }
    this.filledBoxStrokeWeight = options.filledBoxStrokeWeight || 1;
    if(typeof this.filledBoxStrokeWeight !== "number") {
        throw new ContainerException("filledBoxStrokeWeight property is not of number type");
    }
    this.filledBoxRectMode = options.filledBoxRectMode || RADIUS;
    if(this.filledBoxRectMode !== RADIUS && this.filledBoxRectMode !== CENTER && this.filledBoxRectMode !== CORNER && this.filledBoxRectMode != CORNERS) {
        this.filledBoxRectMode = RADIUS;
    }
    if(typeof this.filledBoxRectMode !== "string") {
        throw new ContainerException("filledBoxRectMode property is not of string type");
    }

    this.initialise();
    // constructing boxes array
    

}

Container.prototype.draw = function(x, y) {
    // this.boxes[0].draw(x,y);
    // rect(x,y, this.width, this.height);
    for(let i=0, index=0, yDimension=0; i<this.countCells.y; i++, yDimension+=this.cellDimensions.y) {
        for(let j=0, xDimension=0; j<this.countCells.x; j++, xDimension+=this.cellDimensions.x) {
            if(index < this.numberOfLifeboxes) {
                this.boxes[index].draw(x+xDimension+(this.cellDimensions.x-this.boxDimensions.x)/2, y+yDimension+(this.cellDimensions.y-this.boxDimensions.y)/2);
            }
            index++;
        }
    }
}

Container.prototype.setNumberOfLifeboxes = function(numberOfLifeboxes) {
    if(typeof numberOfLifeboxes === "undefined") {
        throw new ContainerException("numberOfLifeboxes property is undefined in setter");
    }
    if(typeof numberOfLifeboxes !== "number") {
        throw new ContainerException("numberOfLifeboxes property is not of type number in setter");
    }
    this.numberOfLifeboxes = numberOfLifeboxes;
}

Container.prototype.setNumberOfLifeboxesToFill = function(numberOfLifeboxesToFill) {
    if(typeof numberOfLifeboxesToFill === "undefined") {
        throw new ContainerException("numberOfLifeboxesToFill property is undefined in setter");
    }
    if(typeof numberOfLifeboxesToFill !== "number") {
        throw new ContainerException("numberOfLifeboxesToFill property is not of type number in setter");
    }
    this.numberOfLifeboxesToFill = numberOfLifeboxesToFill;
}







Container.prototype.update = function(){
    this.initialise();
}

Container.prototype.initialise = function (){
    this.countCells = {
        x: 0,
        y: 0
    };
    this.containerRatio = this.width/this.height;
    if(isNaN(this.containerRatio)) {
        throw new ContainerException("container dimensions not appropriate");
    }
    this.maxNumberOfLifeBoxes = 0;
    if(this.numberOfLifeboxes%10 == 0) {
        this.maxNumberOfLifeBoxes = Math.floor(this.numberOfLifeboxes);
    } else {
        this.maxNumberOfLifeBoxes = ((Math.floor(this.numberOfLifeboxes/10))+1)*10;
    }
    this.factors = factor(this.maxNumberOfLifeBoxes);
    this.partitions = findPartitions(this.factors, this.containerRatio);
    this.countCells = findcountCells(this.partitions);
    this.cellDimensions = {
        x: 0,
        y: 0
    };
    this.cellDimensions.x = this.width/this.countCells.x;
    this.cellDimensions.y = this.height/this.countCells.y;
    if(this.boxDimensions.x !== 0 && this.boxDimensions.y !== 0) {
        this.spacing.x = this.cellDimensions.x - this.boxDimensions.x;
        this.spacing.y = this.cellDimensions.y - this.boxDimensions.y;
    } else if(this.spacing.x !== 0 && this.spacing.y !== 0) {
        this.boxDimensions.x = this.cellDimensions.x - this.spacing.x;
        this.boxDimensions.y = this.cellDimensions.y - this.spacing.y;
    } else {
        throw new ContainerException("neither Lifebox dimensions were specified nor Spacing dimenstion.");
    }
    // make boxes array
    this.boxes = [];
    for(let i=0; i<this.countCells.x; i++) {
        for(let j=0; j<this.countCells.y; j++){
            if(i*this.countCells.y + j < this.numberOfLifeboxesToFill) {
                let options = {};
                options.width = this.boxDimensions.x;
                options.height = this.boxDimensions.y;
                options.rectMode = this.filledBoxRectMode;
                options.strokeColor = this.filledBoxStrokeColor;
                options.strokeWeight = this.filledBoxStrokeWeight;
                options.roundCorner = this.filledBoxRoundCorner;
                options.fillColor = this.filledBoxFillColor;
                this.boxes.push(new Lifebox(options));
            } else if (i*this.countCells.y + j < this.numberOfLifeboxes) {
                let options = {};
                options.width = this.boxDimensions.x;
                options.height = this.boxDimensions.y;
                options.rectMode = this.boxRectMode;
                options.strokeColor = this.boxStrokeColor;
                options.strokeWeight = this.boxStrokeWeight;
                options.roundCorner = this.boxRoundCorner;
                options.fillColor = this.boxFillColor;
                this.boxes.push(new Lifebox(options));
            }           
        }
    }
}







/*
 * Helper functions
 */

function factor(n) {
    var result = [];
    if (isNaN(n) || !isFinite(n) || n%1!=0 || n==0) {
        result.push(n);
        return result;
    }
    if (n<0) return factor(-n);
    var leastFactor = function(n){
        if (isNaN(n) || !isFinite(n)) return NaN;  
        if (n==0) return 0;  
        if (n%1 || n*n<2) return 1;
        if (n%2==0) return 2;  
        if (n%3==0) return 3;  
        if (n%5==0) return 5;  
        var m = Math.sqrt(n);
        for (var i=7;i<=m;i+=30) {
            if (n%i==0)      return i;
            if (n%(i+4)==0)  return i+4;
            if (n%(i+6)==0)  return i+6;
            if (n%(i+10)==0) return i+10;
            if (n%(i+12)==0) return i+12;
            if (n%(i+16)==0) return i+16;
            if (n%(i+22)==0) return i+22;
            if (n%(i+24)==0) return i+24;
        }
        return n;
    }
    var minFactor = leastFactor(n);
    if (n==minFactor) {
        result.push(n);
        return result;
    }
    result.push(minFactor);
    factor(n/minFactor).forEach(function(number) {
        result.push(number);
    });
    return result;
}


function findPartitions(arr, ratio) {
    var productTotal = 1;
    arr.forEach(function(number) {
        productTotal = productTotal * number;
    });
    var set1 = [];
    var set2 = [];
    var finalAnswer = {
        ratio: Number.MAX_SAFE_INTEGER
    };
    findPartitionsHelper(arr, arr.length, 1, productTotal, ratio, set1, set2, 0, 0, finalAnswer);    
    return finalAnswer;
}



function findPartitionsHelper(arr, i, productCalculated, productTotal, ratio, set1, set2, pointer1, pointer2, finalAnswer) {
    if(i==0) {
        var calculatedRatio = (productTotal/productCalculated)/productCalculated;
        if(Math.abs(finalAnswer.ratio - ratio) >= Math.abs(calculatedRatio - ratio) ) {
            var s1 = [];
            set1.forEach(function(number, index) {
                if(index <= pointer1-1) s1.push(number);
            });
            var s2 = [];
            set2.forEach(function(number, index) {
                if(index <= pointer2-1) s2.push(number);
            });
            finalAnswer.ratio = calculatedRatio;
            finalAnswer.firstPartition = s1;
            finalAnswer.secondPartition = s2;
        }
        return {
            set1: set1,
            pointer1: pointer1,
            set2: set2,
            pointer2: pointer2,
            ratio: calculatedRatio
        }
    }
    // include in second set
    set2[pointer2] = arr[i-1];
    var ratio2 = findPartitionsHelper(arr, i-1, productCalculated, productTotal, ratio, set1, set2, pointer1, pointer2+1, finalAnswer);
    // include in first set
    set1[pointer1] = arr[i-1];
    var ratio1 = findPartitionsHelper(arr, i-1, productCalculated*arr[i-1], productTotal, ratio, set1, set2, pointer1+1, pointer2, finalAnswer);
    var diff1 = Math.abs(ratio - ratio1.ratio);
    var diff2 = Math.abs(ratio - ratio2.ratio);
    return (diff1 >= diff2)? ratio2: ratio1;
}

function findcountCells(partitions) {
    var result = {};
    result.x = 1;
    result.y = 1;
    partitions.firstPartition.forEach(function (value, index) {
        result.x *= value;
    });
    partitions.secondPartition.forEach(function (value, index) {
        result.y *= value;
    });
    if(partitions.ratio >= 1) {
        if(result.x < result.y) {
            var temp = result.x;
            result.x = result.y;
            result.y = temp;
        }
    } else if (partitions.ratio < 1){
        if(result.x > result.y) {
            var temp = result.x;
            result.x = result.y;
            result.y = temp;
        }
    }
    return result;
}