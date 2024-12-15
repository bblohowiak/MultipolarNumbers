function cHexModulusNatural(a,b,c,d){

const conjProductArray=[];
let cStar = (c+6)%12;

conjProductArray.push(...cHexMultiply(a,b,c,d,a,b,cStar,d));

const sqrtArray=cHexSqrt(...conjProductArray);

//returns an array containing a sign, real-like magnitude, and two zeros.
return sqrtArray;

}
