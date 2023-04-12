Assignment 5

Challenge 1 
- Make a sketch of 5 bubbles using a class. Pass parameters for x and y positions, as well as radius. Optional: add styling to the bubbles (eg, change the colors, shadows, or framerate), randomize their sizes, or make them interactive.
For this challenge I made 5 bubbles that have a random starting position (both x and y), radius, and color using:
```
bubble1 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
```
Color is HSLA formatted, so the bubbles are at 0.1 alpha, making them mostly transparent. I also added a slight shadow to the bubble to make them stand out a bit more.

LINK: https://editor.p5js.org/alexis.krull/sketches/71cvZOBSw

Challenge 2
- Similar to Challenge 1 but make 50 bubbles instead. I did this by initializing a ```total = 50;``` and then making 2 different loops. The first loop passed randomized instances of the bubbles class into an array:
```
  bubbles = [];
  for (let numBubbles = 0; numBubbles < total; numBubbles++ ) { //loop to achieve total number of bubbles desired
    ...
    bubbles[numBubbles] = new Bubble(thisX, thisY, thisR, thisColor); //each iteration into the list creates a new bubble instance
  }
```
and the second loop iterated through the array and called the move() and show() functions from within the class for each bubble instance:
```
  for (let bubblesShown = 0; bubblesShown < total; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
```

LINK: https://editor.p5js.org/alexis.krull/sketches/71cvZOBSw
