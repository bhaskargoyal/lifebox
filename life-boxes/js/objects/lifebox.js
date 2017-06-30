/*
 * LifeBox 
 * @options object as parameter
 * throws LifeboxExpception(string)
 * options: {
 *      halfWidth: number,
 *      halfHeight: number,
 *      width: number,
 *      height: number,
 *      strokeColor: Color Object,
 *      fillColor: Color Object,
 *      roundCorner: {
 *          topLeft: number,
 *          topRight: number,
 *          bottomRight: number,
 *          bottomLeft: number
 *      }, 
 *      strokeWeight: number,
 *      rectMode: CORNER, CORNERS, CENTER, or RADIUS
 * }
 * Uses rectMode(RADIUS) to draw the shape
 */
function Lifebox(options) {
    if(typeof options === "undefined") {
        throw new LifeboxException("no parameter passed while making new Lifebox object");
    }
    if(typeof options !== "object") {
        throw new LifeboxException("parameter not of object type");
    }
    this.halfWidth = options.halfWidth || options.width/2 || 0;
    if(typeof this.halfWidth !== "number") {
        throw new LifeboxException("halfWidth property is not of number type");
    }
    this.halfHeight = options.halfHeight || options.height/2 || 0;
    if(typeof this.halfHeight !== "number") {
        throw new LifeboxException("halfHeight property is not of number type");
    }
    this.width = options.width || options.halfWidth*2 || 0;
    if(typeof this.width !== "number") {
        throw new LifeboxException("width property is not of number type");
    }
    if(options.width && options.halfWidth) {
        this.halfWidth = this.width*2;
    }
    this.height = options.height || options.halfHeight*2 || 0;
    if(typeof this.height !== "number") {
        throw new LifeboxException("height property is not of number type");
    }
    if(options.height && options.halfHeight) {
        this.halfHeight = this.height*2;
    }
    this.strokeColor = options.strokeColor || color(0);
    if(typeof this.strokeColor !== "object") {
        throw new LifeboxException("strokeColor property is not of object type");
    }
    this.fillColor = options.fillColor || color(255);
    if(typeof this.fillColor !== "object") {
        throw new LifeboxException("fillColor property is not of object type");
    }
    this.roundCorner = options.roundCorner || {
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
    }
    if(typeof this.roundCorner !== "object" || typeof this.roundCorner.topLeft !== "number" || typeof this.roundCorner.topRight !== "number" || typeof this.roundCorner.bottomRight !== "number" || typeof this.roundCorner.bottomLeft !== "number") {
        throw new LifeboxException("roundCorner property either not of object type or not properly defined");
    }
    this.strokeWeight = options.strokeWeight || 1;
    if(typeof this.strokeWeight !== "number") {
        throw new LifeboxException("strokeWeight property is not of number type");
    }
    this.rectMode = options.rectMode || RADIUS;
    if(this.rectMode !== RADIUS && this.rectMode !== CENTER && this.rectMode !== CORNER && this.rectMode != CORNERS) {
        this.rectMode = RADIUS;
    }
    if(typeof this.rectMode !== "string") {
        throw new LifeboxException("rectMode property is not of string type");
    }
}

Lifebox.prototype.draw = function(x, y, w, z) {
    if(typeof x === "undefined" || typeof y === "undefined") {
        throw new LifeboxException("not sufficient parameters passed to the draw function");
    }
    if(typeof x !== "number" || typeof y !== "number") {
        throw new LifeboxException("parameters are not number type");
    }
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    fill(this.fillColor);
    rectMode(this.rectMode);
    if(this.rectMode === RADIUS) {
        rect(x, y, this.halfWidth, this.halfHeight, this.roundCorner.topLeft, this.roundCorner.topRight, this.roundCorner.bottomLeft, this.roundCorner.bottomRight);
    } else if(this.rectMode === CORNERS) {
        if(typeof w === "undefined" || typeof z === "undefined") {
            throw new LifeboxException("not sufficient opposite corner parameters passed to the draw function");
        }
        if(typeof w !== "number" || typeof z !== "number") {
            throw new LifeboxException("opposite corner parameters are not number type");
        }
        rect(x, y, w, z, this.roundCorner.topLeft, this.roundCorner.topRight, this.roundCorner.bottomLeft, this.roundCorner.bottomRight);
    } else if(this.rectMode === CENTER) {
        rect(x, y, this.width, this.height, this.roundCorner.topLeft, this.roundCorner.topRight, this.roundCorner.bottomLeft, this.roundCorner.bottomRight);
    } else {
        // will match with CORNER
        rect(x, y, this.width, this.height, this.roundCorner.topLeft, this.roundCorner.topRight, this.roundCorner.bottomLeft, this.roundCorner.bottomRight);
    }
}

Lifebox.prototype.setHalfWidth = function(halfWidth) {
    if(typeof halfWidth === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof halfWidth !== "number") {
        throw new LifeboxException('parameter not of number type');
    }
    this.halfWidth = halfWidth;
    this.setWidth(this.halfWidth*2);
}

Lifebox.prototype.setHalfHeight = function(halfHeight) {
    if(typeof halfHeight === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof halfHeight !== "number") {
        throw new LifeboxException('parameter not of number type');
    }
    this.halfHeight = halfHeight;
    this.setHeighth(this.halfHeighth*2);
}

Lifebox.prototype.setWidth = function(width) {
    if(typeof width === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof width !== "number") {
        throw new LifeboxException('parameter not of number type');
    }
    this.width = width;
    this.setHalfWidth(this.width/2);
}

Lifebox.prototype.setHeight = function(height) {
    if(typeof height === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof height !== "number") {
        throw new LifeboxException('parameter not of number type');
    }
    this.height = height;
    this.setHalfHeight(this.height/2);
}

Lifebox.prototype.setStrokeColor = function(strokeColor) {
    if(typeof strokeColor === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof strokeColor !== "object") {
        throw new LifeboxException('parameter not of object type');
    }
    this.strokeColor = strokeColor;
}

Lifebox.prototype.setFillColor = function(fillColor) {
    if(typeof fillColor === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof fillColor !== "object") {
        throw new LifeboxException('parameter not of object type');
    }
    this.fillColor = fillColor;
}

Lifebox.prototype.setRoundCorner = function(roundCorner) {
    if(typeof roundCorner === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof roundCorner !== "object" || typeof this.roundCorner.topLeft !== "number" || typeof this.roundCorner.topRight !== "number" || typeof this.roundCorner.bottomRight !== "number" || typeof this.roundCorner.bottomLeft !== "number") {
        throw new LifeboxException('parameter either not of object type or not properly defined');
    }
    this.roundCorner = roundCorner;
}

Lifebox.prototype.setStrokeWeight = function(strokeWeight) {
    if(typeof strokeWeight === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof strokeWeight !== "number") {
        throw new LifeboxException('parameter not of number type');
    }
    this.strokeWeight = strokeWeight;
}

Lifebox.prototype.setRectMode = function(rectMode) {
    if(typeof rectMode === "undefined") {
        throw new LifeboxException('not sufficient parameters passed');
    }
    if(typeof rectMode === "string") {
        throw new LifeboxException('parameter not of string type');
    }
    if(rectMode !== RADIUS && rectMode !== CENTER && rectMode !== CORNER && rectMode !== CORNERS) {
        rectMode = RADIUS;
    }
    this.rectMode = rectMode;
}