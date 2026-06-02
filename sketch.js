let c;
let sw;
let g = 20;

let re_btn;
let save_btn;
let cam_btn;
let cam;

let mode;
let a = 0;

// function preload() {
//   cam = createCapture(VIDEO);
// }

function setup() {
  createCanvas(1024,908);
  background(255);
  
  re_btn = createButton('RECREATE');
  save_btn = createButton('SAVE');
  cam_btn = createButton('CAMERA')
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
  }
  // } else if (mode === 1) {
  //   if (mouseIsPressed) {
  //     eraser();
  //   }
  // } else if (mode === 2 ) {
  //   if (mouseIsPressed) {
  //     image(get(0,140,1024,768),0,140,1024,768);
  //     mode = 0;
  //   }
  // }
  re_btn.mousePressed(recreate);
  save_btn.mousePressed(saveimage);
  // cam_btn.mousePressed(cameraOn);
}


function drawUI() {
  fill(230);
  rect(0,0,1024,140);

  re_btn.size(g*5,g*5);
  save_btn.size(g*5,g*5);
  cam_btn.size(g*5,g*5);
  re_btn.position(g,g);
  save_btn.position(g*7,g);
  cam_btn.position(g*13,g);

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

// function cameraOn() {
//   img(cam,0,140,1024,768)
//   mode = 2;
// }

function drawing() {
  strokeWeight(sw);
  stroke(c);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function eraser() {

}

function keyPressed() {
  if(key === 1){
    sw =1
  } else if (key === 2) {
    sw = 2
  } else if (key === 3) {
    sw = 4
  } else if (key === 4) {
    sw = 8
  } else if (key === 5) {
    sw = 16
  }
}

