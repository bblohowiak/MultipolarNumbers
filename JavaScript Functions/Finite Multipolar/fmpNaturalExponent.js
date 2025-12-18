function fmpNaturalExponent(a,b,c,d,e,f){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1
////f is exponent, must be positive integer or zero. a,c are signs expressed as even exponents of s. b, d are magnitudes.

	const realSign=[a];
	const realMag=[b];
	const imSign=[c];
	const imMag=[d];
	const productArray=[];
	const factorArray=[];
	const Product=[];

//IF F==0, IF F==1...

	if (f==0){
	
		let outputSign=0;
		let outputMag=1;
		let outputSign2=0;
		let outputMag2=0;
		Product.push(outputSign,outputMag,outputSign2,outputMag2);
}

	if (f==1){
	
		let outputSign=a;
		let outputMag=b;
		let outputSign2=c;
		let outputMag2=d;
		Product.push(outputSign,outputMag,outputSign2,outputMag2);
}

	if (f>1){
for  (let i = 0; i < f-1; i++){
	
	let realSign01=realSign[i];
	let realMag01=realMag[i];
	let imSign01=imSign[i];
	let imMag01=imMag[i];
	
	productArray.push(...mpComplexMultiply(a,b,c,d,realSign01,realMag01,imSign01,imMag01,e));
	
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
Product.push(outputSign,outputMag,outputSign2,outputMag2);
}
//console.log("Product:" + Product);
return Product;
}	
