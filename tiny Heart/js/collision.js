//判断大鱼和果实的距离
function momFruitsCollision(){
	if(!date.gameover){
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i])
			{
				//calculate  length
				var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y)
				if(l<900){
					//fruit eaten
					fruit.dead(i);
					date.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount>=7){mom.momBodyCount=7;}
					if(fruit.fruitType[i]=="blue")//blue
					{
						date.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
}
//mom baby collision
function momBabyCollosion(){
	if(date.fruitNum>0 && !date.gameover){
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900){
			date.score+=date.fruitNum*100*date.double;
			baby.babyBodyCount=0; 
			date.reset();
			mom.momBodyCount=0;
			halo.born(baby.x,baby.y);
			//score update
		}
 	}
}