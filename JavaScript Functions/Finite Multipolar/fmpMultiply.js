function fmpMultiply(a,b,c,d,e){
//a,c must be even or 0, twice the sign index (e.g., identity=0, sequitive=2, trinitive=4, quadritive=6, etc.). e is the quantity of signs of the multipolar system.
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
	productSign=(a+c)%(2*e);
	}

	productMag=b*d;

	productArray.push(productSign,productMag);

Product = productArray;

return Product;
}	
