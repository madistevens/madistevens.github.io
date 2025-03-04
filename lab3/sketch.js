var colourPicker;
let strokeWeightSlider;
let controlBar;

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  
  controlBar = createDiv();
  controlBar.id('controlBar');
  
  colourPicker = createColorPicker('white');
  colourPicker.parent(controlBar);
  
  strokeWeightSlider = createSlider(1, 10, 5, 1);
  strokeWeightSlider.parent(controlBar);
  
  var clearButton = createButton('Clear');
  clearButton.mousePressed(clearCanvas);
  clearButton.parent(controlBar);
  
  var doneButton = createButton('Done');
  doneButton.class('done-button');
  doneButton.mousePressed(showSmiley);
  doneButton.parent(controlBar);
  
  background(50);
}

function draw() {
  strokeWeight(strokeWeightSlider.value());
  stroke(colourPicker.value());
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clearCanvas() {
  background(50);
}

function keyPressed() {
  if (key === 'Escape') {
    clearCanvas();
  }
}

let smileyShown = false;

function showSmiley() {
  if (!smileyShown) {
    let smiley = createDiv('✅🥰');
    smiley.class('smiley');
    smiley.parent(controlBar);
    smileyShown = true;
  }
}