var fruitObj = function(){

	this.alive=[]//boolean
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.number=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()* 0.017+0.003;//[0.003,0.02)
		this.number[i]=0;
		this.fruitType[i]="";
	}
	this.orange.src="img/fruit.png";
	this.blue.src="img/blue.png";


}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		//draw    find an ane,grow,fly up
		if(this.alive[i]){

			if(this.fruitType[i] == "blue"){
				var pic=this.blue;
			}else{
				var pic = this.orange;
			}
			if(this.l[i]<=14){
			this.x[i]=ane.headx[this.number[i]];
			this.y[i]=ane.heady[this.number[i]];
			this.l[i]+=this.spd[i]*deltaTime;
			
			}else{
				this.l[i]= 15;
				this.y[i]-=this.spd[i]*4*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

			if(this.y[i]<10){
				this.alive[i]=false;
			}
		}
		
	}
}

fruitObj.prototype.born=function(i){
	this.number[i]=Math.floor(Math.random()*ane.num);
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.3){
		this.fruitType[i]= "blue"   ; //orange,blue
	}else{
		this.fruitType[i]= "orange";
	}
	
}

fruitObj.prototype.dead = function(i){
	this.alive[i]=false;
}

function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num <15){
		//send fruit
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}






















