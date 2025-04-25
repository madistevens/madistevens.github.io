let video;
let img;
let imgX = 500; // initial x position of the image
let imgY = 50; // initial y position of the image
let imgSpeedX = 3; // speed of the image in the x direction
let imgSpeedY = 2; // speed of the image in the y direction

function setup() {
    createCanvas(windowWidth, windowHeight); 

    // load a video file and play it
    // resource: https://p5js.org/reference/#/p5/createVideo
    video = createVideo('yippeecat.mp4'); 
    video.size(400, 300);
    video.position((windowWidth - video.width) / 2, (windowHeight - video.height) / 2 - 50);
    video.loop();
    video.play();


    video.mousePressed(() => {
        if (video.elt.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // load an image using createImg()
    // resource: https://p5js.org/reference/#/p5/createImg
    img = createImg('cat.jpg', 'Cat Image'); 
    img.size(1000, 1000); 
    img.hide(); 
}

function draw() {
    drawGradientBackground();

    fill(255);
    textSize(24);
    textFont('Comic Sans MS');
    textAlign(CENTER);
    fill(112, 41, 99);
    text('click the video to play/pause', windowWidth / 2, (windowHeight / 2) + 200);


    image(img, imgX, imgY, 100, 100);


    imgX += imgSpeedX;
    imgY += imgSpeedY;


    if (imgX <= 0 || imgX + 100 >= width) {
        imgSpeedX *= -1;
    }
    if (imgY <= 0 || imgY + 100 >= height) {
        imgSpeedY *= -1;
}


function drawGradientBackground() {
    for (let y = 0; y < height; y++) {
        let gradientColor = lerpColor(color(255, 200, 200), color(200, 200, 255), y / height);
        stroke(gradientColor);
        line(0, y, width, y);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    video.position((windowWidth - video.width) / 2, (windowHeight - video.height) / 2 - 50);
}
}