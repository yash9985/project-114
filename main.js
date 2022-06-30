 noseX = 0;
 noseY = 0;

function preload(){
clown_nose = loadImage('https://e7.pngegg.com/pngimages/776/375/png-clipart-moustache-moustache.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){

    console.log('poseNet is inatailized');


}

function gotPoses(results){

    console.log(results);

    if (results.length > 0){

        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }    
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot(){
    save("myFilterImage",png);
}