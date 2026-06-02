let c;
let sw;
let g = 20;

let re_btn, save_btn, cam_btn, pen_btn, era_btn, get_btn;
let cam;

let mode;
let a = 0;

function setup() {
  createCanvas(1024,908);
  background(10);
  
  re_btn = createButton('RECREATE');
  save_btn = createButton('SAVE');
  cam_btn = createButton('CAMERA')
  pen_btn = createButton('PEN')
  era_btn = createButton('ERASER')
  get_btn = createButton('ColorPicker')

  c = 0;
  sw = 1;
  mode = 0;
}

function draw() {
  if (mode === 0 && mouseIsPressed) {
    drawing();
  } else if (mode === 1) {
    eraser();
  } else if (mode === 2 ) {

  }
  drawUI();
  re_btn.mousePressed(recreate);
  save_btn.mousePressed(saveimage);
}


function drawUI() {
  strokeWeight(1);
  fill(230);
  rect(0,0,1024,140);
  //버튼
  re_btn.size(g*5,g*5);
  save_btn.size(g*5,g*5);
  cam_btn.size(g*5,g*5);
  pen_btn.size(g*5,g*2);
  era_btn.size(g*5,g*2);
  era_btn.size(g*5,g*2);
  get_btn.size(g*5,g*5);
  re_btn.position(g,g);
  save_btn.position(g*7,g);
  cam_btn.position(g*13,g);
  pen_btn.position(g*19,g);
  era_btn.position(g*19,g*4);
  get_btn.position(g*25,g);
  //색상 팔레트
  fill(0);
  rect(g*31,g,g,g);
  fill(255,0,0);
  rect(g*32+g/2,g,g,g);
  fill(0,255,0);
  rect(g*34,g,g,g);
  fill(0,0,255);
  rect(g*35+g/2,g,g,g);
  fill(255,255,0);
  rect(g*37,g,g,g);
}

function recreate() {
  background(255);
}

function saveimage () {
  save(get(0,140,1024,768),"edit_Image"+a+".jpg");
  a++;
}

function drawing() {
  strokeWeight(sw);
  stroke(c);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function eraser(){

}


function keyTyped() {
  if(key === '1'){
    sw =1
  } else if (key === '2') {
    sw = 2
  } else if (key === '3') {
    sw = 4
  } else if (key === '4') {
    sw = 8
  } else if (key === '5') {
    sw = 16
  }
}