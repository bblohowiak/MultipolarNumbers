function fmpExpPowerSeries(a,b,c,d,e,n){
//e is the quantity of signs in the multipolar system > 1
//quotient zeroes out if n>170
//if n=170, magnitude of argument too large if ~21pi
//plan to explore BIGINT as possible remedy
//(0,1,17) yields a good approximation of e; (6,1,17) yields a good approximation of its multiplicative inverse.
//multipolar units not in the complex plane converge to values other than e^-1 depending on whether their roots are real-like or imaginary-like.
//exp(s1.57)-> orthant that a signed s under repeat self-multiplication bypasses


function factorial(n){
    if (n == 0)
        return 1;
    return n * factorial(n - 1);


}

	let consolid=consolidate(0,1,0,0,a,b,c,d);

	for (let i=0; i<n-1;i++){
	

	let quotient=(mpComplexMultiply(...mpNaturalExponent(a,b,c,d,e,(i+2)),0,(1/(factorial(i+2))),0,0,e));
	
//console.log("quotient" + i + " :" + quotient);
	
	consolid=consolidate(...consolid,...quotient);
	
	let newSum=consolid;

	}

	let output=consolid;
return output;	

}
