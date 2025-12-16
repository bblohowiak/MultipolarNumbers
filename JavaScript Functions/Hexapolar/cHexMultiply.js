function cHexMultiply(a,b,c,d,e,f,g,h){
//a,c,e,g must be 0 if mod2, i.e. even or 0
	const productArray=[];
	const productArray1=[];
	const productArray2=[];
	const consolidArray2=[];
	const productArray3=[];
	let productRealSign=0;
	let productImSign=0;
	let productRealMag=0;
	let productImMag=0;
	
//First, Last...
	productArray1.push(...hexMultiply(a,b,e,f));
	productArray1.push(...hexMultiply(c,d,e,f));
	productArray2.push(...hexMultiply(c,d,g+2,h));
	productArray2.push(...hexMultiply(a,b,g,h));
	const consolidArray1=productArray1.concat(...productArray2);
	consolidArray2.push(...consolidate(...consolidArray1));

cHexProduct = consolidArray2;

return cHexProduct;
}	
