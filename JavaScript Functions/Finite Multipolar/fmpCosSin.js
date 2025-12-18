function fmpCosSin(a,b,e){
//a is the cycle of exponentiation
//b is the argument
//e is the quantity of signs in the multipolar system > 1
//outputs 0 for orthants that a signed s under repeat self-multiplication bypasses


	let argumentNose=b%Math.PI;
	let csRealMag=Math.abs(Math.cos(argumentNose));
	let csImMag=Math.sin(argumentNose);
	let orthantCount=((Math.floor(b/(Math.PI/2)))%(e*2))+1;


const map01 = new Map([
  ["a", 2+"-"+3],
  ["b", 430],
  ["c", 24]
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
map01.set(((i*2)+1)+"-"+j, realProductSign+"-"+imaginaryProductSign);
	
	
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
map01.set(((i*2)+1)+"-"+j, realProductSign+"-"+imaginaryProductSign);

	if (i==((e/2)-2) && j>3){
	j=(e*2);
}


}

}
}

const numb = map01.get(a+"-"+orthantCount);
console.log(numb);
//document.getElementById("demo").innerHTML = "There are " + numb + " apples.";


	if (numb != undefined){
//write a thing that parses numb 
		const signsArray = numb.split('-');
		signsArray[0]=Number(signsArray[0]);
		signsArray[1]=Number(signsArray[1]);

		if (csRealMag==0){
		var csRealSign=0;
} else {
		var csRealSign=signsArray[0];

}
	
	if (csImMag==0){
		var csImSign=0;
} else {
		var csImSign=signsArray[1];		
}



		const sinCosArray=[csRealSign,csRealMag,csImSign,csImMag];
		return sinCosArray;
} else {
const signsArray = [0,0];
const sinCosArray=[signsArray[0],0,signsArray[1],0];
return sinCosArray;
}

}
