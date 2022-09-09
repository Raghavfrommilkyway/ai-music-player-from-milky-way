song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreLeftWrist=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function preload(){
song=loadSound("music1.mp3");
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    
    if(scoreLeftWrist > 0.2){


    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume = "+volume;
    song.setVolume(volume);
    }
}

function play() {
    song.play();
    song.setVolume(0.7);
    song.rate(1);


}

function gotPoses(results)
{
  if(results.length > 0)
  {
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}