function cHexMultiplicativeInverse(a,b,c,d){


let inputMag=cHexModulusEuclidean(a,b,c,d);
//most inputs will have an argument...
const inputArgument=[];
	inputArgument.push(...cHexArgument(a,b,c,d));


//console.log(inputArgument);


	let radiansToUnity=((Math.PI*6)-inputArgument[1])%(Math.PI*6);

const inverseArgument=[inputArgument[0], radiansToUnity];

const inverseArray=[];

		inverseArray.push(...cHexCosSin(inputArgument[0], radiansToUnity));

		inverseArray[1]=inverseArray[1]/inputMag;
		inverseArray[3]=inverseArray[3]/inputMag;

//console.log(inputArgument[0], radiansToUnity);

//for those that do not have an argument
//40,46,100,106,810,84,210,24

	if (inputArgument[0] == undefined){

		const pseudoInput=[];
		const pseudoArgument=[];
		pseudoInput[1]=b;
		pseudoInput[3]=d;
		pseudoInput[0]=0;
		pseudoInput[2]=2;		

		
		pseudoArgument.push(...cHexArgument(pseudoInput[0],pseudoInput[1],pseudoInput[2],pseudoInput[3]));
		let pseudoRadiansToUnity=((Math.PI*2)-pseudoArgument[1])%(Math.PI*2);
		
//console.log(pseudoRadiansToUnity);

		inverseArray.length=0;
		inverseArray.push(...cHexCosSin(0, pseudoRadiansToUnity));

		inverseArray[1]=inverseArray[1]/inputMag;
		inverseArray[3]=inverseArray[3]/inputMag;
		
//rotate into position (sign change)--may be computed via multiplication and I assume hard-coded is more desirable for performance.
		if (a==4 && c==0){
		inverseArray[0]=8;
		inverseArray[2]=10;
		}
		
		if (a==8 && c==10){
		inverseArray[0]=4;
		inverseArray[2]=0;
		}	
		
		if (a==4 && c==6){
		inverseArray[0]=8;
		inverseArray[2]=4;
		}
		
		if (a==8 && c==4){
		inverseArray[0]=4;
		inverseArray[2]=6;
		}		
		
		if (a==10 && c==6){
		inverseArray[0]=2;
		inverseArray[2]=4;
		}
		
		if (a==2 && c==4){
		inverseArray[0]=10;
		inverseArray[2]=6;
		}		
		
		if (a==10 && c==0){
		inverseArray[0]=2;
		inverseArray[2]=10;
		}
		
		if (a==2 && c==10){
		inverseArray[0]=10;
		inverseArray[2]=0;
		}	
			
}

	if (b+d==0){
	inverseArray[1]=[];
	inverseArray[3]=[];
	}


return inverseArray;
}
