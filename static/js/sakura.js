const SAKURA_NUM = 35;
var sakura = new Array();

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("myContainer");
    colorMode(HSB, 360, 100, 100);
    smooth();

    for( var i = 0; i < SAKURA_NUM ;i++ ) {
        sakura.push(new Sakura());
    }
}

function draw() {
    background(255);
    noStroke();
    for (var i = 0; i < sakura.length;i++) {
        sakura[i].move();
        sakura[i].display();
    }
    fill(0);
    textSize(24);
    text("終了＝ウィンドウを閉じる", 15, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Sakura {
    constructor() {
        this.s = random(0.3, 1);
        this.ch = random(360);

        this.x = random(width);
        this.y = random(height);

        this.spd = 2 - this.s;
        this.flg = random(1);

        this.color_theta = random(360);
        this.t = 0;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(radians(this.t));
        for (var j = 0 ; j < 3;j++) {
            var inner_s, cs, cv;
            if (j == 0) {
                inner_s = 1.2 * this.s;
                cs = 80;
                cv = 80;
            }
            else if (j == 1) {
                inner_s = 1 * this.s;
                cs = 50;
                cv = 100;
            }
            else {
                inner_s = 0.5 * this.s;
                cs = 20;
                cv = 100;
            }
            for (var i = 0; i < 5;i++) {
                push();
                rotate(radians(360 * i / 5));
                var c = color(this.ch, cs, cv);
                c.setAlpha(sin(radians(this.color_theta)));
                fill(c);
                this.heart(0, -30*inner_s, 45*inner_s, 75*inner_s);
                pop();
            }
        }
        pop();
    }

    move() {
        this.y += this.spd;
        this.color_theta += this.spd;

        if (this.flg >= 0.5) {
            this.t += this.spd;
        }
        else {
            this.t -= this.spd;
        }

        if (this.y > height + 75*this.s) {
            this.y = -75*this.s;
            this.x = random(width);
            this.ch = random(360);
        }
    }

    heart(centerX, centerY, w, h) {
        const WIDTH  = w / 2 * 0.85;
        const HEIGHT = h / 2;
        const OFFSET = centerY - (HEIGHT / 6 * 5);
        beginShape();
        for (var i = 0; i < 30; i++) {
            var tx = abs(sin(radians(i * 12))) * (1 + cos(radians(i * 12))) * sin(radians(i * 12)) * WIDTH + centerX;
            var ty = (0.8 + cos(radians(i * 12))) * cos(radians(i * 12)) * HEIGHT + OFFSET;
            vertex(tx, ty);
        }
        endShape(CLOSE);
    }
}
