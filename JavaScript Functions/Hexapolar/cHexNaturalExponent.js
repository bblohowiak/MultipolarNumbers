function cHexNaturalExponent(a,b,c,d,e){
////e is exponent, must be positive integer greater than two (for now). a,c are signs expressed as even exponents modulo 12. b, d are magnitudes.

	const realSign=[a];
	const realMag=[b];
	const imSign=[c];
	const imMag=[d];
	const productArray=[];
	const factorArray=[];
	const hexProduct=[];

for  (let i = 0; i < e-1; i++){
	
	let realSign01=realSign[i];
	let realMag01=realMag[i];
	let imSign01=imSign[i];
	let imMag01=imMag[i];
	
	productArray.push(...cHexMultiply(a,b,c,d,realSign01,realMag01,imSign01,imMag01));
	
	realSign.push(productArray[(i*4)]);
	realMag.push(productArray[(i*4)+1]);
	imSign.push(productArray[(i*4)+2]);
	imMag.push(productArray[(i*4)+3]);

}

	arrayLength=productArray.length;
	
	
	let outputSign=productArray[arrayLength-4];
	let outputMag=productArray[arrayLength-3];
	let outputSign2=productArray[arrayLength-2];
	let outputMag2=productArray[arrayLength-1];
hexProduct.push(outputSign,outputMag,outputSign2,outputMag2);

return hexProduct;
}	
