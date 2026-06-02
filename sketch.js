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
  re_btn.mousePressed(recreate);
  save_btn.mousePressed(saveimage);
  // cam_btn.mouseIsPressed();
  // pen_btn.mouseIsPressed();
  // era_btn.mouseIsPressed();
  // get_btn.mouseIsPressed();
}

function draw() {
  if (mode === 0 && mouseIsPressed) {
    drawing();
  } else if (mode === 1) {
    eraser();
  } else if (mode === 2) {

  }
  drawUI();

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
  fill(255);
  rect(g*31,g*2+g/2,g,g);
  fill(255,200,200);
  rect(g*32+g/2,g*2+g/2,g,g);
  fill(200,255,200);
  rect(g*34,g*2+g/2,g,g);
  fill(200,200,255);
  rect(g*35+g/2,g*2+g/2,g,g);
  fill(255,255,200);
  rect(g*37,g*2+g/2,g,g);
  //굵기 변경법
  fill(0);
  textSize(16)
  text("굵기 : 숫자키 1~5 변경",g*31,g*5+g/2);
  //현재 상태 안내
  text("모드 : ",g*40,70);
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