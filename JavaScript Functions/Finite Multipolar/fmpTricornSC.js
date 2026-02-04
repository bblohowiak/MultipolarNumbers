function fmpTricornSC(a,b,c,d,e,f,g){
//accepts complex hexapolar, exponent (e.g., minimum z^2 but could be z^e  if e is positive integer)
//f is the maximum number of iterations

	const newZArray=[a,b,c,d];
	let escapeCount=0;
	let zRealSign=newZArray[0];
	let zRealMag=newZArray[1];
	let zImSign=newZArray[2];		
	let zImMag=newZArray[3];
	let tooBig=0;
	
for  (let i = 0; i < f+1 && tooBig <=escapeMagnitude; i++){
	
	zRealSign=((newZArray[(i*4)+2])+2)%(g*2);
	zRealMag=newZArray[(i*4)+3];
	zImSign=((newZArray[(i*4)])+g)%(g*2);		
	zImMag=newZArray[(i*4)+1];
	
	if (modulus == 0){

//const conjArray=[];
//conjArray.push(cHexConjugate(zRealSign,zRealMag,zImSign,zImMag));

const conjProductArray=[];
let zImSignConj = (zImSign+g)%(g*2);
conjProductArray.push(...fmpComplexMultiply(zRealSign,zRealMag,zImSign,zImMag,zRealSign,zRealMag,zImSignConj,zImMag,g));


//console.log(conjProductArray.toString());

	tooBig=conjProductArray[1];

} else if (modulus == 1){
	
const conjProductArray=[];
let zImSignConj = (zImSign+g)%(g*2);
conjProductArray.push(...fmpComplexMultiply(zRealSign,zRealMag,zImSign,zImMag,zRealSign,zRealMag,zImSignConj,zImMag,g));


//console.log(conjProductArray.toString());

	if (conjProductArray[0] == 0){
	tooBig=conjProductArray[1];
} else {
	tooBig=0;
}
	
	
	
} else {
	tooBig=(zRealMag**2)+(zImMag**2);
}

newZArray.push(...consolidate(...fmpNaturalExponent(zRealSign,zRealMag,zImSign,zImMag,g,e),a,b,c,d));

//these newZ array values might come in handy for a Buddhabrot variation...

	escapeCount=i;

}
return escapeCount;
//return zRealSign;
}
