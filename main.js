var music="";
var music1="";

var rightWristx=0;
var rightWristy=0;
var leftWristx=0;
var leftWristy=0;

function preload(){
    music = loadSound("music.mp3") 
    music1 = loadSound("music2.mp3") 
}

function setup(){
    canvas= createCanvas(250,250);
    canvas.position(550,250)
    webcam=createCapture(VIDEO)
    webcam.hide()
    model=ml5.poseNet(webcam,modelLoaded)
    model.on("pose", gotPoses)
}
function draw(){
    image(webcam,0,0,250,250);
}

function modelLoaded(){
    console.log("posent is initialized");
}

function gotPoses( results,error){
   if(error){
console.log(error);
   }

   else{
    if( results.length>0){
        console.log(results);
       rightWristx=results[0].pose.rightWrist.x
       rightWristy=results[0].pose.rightWrist.y
    leftWristx=results[0].pose.leftWrist.x
    leftWristy=results[0].pose.leftWrist.y
    console.log("the x and y of the right wrist is " +rightWristx+rightWristy);
    console.log("the x and y of the left wrist is " +leftWristx+leftWristy)
    }
   }
}