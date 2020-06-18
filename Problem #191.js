var count = 0;
var search = function(day,consecA,lateOnce) {
	var count = 0;
	//end
	if(day == 30) {return 1;} //A
	if(consecA < 2) { 
		count += search(day+1,consecA+1,lateOnce);
	}//L
	if(!lateOnce) {
		count += search(day+1,0,true);
	}
	//O
	count += search(day+1,0,lateOnce);
	return count;
}
console.log(search(0,0,false));
