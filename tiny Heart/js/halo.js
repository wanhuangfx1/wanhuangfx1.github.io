var haloObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}
haloObj.prototype.num=5;
haloObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.r[i]=0;
		this.x[i]=0;
		this.y[i]=0;
	}
}
haloObj.prototype.draw=function(){
	ctx1.save();
	ctx1.lineWidth=3;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "rgb(255,125,0)";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			this.r[i] += deltaTime*0.05;
			if(this.r[i]>100){ 
				
				this.alive[i]=false; 
				break;
			}
			var alpha= 1-this.r[i]/100;
			//draw
			//api
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(255,125,0,"+alpha+")";
			
			ctx1.stroke();
		}
	}
	ctx1.restore();
}
haloObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			//born
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}
