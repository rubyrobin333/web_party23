function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0, 0, 0)
    rectMode(CENTER);
    angleMode(DEGREES);

}

function draw() {

    fill(120, 0, 244, 30)
    push()
    stroke(0,map(mouseX, 0, width, 0, 255),180,127)
    strokeWeight(2)
    translate(mouseX - width/2, mouseY - height/2)
    // rotateX(map(mouseX, 0, width, 0, 360))
   //  rotateY( map(mouseY, 0, height, 0, 360))
    rotateX(frameCount)
    rotateY(frameCount * 2)
   
   box(width/4, height/4)
   pop()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
background(120,0,0)
}