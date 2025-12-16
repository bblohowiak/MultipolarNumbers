function cHexConjugate(a,b,c,d){
//a,c must be even or 0
	let newImSign=(c+6)%12;
	const outputArray=[a,b,newImSign,d];
	
return outputArray;
}
