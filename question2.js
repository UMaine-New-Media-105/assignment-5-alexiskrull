total = 50;

function setup() {
  createCanvas(960, 540);
  bubbles = [];
  for (let numBubbles = 0; numBubbles < total; numBubbles++ ) { //loop to achieve total number of bubbles desired
    let thisX = random(25, width - 25);
    let thisY = random(25, height - 25);
    let thisR = random(10, 20);
    let thisColor = random(360); //hue
    bubbles[numBubbles] = new Bubble(thisX, thisY, thisR, thisColor); //each iteration into the list creates a new bubble isntance
  }
}

function draw() {
  background(255);
  //shows/moves each instance of the bubble in the bubbles[] array
  for (let bubblesShown = 0; bubblesShown < total; bubblesShown++) {
  bubbles[bubblesShown].move();
  bubbles[bubblesShown].show();
  }
}

class Bubble {
  constructor(x, y, r, hue) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.hue = "hsla(" + parseInt(hue) + ", 100%, 50%, 0.09)";
  }
  move() {
    //x direction
    //if bubble is too far left, randomizes speed to move more right
    if(this.x <= 0){
      this.x = this.x + random(5);
    } else if (this.x >= width){ //if too far right, randomizes speed to move left
      this.x = this.x + random(-5, 0);
    } else { //if just right, randomize movement in either direction
      this.x = this.x + random(-5, 5);
    }
    //y direction
    //if bubble too far up, randomizes speed to move more down
    if(this.y <= 0){
      this.y = this.y + random(5);
    } else if (this.y >= height){ //if too far down, randomizes speed to move up
      this.y = this.y + random(-5, 0);
    } else { //if just right, randomize movement in either direction
      this.y = this.y + random(-5, 5);
    }
  }
  show() {
    push();
    fill(this.hue); //random hue, translucent
    stroke(this.hue); //randome hue, translucent
    //blur
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = "black";
    
    translate(this.x, this.y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
