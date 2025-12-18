function fmpComplexMultiply(a,b,c,d,e,f,g,h,i){
//a,c,e,g must be 0 if mod2, i.e. even or 0
//i is the quantity of signs in the multipolar system
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
	productArray1.push(...mpMultiply(a,b,e,f,i));
	productArray1.push(...mpMultiply(c,d,e,f,i));
	productArray2.push(...mpMultiply(c,d,g+2,h,i));
	productArray2.push(...mpMultiply(a,b,g,h,i));
	const consolidArray1=productArray1.concat(...productArray2);
	consolidArray2.push(...consolidate(...consolidArray1));

mpProduct = consolidArray2;

return fmpProduct;
console.log(" " +  "prduct " + fmpProduct);
}	
