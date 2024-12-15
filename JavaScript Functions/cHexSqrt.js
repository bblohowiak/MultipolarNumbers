function cHexSqrt(a,b,c,d){
//some numbers have more than one square root. this function returns only one root per input. a future version might incorporate more rationale (or parameters) for why it returns one root instead of another.

let euclideanModulus=cHexModulusEuclidean(a,b,c,d);
var realLikeMag01=0;
var imLikeMag01=0;
var realLikeSign01=0;
var imLikeSign01=0;

	if (a%4 == 0){
	realLikeMag01=Math.sqrt((euclideanModulus+b)/2);	
	imLikeMag01=Math.sqrt((euclideanModulus-b)/2);	
	} else {
	realLikeMag01=Math.sqrt((euclideanModulus-b)/2);	
	imLikeMag01=Math.sqrt((euclideanModulus+b)/2);	
	}

let argumentArray=cHexArgument(a,b,c,d);
    argumentArray[1]=argumentArray[1]/2;

//console.log(argumentArray);

const cosSinArray=cHexCosSin(...argumentArray);
	cosSinArray[1]=realLikeMag01;
	cosSinArray[3]=imLikeMag01;


	if (cosSinArray[0]==undefined){
		if (a==4 && c==0){	cosSinArray[0]=2; cosSinArray[2]=10;}
		if (a==4 && c==6){	cosSinArray[0]=2; cosSinArray[2]=4;}
		if (a==10 && c==0){	cosSinArray[0]=2; cosSinArray[2]=10;}
		if (a==10 && c==6){	cosSinArray[0]=2; cosSinArray[2]=4;}

		if (a==8 && c==10){	cosSinArray[0]=4; cosSinArray[2]=6;}
		if (a==8 && c==4){	cosSinArray[0]=4; cosSinArray[2]=0;}
		if (a==2 && c==10){	cosSinArray[0]=4; cosSinArray[2]=6;}
		if (a==2 && c==4){	cosSinArray[0]=4; cosSinArray[2]=0;}
	
	
	}



return cosSinArray;

}
