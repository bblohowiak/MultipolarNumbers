function fmpSqrt(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1
//some numbers have more than one square root. this function returns only one root per input. a future version might incorporate more rationale (or parameters) for why it returns one root instead of another.

let euclideanModulus=fmpModulusEuclidean(a,b,c,d,e);
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

let argumentArray=fmpArgument(a,b,c,d,e);
    argumentArray[1]=argumentArray[1]/2;

//console.log(argumentArray);

const cosSinArray=fmpCosSin(...argumentArray,e);
	cosSinArray[1]=realLikeMag01;
	cosSinArray[3]=imLikeMag01;


	if (argumentArray[0]==0 && argumentArray[1]==0){
	
//real signs will be 2*index except for e/2
//for a given real sign x, there will be an imaginary sign x+((e/2)-1)%(e*2) 	
//for a given real sign x, there will be an imaginary sign (x+e)+((e/2)-1)%(e*2) 
//for a given real sign x, there will also be a real sign x+e

//the real signs x or x+e will have the same sqrt real sign
//that sqrt real sign will be x/2 if x/2%2==0
//else if ((x+e)%(e*2))/2%2==0 
	
//you will have a&c. given a%2, the sign a' is either a/2 or ((a+e)%(e*2))/2
//c' depends on c; for a given a, c' advances by a difference of e offset by the sign associated with i for the system ((e/2)-1))...decapolar,4 or 14 
//does c==a'+4 or a'+14? that should give you c'
//c-a'%(2*e)==c'

		let aTest=(a/2)%2;
			if (aTest==0){
				var aPrime=a/2;
} else {
				var aPrime=((a+e)%(e*2))/2;			
}

		var cPrime=(((c-aPrime)%(2*e))+(2*e))%(2*e);
		cosSinArray[0]=aPrime;
		cosSinArray[2]=cPrime;
	
	
	}

	if (cosSinArray[1]==0){cosSinArray[0]=0;}
	if (cosSinArray[3]==0){cosSinArray[2]=0;}

return cosSinArray;


}
