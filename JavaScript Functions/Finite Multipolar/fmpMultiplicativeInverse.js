function fmpMultiplicativeInverse(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1
//complex multipolar multiplicative inverses are not necessarily unique; for powers of s, the cycles of exponentiation (e.g., s^pi/4, (s^5)^pi/4) contain multiplicative inverses for numbers contained in that cycle and their scalings. this function can compute multiplicative inverses across cycles of exponentiation except for the embedded conventional complex case due to its special properties (not some implementation cop-out). 
	const inverseArray =[0,0,0,0,e];
	const aArray01 =[a,b,0,0,e];
	const bArray01 =[c,d,0,0,e];
	const cArray01 =[0,0,0,0,e];
	const dArray01 =[];
	const dOverCArray=[e,d/b,0,0,e];
	const productArray01=[];
	const consolidArray01=[];
	
//aArray can't be denominator
	if (b==0 && d!=0){
//if a is 0, sequitive bd=1
//magnitude of d = 1/|b|
	dArray01[1]=1/bArray01[1];
//sign of d = 1/sequitive b
	dArray01[0]=(e*2)-(c+2)%(e*2);

	inverseArray[2]=dArray01[0];
	inverseArray[3]=dArray01[1];
	}
	
	
//bArray can't be denominator
	if (d==0 && b!=0){
//if b is 0, ac=1
//magnitude of c = 1/|a|
	cArray01[1]=1/aArray01[1];
//sign of c = 1/a
	cArray01[0]=(e*2)-(a)%(e*2);

	inverseArray[0]=cArray01[0];
	inverseArray[1]=cArray01[1];
	}	
	
	
	if (d !=0 && b!=0){
	
//if input magnitudes are unequal...
		if (b!=d){
//d/c*sequitive b
productArray01.push(...fmpComplexMultiply((bArray01[0]+2)%(e*2),bArray01[1],bArray01[2],bArray01[3],...dOverCArray));

//a + product array
consolidArray01.push(...consolidate(aArray01[0],aArray01[1],aArray01[2],aArray01[3],productArray01[0],productArray01[1],productArray01[2],productArray01[3]));

//multiplicative inverse of consolid array to c
	cArray01[0]=((e*2)-consolidArray01[0])%(e*2);
	cArray01[1]=1/consolidArray01[1];

//c*(d/c) to d
dArray01.push(...fmpComplexMultiply(cArray01[0],cArray01[1],cArray01[2],cArray01[3],...dOverCArray));
dArray01[4]=e;
console.log(dArray01);

	inverseArray[0] = cArray01[0];
	inverseArray[1] = cArray01[1];
	inverseArray[2] = dArray01[0];
	inverseArray[3] = dArray01[1];
}else{
//if input magnitudes are equal then c,d magnitudes are equal to each other
//a*c=.5 and sequitive*b*d=.5		
//c=1/2a
	cArray01[0]=((e*2)-aArray01[0])%(2*e);
	cArray01[1]=1/(aArray01[1]*2);

//d=1/2*b*sequitive
	dArray01[0]=((e*2)-(bArray01[0]+2))%(2*e);
	dArray01[1]=1/(bArray01[1]*2);

//console.log("barray"+bArray01);
//console.log("darray"+dArray01);
	inverseArray[0] = cArray01[0];
	inverseArray[1] = cArray01[1];
	inverseArray[2] = dArray01[0];
	inverseArray[3] = dArray01[1];
			
		}
}
		
	
	if (b==d && b==0){
	
	inverseArray=[];
	console.log("Undefined: Zero has no multiplicative inverse.");
	}
	
 return inverseArray;

} 
