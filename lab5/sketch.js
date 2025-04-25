let allthekitties = [];
let currentkitty = 0;
let kittyposition = { x: 100, y: 100, w: 150, h: 150 };

function preload() {
    // Fetch cat images from the API
    let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=5';
    loadJSON(url, successCallback);
}

function successCallback(data) {
    for (let kitty of data) {
        let kittyImg = createImg(kitty.url); 
        kittyImg.hide();
        allthekitties.push(kittyImg);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight); 

    let savedIndex = localStorage.getItem('currentkitty');
    if (savedIndex !== null) {
        currentkitty = int(savedIndex);
    }
}

function draw() {
    background(115, 147, 179);

    if (allthekitties.length > 0) {
        image(
            allthekitties[currentkitty],
            kittyposition.x,
            kittyposition.y,
            kittyposition.w,
            kittyposition.h
        );
    }

    fill(255);
    textSize(24);
    textFont('Comic Sans MS');
    textAlign(CENTER);
    text('click the kitty to see another!', width / 2, height - 50);
}

function mousePressed() {
    if (
        mouseX > kittyposition.x &&
        mouseX < kittyposition.x + kittyposition.w &&
        mouseY > kittyposition.y &&
        mouseY < kittyposition.y + kittyposition.h
    ) {
        currentkitty = (currentkitty + 1) % allthekitties.length;

        localStorage.setItem('currentkitty', currentkitty);

        kittyposition.x = random(width - kittyposition.w);
        kittyposition.y = random(height - kittyposition.h);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}