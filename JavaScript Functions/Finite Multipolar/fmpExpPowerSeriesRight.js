 function fmpExpPowerSeriesRight(a,b,c,d,e,n){
//this function differs from the one that had been named "fmpExpPowerSeries" in its nested bracketing bias such that consolidation for the taylor polynomial of this function brackets to the right (i.e., starting with the term of smallest magnitude in this case) whereas the other function brackets to the left (i.e., starting with the terms of largest magnitude in this case)
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

//	let consolid=consolidate(0,1,0,0,a,b,c,d);
	let consolid=[0,0,0,0];
	for (let i=n; i>0;i+=-1){
	

	let quotient=(fmpComplexMultiply(...fmpNaturalExponent(a,b,c,d,e,(i)),0,(1/(factorial(i))),0,0,e));

	
//console.log("quotient" + i + " :" + quotient);
	
	consolid=consolidate(...consolid,...quotient);
//console.log(i+" "+quotient+" rightbrackettotal"+consolid);	
//	let newSum=consolid;

	}
 let output=consolidate(...consolid,...[0,1,0,0]);
//	let output=consolid;
//let output=400;
return output;	

}
