var video = "";
var pose = "";

function preload() {
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	mario_kick = loadSound("kick.wav");
	over = loadSound("gameover.wav");
	mario_coin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	
	video = createCapture(VIDEO);
  	video.size(800, 400);
	video.parent('console');
  	pose = ml5.poseNet(video, modelLoaded);
  	pose.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model is loaded");
}

function gotPoses(results) {
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
    		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}