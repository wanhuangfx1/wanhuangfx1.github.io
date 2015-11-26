var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgpic=new Image();
var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyblue=[];
var momBodyorange=[];


var date;

var wave;
var halo;
var dust;
 
var dustpic=[];

function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes,dust,UI,circle
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//background,ane,fruits
	ctx2=can2.getContext("2d");

	can1.addEventListener('mousemove',onMouseMove,false);//添加事件，冒泡传递

	bgpic.src="img/background.jpg";

	canWidth = can1.width;
	canHeight = can2.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	baby=new babyObj();
	baby.init();
	for(var i=0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src = "img/babyTail"+i+".png";
	}

	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="img/babyEye"+i+".png"
	}

	for(var i=0;i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src="img/babyFade"+i+".png";
	}

	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="img/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i] = new Image;
		momEye[i].src="img/bigEye"+i+".png";
	}
	for(var i=0;i<8;i++){
		momBodyblue[i]=new Image();
		momBodyorange[i]=new Image();
		momBodyblue[i].src="img/bigEatBlue"+i+".png";
		momBodyorange[i].src="img/bigEat"+i+".png";
	}

	date = new dateObj();

	wave=new waveObj();
	wave.init();
	halo=new haloObj();
	halo.init();
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";

	for(var i=0;i<7;i++){
		this.dustpic[i]=new Image();
		this.dustpic[i].src="img/dust"+i+".png";
	}
	dust = new dustObj();
	dust.init();

}
function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval,setTimeout
	var now=Date.now();
	deltaTime = now - lastTime;
	if(deltaTime>40) deltaTime=40;
	lastTime = now;//用帧与帧之间的时间间隔来调整速度
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollosion();
	
	date.draw();

	wave.draw();
	halo.draw();

	dust.draw();
}

function onMouseMove(e)
{
	if(!date.gameover){
			if(e.offSetX || e.layerX){
			mx=e.offSetX == undefined ? e.layerX : e.offSetX;
			my=e.offSetY == undefined ? e.layerY : e.offSetY;
			
			}
	}
	
}