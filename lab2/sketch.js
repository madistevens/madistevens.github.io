var pinkCircle1 = {
    x: 0,
    y: 0,
    w: 80,
    h: 80,
    xSpeed: 2,
    ySpeed: 2,
    colour:('#C71585'),
    draw: function() {
        fill(this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x <0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h|| this.y < 0) {
            this.ySpeed *= -1;
        }
    }
};

var pinkCircle2 = {
    x: 120,
    y: 140,
    w: 10,
    h: 10,
    xSpeed: 6,
    ySpeed: 6,
    colour: ('#FF69B4'),
    draw: function() {
        fill(this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x <0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h|| this.y < 0) {
            this.ySpeed *= -1;
        }
    }
};

var pinkCircle3 = {
    x: 160,
    y: 70,
    w: 40,
    h: 40,
    xSpeed: 4,
    ySpeed: 4,
    colour: ('#FF1493'),
    draw: function() {
        fill(this.colour);
        circle(this.x, this.y, this.w, this.h);
    },
    move: function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x <0 || this.x > width - this.w) {
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h|| this.y < 0) {
            this.ySpeed *= -1;
        }
    }
};

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background('#FFCCE5')
    pinkCircle1.draw();
    pinkCircle1.move();
    pinkCircle2.draw();
    pinkCircle2.move();
    pinkCircle3.draw();
    pinkCircle3.move();
}
