var img, eyes_1, eyes_2, mouth_1, mouth_2;

var value;

function setup() {
  createCanvas(450, 600);

  img = loadImage('pic_1.jpg');
  eyes_1 = loadImage('eyes_1.jpg');
  eyes_2 = loadImage('eyes_2.jpg');
  mouth_1 = loadImage('mouth_1.jpg');
  mouth_2 = loadImage('mouth_2.jpg');

  value = 0;
  noStroke();
  image(img, 0, 0);
}

function draw() {
}

function keyPressed() {
  if (value == 0) {
    image(img, 0, 0);
    for (var j=0; j<20; j++) {
      for (var i=0; i<15; i++) {
        fill(250, 159, 238, random(10, 150));
        rect(30*i, 30*j, 30, 30);
      }
    }
    value = 1;
  }
  
  else if (value == 1) {
    image(img, 0, 0);
    image(eyes_2, 143, 217, 142, 55);
    for (var j=0; j<20; j++) {
      for (var i=0; i<15; i++) {
        fill(219, 162, 250, random(10, 150));
        rect(30*i, 30*j, 30, 30);
      }
    }
    value = 2;
  }
  
  else if (value == 2) {
    image(img, 0, 0);
    image(mouth_2, 175, 300, 80, 40);
    for (var j=0; j<20; j++) {
      for (var i=0; i<15; i++) {
        fill(250, 250, 162, random(10, 150));
        rect(30*i, 30*j, 30, 30);
      }
    }
    value = 3;
  }
  
  else if (value == 3) {
    image(img, 0, 0);
    image(eyes_1, 148, 215, 130, 50);
    image(mouth_1, 172, 300, 80, 40);
    for (var j=0; j<20; j++) {
      for (var i=0; i<15; i++) {
        fill(255, 187, 39, random(10, 150));
        rect(30*i, 30*j, 30, 30);
      }
    }
    value = 0;
  }
}
