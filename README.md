Assignment 5
_____________________________________________________________________________________________
Challenge 1 
- Make a sketch of 5 bubbles using a class. Pass parameters for x and y positions, as well as radius. Optional: add styling to the bubbles (eg, change the colors, shadows, or framerate), randomize their sizes, or make them interactive.
For this challenge I made 5 bubbles that have a random starting position (both x and y), radius, and color using:
```
bubble1 = new Bubble(random(width), random(height), random(10, 40), floor(random(360)));
```
Color is HSLA formatted, so the bubbles are at 0.1 alpha, making them mostly transparent. I also added a slight shadow to the bubble to make them stand out a bit more.

LINK: https://editor.p5js.org/alexis.krull/sketches/71cvZOBSw
_____________________________________________________________________________________________
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
_____________________________________________________________________________________________
Challenge 3
- Populate simulation game with particles, breeders, and catchers. I chose to make my particles as stars far in the background, my breeders as planets, and my catchers as black holes. The stars have randomized colors, sizes, and starting positions and wiggle along the x axis. I thought this looked better than just having them wiggle every which way along both axes. The planets have lines to mimic a Jupiter-type planet and an "atmosphere" made from a mostly transparent ellipse just a bit larger than the planet's size. I also gave them the ability to be slightly tilted using ```random(-50, 50)``` during the class creation call. For the black holes, I first made a photon sphere/event horizon aura using the map() function. This was suggested in part by my fiance when I vented to him about trying to figure out how to make an alpha variable decrease as it got further from the black hole. He asked "can you map one number to another?", and I wasn't sure, so I googled "p5js map one variable to another" and the p5.js references page for map() popped up, so I experimented with that before finally landing on a good-looking aura using: 
```
      for (let i = 0; i < 15; i++) {
        let alpha = map(i, 0, 15, 0.4, 0.1); //map translates aura distance range to alpha range
        stroke("hsla(10, 100%, 50%," + alpha + ")");
        noFill();
        ellipse(0, 0, 50 + i);
      }
```
where each iteration increases i, which is the distance from the black hole's edge. Map() then scales this range (0-15) to the alpha range I decided on (0.4-0.1) so that as i increases, the alpha decreases, gradualling getting more transparent as it gets further from the edge. I then added short white arcs around the edge to mimic the refraction of star light around the black hole. I may make these into different colors, but I've kept them white for now.

LINK: https://editor.p5js.org/alexis.krull/sketches/KpPZPb2KR
