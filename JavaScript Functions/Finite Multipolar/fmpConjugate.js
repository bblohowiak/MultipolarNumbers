function fmpConjugate(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system
	let newImSign=(c+e)%(2*e);
	const outputArray=[a,b,newImSign,d];
	
return outputArray;
}
