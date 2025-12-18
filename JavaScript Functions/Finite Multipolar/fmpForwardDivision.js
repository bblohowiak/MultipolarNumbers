function fmpForwardDivision(a,b,c,d,e,f,g,h,i){
//accepts two complex numbers a,b,c,d by e,f,g,h and returns an array
//a,c,e,g must be even or 0
//i is the quantity of signs in the multipolar system > 1
//"forward division" defined herein as multiplication of a "dividend" (a,b,c,d) with a multiplicative inverse of its "divisor (e,f,g,h)."
//because multiplying can produce a zero quotient, as in some cases of conjugates, this "division" can also produce a zero quotient.
	const quotientArray=[];
quotientArray.push(...mpComplexMultiply(a,b,c,d,...mpMultiplicativeInverse(e,f,g,h,i),i))
return quotientArray;
}
