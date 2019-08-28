function setup() { 
  createCanvas(displayWidth, displayHeight);
  strokeWeight(5);
} 

let color;
let red = "red";
let orange = "orange";
let yellow = "yellow";
let green = "green";
let blue = "blue";
let purple = "purple";

function draw() { 
  if (mouseIsPressed === true) {
    stroke(color);
    line(mouseX, mouseY, pmouseX, pmouseY);
    return false;
  }
}
function mouseDragged() {
  color = red;
  red = orange;
  orange = yellow;
  yellow = green;
  green = blue;
  blue = purple;
  purple = color;
}
function touchStarted() {
  color = red;
  red = orange;
  orange = yellow;
  yellow = green;
  green = blue;
  blue = purple;
  purple = color;
}
