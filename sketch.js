let c;
let sw;
let g = 20;

let re_btn;
let save_btn;
let cam;

let mode;
let a = 0;

function setup() {
  createCanvas(1024,908);
  background(10);
  
  re_btn = createButton('RECREATE');
  save_btn = createButton('SAVE');
  // cam = createCapture(VIDEO);
  // cam.hide();

  c = 0;
  sw = 1;
  mode = 0;
}

function draw() {
  drawUI();

  if (mode === 0) {
    if (mouseIsPressed) {
      drawing();
    }
  } else if (mode === 1) {
    
  } else if (mode === 2 ) {

  }
  re_btn.mousePressed(recreate);
  save_btn.mousePressed(saveimage);
}


function drawUI() {
  fill(230);
  rect(0,0,1024,140);

  re_btn.size(g*5,g*5);
  save_btn.size(g*5,g*5);
  re_btn.position(g,g);
  save_btn.position(g*7,g);
}

function recreate() {
  background(255);
}

function drawing() {
  strokeWeight(sw);
  stroke(c);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function saveimage () {
  save(get(0,140,1024,768),"edit_Image"+a+".jpg");
  a++;
}