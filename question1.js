function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
  bubble2 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
  bubble3 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
  bubble4 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
  bubble5 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
}

function draw() {
  background(255);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}

class Bubble {
  constructor(x, y, r, hue) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.hue = hue;
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
    fill("hsla("+ this.hue +", 100%, 50%, .1)"); //random hue, translucent
    stroke("hsla("+ this.hue +", 100%, 50%, .1)"); //randome hue, translucent
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
