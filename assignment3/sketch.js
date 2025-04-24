let confetti = []; 

function setup() {
    createCanvas(windowWidth, windowHeight); 

    let addButton = createButton('Add Confetti');
    addButton.class('control-button');
    addButton.position(10, 10);
    addButton.mousePressed(() => {
        for (let i = 0; i < 50; i++) {
            confetti.push(new Confetti(random(width), random(-50, 0))); // https://p5js.org/reference/p5/random/
        }
    });

    let clearButton = createButton('Clear Confetti');
    clearButton.class('control-button');
    clearButton.position(150, 10);
    clearButton.mousePressed(() => {
        confetti = []; 
    });
}

function draw() {
    background(30);

    for (let i = confetti.length - 1; i >= 0; i--) {
        confetti[i].update();
        confetti[i].show();
        if (confetti[i].isOffScreen()) {
            confetti.splice(i, 1); 
        }
    }

    fill(255);
    textSize(16);
    text(`Confetti: ${confetti.length}`, 10, height - 10); // w3schools reference to interpolation to display the number of confetti pieces using template literals https://www.w3schools.com/js/js_string_templates.asp
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
}

class Confetti { // class to create confetti objects https://p5js.org/reference/p5.Element/class/
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1); // random horizontal velocity https://p5js.org/reference/p5/random/
        this.vy = random(1, 3); // random vertical velocity https://p5js.org/reference/p5/random/
        this.size = random(5, 10); // random size for the confetti https://p5js.org/reference/p5/random/
        this.color = color(random(255), random(255), random(255)); // random color for the confetti https://p5js.org/reference/p5/random/
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    show() { 
        noStroke(); // disable outlines for the confetti https://p5js.org/reference/p5/noStroke/
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }

    isOffScreen() {
        return this.y > height;
    }
}