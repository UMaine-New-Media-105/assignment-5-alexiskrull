// Particles = stars
// Breeders = planets
// Catchers = black holes

function setup() {
  createCanvas(600, 500);
  colorMode(HSL);
  angleMode(DEGREES);
  starList = [];
  planetList = [];
  bhList = [];
  spriteWidth = 50;
  spawnDelay = 90;
  framesDelayed = 0;

  //stars
  for (let i = 0; i < 100; i++) {
    let _X = random(width);
    let _Y = random(height);
    let _Hue = random(360);
    let _Size = random(0.5, 1.5);
    starList[i] = new Star(_X, _Y, _Hue, _Size);
  }

  //planets
  for (let i = 0; i < 6; i++) {
    let _X = 25;
    let _Y = random(25, height - 25);
    let _Hue = floor(random(20, 340));
    let _Rotation = random(-50, 50);
    planetList[i] = new Planet(_X, _Y, _Hue, _Rotation);
  }

  //black holes
  for (let i = 0; i < 2; i++) {
    let _X = width - 30;
    let _Y = random(25, height - 25);
    bhList[i] = new BlackHole(_X, _Y);
  }
}

function draw() {
  background(0);
  framesDelayed++;
  for (let num = 0; num < starList.length; num++) {
    starList[num].show();
    starList[num].move();
  }

  for (let num = 0; num < planetList.length; num++) {
    currentPlanet = planetList[num];
    currentPlanet.show();
    currentPlanet.move();
    //check for collisions
    if (framesDelayed > spawnDelay) {
      for (let checked = 0; checked < planetList.length; checked++) {
        let proposedCollision = planetList[checked];
        let isDiff = planetList[num] !== checked;
        if (isDiff && isTouching(currentPlanet, proposedCollision)) {
          let _X = currentPlanet.x;
          let _Y = currentPlanet.y;
          let _Hue = floor(random(20, 340));
          let _Size = 1;
          let _Rotation = random(-50, 50);
          planetList.push(new Planet(_X, _Y, _Hue, _Rotation));
          framesDelayed = 0; 
          break;
        }
      }
    }
  }

  for (let num = 0; num < bhList.length; num++) {
    bhList[num].show();
    bhList[num].move();
  }
}

function isTouching(sprite1, sprite2){
  let spriteDist = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if(spriteDist < spriteWidth){
    return true;
  } else {
    return false;
  }
}

class Star {
  constructor(x, y, hue, size) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.size = size;
  }
  move() {
    this.x = this.x + random(-0.5, 0.5);
    //this.y = this.y + random(-0.5, 0.5);
  }
  show() {
    push();
    scale(this.size);
    noStroke();
    fill(this.hue, 100, 50);
    translate(this.x, this.y);
    ellipse(0, 0, 3);
    pop();
  }
}

class Planet {
  constructor(x, y, hue, rotation) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.rotation = rotation;
    this.addX = random(1, 5);
  }
  move() {
    this.x = this.x + this.addX;
    if (this.x < 25 || this.x > width - 25){
      this.y = random(height);
      this.addX = -this.addX;
    }
  }
  show() {
    push();
    noStroke();
    translate(this.x, this.y);
    rotate(this.rotation);

    //base planet
    fill(this.hue, 100, 50);
    ellipse(0, 0, 50);
    fill(this.hue - 20, 100, 50);
    arc(0, 0, 50, 50, 330, 210, CHORD);
    fill(this.hue + 20, 100, 50);
    arc(0, 0, 50, 50, 0, 190, CHORD);
    fill(this.hue, 100, 50);
    arc(0, 0, 50, 50, 15, 155, CHORD);
    fill(this.hue - 20, 100, 50);
    arc(0, 0, 50, 50, 30, 120, CHORD);
    fill(this.hue + 20, 100, 50);
    arc(0, 0, 50, 50, 230, 300, CHORD);

    //atmosphere
    fill("hsla(" + this.hue + ", 100%, 50%, .25)");
    ellipse(0, 0, 60);
    pop();
  }
}

class BlackHole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotationBH = 0;
    this.addX = random(-5, -1);
  }
  move() {
    this.x = this.x + this.addX;
    if (this.x < 25 || this.x > width - 25){
      this.y = random(height);
      this.addX = -this.addX;
    }
  }
  show() {
    push();
    noStroke();
    translate(this.x, this.y);
    //aura
    for (let i = 0; i < 15; i++) {
      let alpha = map(i, 0, 15, 0.4, 0.1); //map translates aura distance range to alpha range
      stroke("hsla(10, 100%, 50%," + alpha + ")");
      noFill();
      ellipse(0, 0, 50 + i);
    }
    //black hole
    fill("black");
    ellipse(0, 0, 50);

    //rotating refracted star light
    this.rotationBH += 10;
    rotate(this.rotationBH);

    //refracted startlight
    noFill();
    stroke("hsla(0, 20%, 100%, .3)");
    //stroke("white");
    arc(0, 0, 65, 65, 0, 45, OPEN);
    //arc(0, 0, 70, 70, 45, 90, OPEN);
    arc(0, 0, 65, 65, 90, 135, OPEN);
    arc(0, 0, 70, 70, 135, 180, OPEN);
    //arc(0, 0, 65, 65, 180, 225, OPEN);
    arc(0, 0, 70, 70, 225, 270, OPEN);
    arc(0, 0, 65, 65, 290, 330, OPEN);
    //arc(0, 0, 70, 70, 315, 360, OPEN);
    pop();
  }
}
