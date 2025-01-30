// this function sets up canvas
function setup() {
    // create a canvas that covers the entire window
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
      // set the background color
      background(52, 73, 94);
      
      // set the fill color
      fill(36, 113, 163);
      
      // draw 1000 rectangles with varying positions
      for(var i = 0; i < 1000; i++){
          // draw a rectangle with width 100 and height 40
          // the x position is (i*5) modulo the canvas width
          // the y position is (i*7) modulo the inner height of the window
          rect((i*5)%width,(i*7)%innerHeight,100,40,4);
      }
      
      // set the fill color
      fill(174, 214, 241);
      
      // if the mouse's x position is less than 150
      if(mouseX < 150){
          // draw a rectangle at the mouse position with width and height 200
          rect(mouseX,mouseY,200,200,15);
      } else {
          // otherwise, draw a rectangle at the mouse position with width and height 100
          // and rounded corners with a radius of 100
          rect(mouseX,mouseY,100,100,45);
      }
  }