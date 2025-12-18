function fmpModulusNatural(a,b,c,d,e){
//a,c must be even or 0
//e is the quantity of signs in the multipolar system > 1
//[these moduli will have signs such that signvalue%4=0 and so the square root is the real-like component magnitude sqrt signed by signvalue/2.]
const conjProductArray=[];
let cStar = (c+e)%(2*e);

conjProductArray.push(...mpComplexMultiply(a,b,c,d,a,b,cStar,d,e));

let realSign = conjProductArray[0];
let realMag = conjProductArray[1];
console.log(" " +  " " + realSign + conjProductArray[0]);
realSign = realSign/2;
realMag = Math.sqrt(realMag);
console.log(" " +  " " + realSign);
conjProductArray[0]=realSign;
conjProductArray[1]=realMag;

const sqrtArray=conjProductArray;


//returns an array containing a sign, real-like magnitude, and two zeros.
return sqrtArray;

}
