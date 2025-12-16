function cHexExpPowerSeries(a,b,c,d,n){
//recommend n<200; diminishing returns after n=17 for real-like numbers and fails to achieve diminishing returns for imaginary-like numbers as it fails as n>~200
//(0,1,17) yields a good approximation of e; (6,1,17) yields a good approximation of its multiplicative inverse.
//hexapolar units not in the complex plane converge to values other than e^-1 depending on whether their roots are real-like or imaginary-like.
//exp(s1.57)-> orthant that a signed s under repeat self-multiplication bypasses


function factorial(n){
    if (n == 0)
        return 1;
    return n * factorial(n - 1);


}

	let consolid=consolidate(0,1,0,0,a,b,c,d);

	for (let i=0; i<n-1;i++){
	

	let quotient=(cHexMultiply(...cHexNaturalExponent(a,b,c,d,(i+2)),0,(1/(factorial(i+2))),0,0));
	

	
	consolid=consolidate(...consolid,...quotient);
	
	let newSum=consolid;

	}

	let output=consolid;
return output;	

}


	for (let i=0; i<403; i++){


//console.log(" " +  " " + i, cHexExpPowerSeries(0,0,0,1*((6*Math.PI/400)*i),200));
//console.log(" " +  " " + i, cHexExpPowerSeries(6,1,0,0,17));
}
