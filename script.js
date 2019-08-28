function setup() { 
  createCanvas(window.innerWidth, window.innerHeight);
} 

let color;
let red = "red";
let orange = "orange";
let yellow = "yellow";
let green = "green";
let blue = "blue";
let purple = "purple";

function draw() { 
  strokeWeight(5);
  if (mouseIsPressed === true) {
    stroke(color);
    line(mouseX, mouseY, pmouseX, pmouseY);
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