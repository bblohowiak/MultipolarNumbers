function cHexForwardDivision(a,b,c,d,e,f,g,h){
//accepts two complex numbers a,b,c,d by e,f,g,h and returns an array
//"forward division" defined herein as multiplication of a "dividend" with the multiplicative inverse of its "divisor."
//because multiplying can produce a zero quotient, as in some cases of conjugation, this "division" can also produce a zero quotient.
//when it's not busy producing zero quotients, its other outputs can be--but are not necessarily--invertible with regard to multiplication.


	const quotientArray=[];
	
	quotientArray.push(...cHexMultiply(a,b,c,d,...cHexMultiplicativeInverse(e,f,g,h)))


return quotientArray;

}
