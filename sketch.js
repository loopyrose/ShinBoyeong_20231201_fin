let c;
let sw;
let g = 20;
let a = 0;

let re_btn, save_btn, cam_btn, pen_btn, era_btn, get_btn;
let cam, captureImg;

const modes = ["펜", "지우개", "스포이드", "카메라"];
let mode;

function setup() {
  createCanvas(1024,908);
  background(255);
  cam = createCapture(VIDEO);
  cam.hide();
  captureImg = get(0,140,1024,768);
  
  re_btn = createButton('새로 시작하기');
  save_btn = createButton('저장하기');
  cam_btn = createButton('카메라')
  pen_btn = createButton('펜')
  era_btn = createButton('지우개')
  get_btn = createButton('스포이드')

  c = 0;
  sw = 1;
  mode = 0;
  re_btn.mousePressed(reCreate);
  save_btn.mousePressed(saveImage);
  pen_btn.mousePressed(changeModeD);
  era_btn.mousePressed(changeModeE);
  get_btn.mousePressed(changeModeG);
  cam_btn.mousePressed(changeModeC);
}

function draw() {

  if (mode === 0 && mouseIsPressed) {
    drawing();
  } else if (mode === 1 && mouseIsPressed) {
    eraser();
  } else if (mode === 2 && mouseIsPressed && mouseY>140) {
    getColor();
  } else if (mode === 3) {
    image(cam,0,140,1024,768);
  }
  drawUI();
}

function drawUI() {
  strokeWeight(1);
  stroke(0);
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
  noStroke();
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
  fill(c);
  rect(g*40,g,g*3,g*3);
  fill(0);
  text("현재 색상",g*40,g*5+g/2);
  textSize(22)
  text("모드 : " + modes[mode] ,g*44,70);
  
}

//버튼 함수
function reCreate() {
  background(255);
  captureImg = get(0,140,1024,768);
}

function saveImage () {
  save(get(0,140,1024,768),"edit_Image"+a+".jpg");
  a++;
}

function changeModeD () {
  mode = 0;
}
function changeModeE () {
  mode = 1;
}
function changeModeG () {
  mode = 2;
}
function changeModeC () {
  mode = 3;
}

//기능 함수
function drawing() {
  strokeWeight(sw);
  stroke(c);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function eraser() {
  let col = captureImg.get(mouseX, mouseY,sw,sw);

  stroke(col);
  strokeWeight(sw*sw);

  line(mouseX, mouseY, pmouseX, pmouseY);
}

function getColor() {
  c = get(mouseX, mouseY);
  mode = 0;
}

function captureCam(){
  captureImg = cam.get();
  image(captureImg,0,140,1024,768);
  mode=0;
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

function mousePressed() {
  //상단
  if (mouseX>g*31 && mouseX<g*32 && mouseY>g && mouseY<g*2) {
    c = get(g*31,g);
  }
  if (mouseX>g*32+g/2 && mouseX<g*33+g/2 && mouseY>g && mouseY<g*2) {
    c = get(g*32+g/2,g);
  }
  if (mouseX>g*34 && mouseX<g*35 && mouseY>g && mouseY<g*2) {
    c = get(g*34,g);
  }
  if (mouseX>g*35+g/2 && mouseX<g*36+g/2 && mouseY>g && mouseY<g*2) {
    c = get(g*35+g/2,g);
  }
  if (mouseX>g*37 && mouseX<g*38 && mouseY>g && mouseY<g*2) {
    c = get(g*37,g);
  }
  //하단
  if (mouseX>g*31 && mouseX<g*32 && mouseY>g*2+g/2 && mouseY<g*3+g/2) {
    c = get(g*31,g*2+g/2);
  }
  if (mouseX>g*32+g/2 && mouseX<g*33+g/2 && mouseY>g*2+g/2 && mouseY<g*3+g/2) {
    c = get(g*32+g/2,g*2+g/2);
  }
  if (mouseX>g*34 && mouseX<g*35 && mouseY>g*2+g/2 && mouseY<g*3+g/2) {
    c = get(g*34,g*2+g/2);
  }
  if (mouseX>g*35+g/2 && mouseX<g*36+g/2 && mouseY>g*2+g/2 && mouseY<g*3+g/2) {
    c = get(g*35+g/2,g*2+g/2);
  }
  if (mouseX>g*37 && mouseX<g*38 && mouseY>g*2+g/2 && mouseY<g*3+g/2) {
    c = get(g*37,g*2+g/2);
  }
  //카메라 작동
  if(mode===3 && mouseY>140){
      captureCam();
  }
}