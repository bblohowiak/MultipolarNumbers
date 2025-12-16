function hexMultiply(a,b,c,d){
//a,c must be even or 0
	const productArray=[];
	let realSign1=0;
	let realSign2=0;
	let realMag1=0;
	let realMag2=0;
	let productMag=0;
	let productSign=0;

	if (b == 0 || d==0){
	productSign=0;
	} else {
	productSign=(a+c)%12;
	}

	productMag=b*d;

	productArray.push(productSign,productMag);

hexProduct = productArray;

return hexProduct;
}	
