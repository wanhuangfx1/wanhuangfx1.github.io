var momObj = function(){
	this.x;
	this.y;

	this.angle;

	this.momTailTimer;
	this.momTailCount;

	this.momEyeTimer;
	this.momEyeInterval;
	this.momEyeCount;

	this.momBodyCount;
}
momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	
	this.angle=0;

	this.momTailTimer=0;
	this.momTailCount=0;

	this.momEyeTimer= 0;
	this.momEyeInterval = 1000;
	this.momEyeCount = 0;

	this.momBodyCount=0;
}
momObj.prototype.draw=function(){
	//lerp x,y
	this.x = lerpDistance(mx,this.x,0.9);
	this.y = lerpDistance(my,this.y,0.9);

	//delta  angle
	//Math.atan2(y.x)反正切  lerp
	var deltaY=my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX)+Math.PI;//[0,2*PI]

	//lerp
	this.angle = lerpAngle(beta,this.angle,0.6);

	//tail
	this.momTailTimer += deltaTime;
	if(this.momTailTimer>50){
		this.momTailCount = (this.momTailCount+1) % 8;
		this.momTailTimer %= 50;
	}
	
	//  Eye
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %=this.momEyeInterval;

		if(this.momEyeCount == 1){
			this.momEyeInterval=200;
		}else{
			this.momEyeInterval = Math.random()*1500 + 2000;//[2000,3500)
		}
	}

	


	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var momCount=this.momTailCount;
	ctx1.drawImage(momTail[momCount],-momTail[momCount].width*0.5+30,-momTail[momCount].height*0.5);

	//body
	var momBodyCount=this.momBodyCount;
	if(date.double==1){
		ctx1.drawImage(momBodyorange[momBodyCount],-momBodyorange[momBodyCount].width*0.5,-momBodyorange[momBodyCount].height*0.5);
	}else{
		ctx1.drawImage(momBodyblue[momBodyCount],-momBodyblue[momBodyCount].width*0.5,-momBodyblue[momBodyCount].height*0.5);
	}

	var momEyeCount=this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
	ctx1.restore();
}