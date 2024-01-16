song="";
song2="";
scoreLeftWrist=0;
scoreRightWrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song=loadSound("music.mp3");  
    song2=loadSound("watr.mp3")
  }

  function setup() {
    canvas=createCanvas(600 , 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");
  
    }