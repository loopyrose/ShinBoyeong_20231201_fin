let c;
let sw;
let g = 20;

let re_btn;
let save_btn;
let cam_btn;
let pen_btn;
let era_btn;

let cam;

let mode;
let a = 0;

function setup() {
  createCanvas(1024,908);
  background(255);
  
  re_btn = createButton('RECREATE');
  save_btn = createButton('SAVE');
  cam_btn = createButton('CAMERA')
  pen_btn = createButton('PEN')
  era_btn = createButton('ERASER')
  cam = createCapture(VIDEO);
  cam.hide();
  c = 0;
  sw = 1;
  mode = 0;

  re_btn.mousePressed(recreate);
  save_btn.mousePressed(saveimage);
  cam_btn.mousePressed(cameraOn);
}

function draw() {

  if (mode === 0 && mouseIsPressed) {
      drawing();
  } 
  if (mode === 1 && mouseIsPressed) {
      eraser()
  } 
  if (mode === 2 && mouseIsPressed) {
      image(get(0,140,1024,768),0,140,1024,768);
      mode = 0;
      return;
  }
  drawUI();
}


function drawUI() {
  fill(230);
  rect(0,0,1024,140);

  //버튼 사이즈
  re_btn.size(g*5,g*5);
  save_btn.size(g*5,g*5);
  cam_btn.size(g*5,g*5);
  pen_btn.size(g*5,g*2);
  era_btn.size(g*5,g*2);
  re_btn.position(g,g);
  save_btn.position(g*7,g);
  cam_btn.position(g*13,g);
  pen_btn.position(g*19,g);
  era_btn.position(g*19,g*4);
  
  //색상 팔레트
  fill();
  rect();
}

function recreate() {
  background(255);
}

function saveimage () {
  save(get(),"edit_Image"+a+".jpg");
  a++;
}

function cameraOn() {
  image(cam,0,140,1024,768)
  mode = 2;
}

function drawing() {
  strokeWeight(sw);
  stroke(c);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function eraser() {

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

