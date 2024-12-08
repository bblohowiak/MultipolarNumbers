function cHexExpPowerSeries(a,b,c,d,n){
//recommend n<200
//(0,1,9) yields a good approximation of e; (6,1,9) yields a good approximation of its multiplicative inverse.
//hexapolar units not in the complex plane converge to values other than e^-1 depending on whether their roots are real-like or imaginary-like.
//exp(s1.57)-> orthant that a signed s under repeat self-multiplication bypasses

/*if you don't include the //	d=d%(Math.PI*6);, even cHexExpPowerSeries(0,0,2,1*((6*Math.PI/200)*i),200)) produces after 200 iterations
0 0
1 1.0000000005484435
2 8
3 5.661078677374039e-10

but if you include the modulo operation, the same arguments produce

0 0
1 1
2 0
3 0
*/
	d=d%(Math.PI*6);

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

//beware floating-point decimals! computations with Math.PI evidence errors
//there are irregularities with s^1 unlike the expected values of s^3.
//is it "information"?
console.log(" " +  " " + i, cHexExpPowerSeries(0,0,0,1*((6*Math.PI/400)*i),200));
//console.log(" " +  " " + i, cHexExpPowerSeries(6,1,0,0,200));
}
