function fmpArgument(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1
//if b or d is zero this function defaults to the s^1 cycle.
//output [cycle of exponentiation, argument (angle) magnitude in radians]

	if (b==0){
		a=c;
}

	if (d==0){
		c=a;
}


	const exponentiationCycle = fmpExponentiationCycle(a,b,c,d,e);

	if (exponentiationCycle[0] != 0){

		let countOfTraversedOrthants=(exponentiationCycle[1]-1);
			if (countOfTraversedOrthants == -1){
			countOfTraversedOrthants = 0;	}	
		
		
			let tail = countOfTraversedOrthants*Math.PI/2;
//console.log(tail);

			if (exponentiationCycle[1]%2==1){
				var nose=Math.atan2(d, b);
//console.log("nose"+nose);				
} else {
				var nose=Math.atan2(d, -b)-(Math.PI/2);
//console.log("nose"+nose);		
}

	const argumentArray=[exponentiationCycle[0], tail+nose];	
	return argumentArray;
		
}

	if (exponentiationCycle[0] == 0){
		const argumentArray=[0, 0];	
		return argumentArray;
	}
}
