

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(187, 143, 206);
    fill(72, 201, 176);
    for(var i = 0; i < 1000; i++){
        rect((i*5)%width,(i*7)%innerHeight,100,40);
    }
    fill(91, 44, 111);
    if(mouseX < 150){
        rect(mouseX,mouseY,200,200);
    }else{
        rect(mouseX,mouseY,100,100,100);
    }
}