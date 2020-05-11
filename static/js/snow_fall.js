const SNOW_FALL_INTERVAL = 2;

var snow;
var stack;

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("myContainer");
    frameRate(20);
    background(0);
    snow = new Snow();
    stack = new SnowStack();
}

function draw() {
    background(0,95);
    snow.draw();
    stack.draw();

    snow.newFlake(SNOW_FALL_INTERVAL);
    snow.checkFallen(stack);

    fill(255);
    textSize(24);
    text("終了＝ウィンドウを閉じる", 15, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
