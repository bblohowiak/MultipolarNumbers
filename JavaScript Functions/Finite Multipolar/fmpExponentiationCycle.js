function fmpExponentiationCycle(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1

//is this number in an orthant with a cycle of exponentiation? [check a,c ordered pair]
//list the orthants associated with each cycle of natural exponentiation or lack thereof for e.	
//for a multipolar number system with e signs, there are e/2 cycles of imaginary unit exponentiation.the "middle" one is isomorphic to the conventional complex plane.

//for loops...(e-(e-1)) is the first natural exponent of s, cycle 1. it will contain e*2 orthants unless the cycle is for base s^(e/2), in which case it will only have four.
//to get the other cycles, keep adding two to e-(e-1) and don't go past e-1. 

//keys will be all possible ac values given e and then get for key ac the value that encodes exponentiation cycle index and orthant index.


const map01 = new Map([
  ["a", 2+"-"+3],
  ["b", 7300],
  ["c", 2700]
]);

	for (let i=0; i<(e/2);i++){
		for (let j=0; j<(e*2)+1;j++){

//if j==0, if j%2==0 && j!=0, if j%2!=0

	if (j==0){
	map01.set(0+"-"+0, 1+"-"+1);	
	
}
	
	if (j%2==0 && j!=0){
		const product1=mpNaturalExponent(0,0,(i*2),1,e,j);
		const product2=mpNaturalExponent(0,0,(i*2),1,e,(j-1));
		let realProductSign = product1[0];
		let imaginaryProductSign = product2[2];
//console.log(i +"j"+ j+"realProductSign"+realProductSign+" "+imaginaryProductSign);
map01.set(realProductSign+"-"+imaginaryProductSign, ((i*2)+1)+"-"+j);
	
	
	if (i==((e/2)-2) && j>3){
	j=(e*2);
}
}


	if (j%2!=0){
		const product1=mpNaturalExponent(0,0,(i*2),1,e,(j-1));
		const product2=mpNaturalExponent(0,0,(i*2),1,e,j);
		let realProductSign = product1[0];
		let imaginaryProductSign = product2[2];
//console.log(i +"j"+ j+"realProductSign"+realProductSign+" "+imaginaryProductSign);
map01.set(realProductSign+"-"+imaginaryProductSign, ((i*2)+1)+"-"+j);

	if (i==((e/2)-2) && j>3){
	j=(e*2);
}


}

}
}

const numb = map01.get(a+"-"+c);
//console.log(numb);
//document.getElementById("demo").innerHTML = "There are " + numb + " apples.";

if (numb != undefined){
//write a thing that parses numb for the cycleIndexArray
const cycleIndexArray = numb.split('-');
cycleIndexArray[0]=Number(cycleIndexArray[0]);
cycleIndexArray[1]=Number(cycleIndexArray[1]);
return cycleIndexArray;
} else {
const cycleIndexArray = [0,0];
return cycleIndexArray;
}
//each orthant identified by cycle of exponentiation index with 0==none, 1==s, 3=s^3, etc.
//complex plane identified with s^(e/2)
//each orthant identified by position in cycle sequence with 1==0,0, 2==2,0, etc. 0==none
//output is a two-element array with cycle number and orthant position e.g., 0, 0

}
