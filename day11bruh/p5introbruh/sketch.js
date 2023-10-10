function setup() {
    createCanvas(innerWidth, innerHeight);

    background(200, 300, 0)
  
}

function draw() {

       // background(100, 100, 300)
        let red = map(mouseX, 0, width, 0, 255)
        fill(red,0,0)
        stroke(mouseX, mouseY, 255)
        strokeWeight(2)
        ellipse(mouseX, mouseY, mouseX, mouseY)
        text(":3", mouseX, mouseY)
      
}

// listens for page size changes lol

function windowResized() {
    resizeCanvas (innerWidth, innerHeight)
    background(200, 300, 0)

}