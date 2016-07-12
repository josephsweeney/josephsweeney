//TODO:
//  increase radius
//  add different colors
//  make it nicer

var sqsize = 5;

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
}

function draw(){
  clear();
  //fillsquares(255);
  noStroke();
  var x = Math.floor((winMouseX - 100)/sqsize)*sqsize;
  var y = Math.floor((winMouseY - 100)/sqsize)*sqsize;
  for(x; x<winMouseX+100; x+=sqsize){
    for(y; y<winMouseY+100; y+=sqsize){
      var shading = dist(x,y,winMouseX,winMouseY)/100;
      var gray = shading*300;
      fill(Math.floor(gray));
      rect(x,y,sqsize,sqsize)
    }
    y = Math.round((winMouseY - 100)/sqsize)*sqsize;
  }
}

function fillsquares(f){
  fill(f);
  for(var x = 0; x<windowWidth; x+=sqsize){
    for(var y = 0; y<windowHeight; y+=sqsize){
      rect(x,y,sqsize,sqsize);
    }
  }
}

function dist(x1,y1,x2,y2){
  return Math.sqrt(square(x2-x1)+square(y2-y1))
}

function square(x){return x*x;}
