var aneObj = function(){
		this.rootx = [];
		this.headx = [];
		this.heady = [];
		this.amp=[];
		this.alpha=0;
}
aneObj.prototype.num=50;
aneObj.prototype.init = function(){
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16 + Math.random()*20;//[0,1)
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-150-Math.random()*50;
		this.amp[i]=Math.random()*10+10;

	}
}
aneObj.prototype.draw = function()
{
	ctx2.save();
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);
	ctx2.globalAlpha=0.6;
	ctx2.strokeStyle="#3b1541";
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	for (var i = 0; i<this.num ; i++) {
				//beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha(透明度)
				ctx2.beginPath();
				ctx2.moveTo(this.rootx[i],canHeight);
				this.headx[i]=this.rootx[i]+l*this.amp[i]
				ctx2.quadraticCurveTo(this.rootx[i],canHeight-(canHeight -this.heady[i])*0.6,this.headx[i]+l*this.amp[i],this.heady[i]);
				ctx2.stroke();
	}
	ctx2.restore();
}