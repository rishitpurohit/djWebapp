var music="";
var music1="";
var left_score=0;
var song=0;
var rightWristx=0;
var rightWristy=0;
var leftWristx=0;
var leftWristy=0;
var statu1=""
var statu2=""
var right_score=0;
function preload(){
    music = loadSound("music.mp3") 
    music1 = loadSound("music2.mp3") 
     song="";
}

function setup(){
    
    webcam=createCapture(VIDEO)
    webcam.hide()
    model=ml5.poseNet(webcam,modelLoaded)
    model.on("pose", gotPoses)
}
function draw(){
    canvas= createCanvas(400,400);
    canvas.position(550,250)
    statu1=music.isPlaying()
    statu2=music1.isPlaying
    image(webcam,0,0,400,400);
   
    if(left_score>0.2){
        music1.stop()
        circle(leftWristx,leftWristy,30);
        fill("#00FFFF");
        stroke("#FF5F1F");
       
        
         if(statu1==false){
            music.play()
            document.getElementById("heading").innerHTML="The song which is playing currently is harry Pottter"
         }
    }
    if(right_score>0.2){
        music.stop();
        circle(rightWristx,rightWristy,30)
        fill("#00FFFF");
        stroke("#FF5F1F");
if(stau==false){
    music1.play()
    document.getElementById("heading").innerHTML="The song which is playing currently is Peter Pan"
}
}

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
       rightWristx=results[0].pose.rightWrist.x;
       rightWristy=results[0].pose.rightWrist.y;
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    console.log("the x and y of the right wrist is " +rightWristx+rightWristy);
    console.log("the x and y of the left wrist is " +leftWristx+leftWristy);
    left_score=results[0].pose.keypoints[9].score;
    console.log("left wrist score"+left_score);
    }}}
    
