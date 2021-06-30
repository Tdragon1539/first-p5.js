function preload(){

}

function setup(){
    canvas = createCanvas(500, 500,);
    canvas.position(300, 100);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 550, 400);
 fill(0, 230, 25);
 rect(100, 40, 350, 30);
 rect(45, 40, 30, 300);
 rect(435, 40, 30, 300);
 rect(100, 350, 350, 30);
 fill(255, 0, 0);
 circle(60, 60, 100);
 circle(60, 350, 100);
 circle(450, 60, 100);
 circle(450, 350, 100);

}


function take_snapshot(){
    save('MyFunnyPhoto.png');
}