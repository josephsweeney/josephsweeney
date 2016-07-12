var pdist = 100;
var t = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(30);
  noStroke();
}

function draw(){
  createCanvas(windowWidth,windowHeight);
  clear();
  background(150,25,255);
  fill(255, 204, 0);
  for(var x = 0; x<windowWidth; x+=pdist){
    for(var y = 0; y<windowHeight; y+=pdist){
      ellipse(x,15*Math.sin(t+x)+y,20,20);
    }
  }
  t = (t+.25)%6;
}
