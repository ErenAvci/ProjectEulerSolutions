var gridSize = 51;
var count = 0;

for(var x1 = 0; x1 < gridSize; x1++) {
	for(var y1 = 0; y1 < gridSize; y1++) {
		if(x1 == 0 && y1 == 0) {continue;}
		for(var x2 = 0; x2 < gridSize; x2++) {
			for(var y2 = 0; y2 < gridSize; y2++) {
				if(x2 == 0 && y2 == 0) {continue;}
                if(x1 == x2 && y1 == y2) {continue;}
                
				if(x1 == 0 && y2 == 0 || x1 == 0 && y2 == y1 || y2 == 0 && x1 == x2
					|| x2 == 0 && y1 == 0 || x2 == 0 && y2 == y1 || y1 == 0 && x1 == x2) {
					count++;
				} else {


					var pq = {x:x2-x1,y:y2-y1};

					var dotP = pq.x*x1 + pq.y*y1;
					var dotQ	 = pq.x*x2 + pq.y*y2;

					if(dotP == 0 || dotQ == 0) {
						count++;
					}
				}
			}
		}
	}
}
