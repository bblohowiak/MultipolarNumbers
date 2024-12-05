function cHexArgument(a,b,c,d) {
//combination of a&c indicates which cycle of exponentiation, cycleID=1->s^theta, cycleID=2 s5^theta, cycleID=0->s3^theta
//not for use with rootless orthants
//let's compute cycleID

	if ((a==0 && c==2)){var cycleID=0;}
	if ((a==6 && c==2)) {var cycleID=0;}
	if ((a==6 && c==8)) {var cycleID=0;}
	if ((a==0 && c==8)){var cycleID=0;}


	if ((a==0 && c==0)){var cycleID=1;}
	if ((a==2 && c==0)) {var cycleID=1;}
	if ((a==2 && c==2)){var cycleID=1;}
	if ((a==4 && c==2 )){var cycleID=1;}
	if ((a==4 && c==4 )){var cycleID=1;}
	if ((a==6 && c==4)){var cycleID=1;}
	if ((a==6 && c==6 )) {var cycleID=1;}
	if ((a==8 && c==6)) {var cycleID=1;}
	if ((a==8 && c==8 )){var cycleID=1;}
	if ((a==10 && c==8 )){var cycleID=1;}
	if ((a==10 && c==10 )){var cycleID=1;}
	if ((a==0 && c==10)) {var cycleID=1;}
	
	if ((a==0 && c==4)){var cycleID=2;}
	if ((a==10 && c==4)) {var cycleID=2;}
	if ((a==10 && c==2)) {var cycleID=2;}
	if ((a==8 && c==2)){var cycleID=2;}
	if ((a==8 && c==0)){var cycleID=2;}
	if ((a==6 && c==0)){var cycleID=2;}
	if ((a==6 && c==10)) {var cycleID=2;}
	if ((a==4 && c==10)) {var cycleID=2;}
	if ((a==4 && c==8)){var cycleID=2;}
	if ((a==2 && c==8)){var cycleID=2;}
	if ((a==2 && c==6)){var cycleID=2;}
	if ((a==0 && c==6)) {var cycleID=2;}

//how far in radians are we from 1?

//if a=0 and c=0 then between 0-pi/2 radians
//if a=2 and c=0 then between pi/2-pi radians
//if a=2 and c=0 then between pi-3pi/2 radians
//if a=4 and c=0 then between 3pi/2-2 radians
//if a=4 and c=0 then between 2 0-pi/2 radians--increment factor every four

//how do you know exactly how much between? Each orthant is at most pi/2 radians, so how many radians from axis of orthant entry (aoeRads) to add to the cumulative number of radians at point of orthant entry, which assumes an orientation provided by the path of the imaginary-like unit; for a given orthant, what is its point of entry?

//if a=0 and c=0 then real axis point of entry
//if a=2 and c=0 then imaginary axis point of entry
//if a=2 and c=2 then real
//if a=4 and c=2 then imaginary...
//AKA if a=c, real axis point of entry ELSE imaginary axis point of entry
//if in an imaginary-axis point of entry orthant, use cos(-1*b)-(Math.PI/2) ELSE cos(b)

//Math.atan2() returns  distance in radians between the ositive xaxis and (x, y), for some reason in reverse sequence Math.atan2(y, x).



	if (((a==0 && c==0)||a==0 && c==2)||(a==0 && c==4)){ var orthantIndex=0;}
	if (((a==2 && c==0)||a==6 && c==2)||(a==10 && c==4)) {var orthantIndex=1;}
	if (((a==2 && c==2)||a==6 && c==8)||(a==10 && c==2)) {var orthantIndex=2;}
	if (((a==4 && c==2 )||a==0 && c==8)||(a==8 && c==2)){var orthantIndex=3;}
	if ((a==4 && c==4 )||(a==8 && c==0)){var orthantIndex=4; }
	if ((a==6 && c==4) ||(a==6 && c==0)){var  orthantIndex=5;}
	if ((a==6 && c==6 )||(a==6 && c==10)) {var orthantIndex=6;}
	if ((a==8 && c==6)||(a==4 && c==10)) {var orthantIndex=7;}
	if ((a==8 && c==8 )||(a==4 && c==8)){var orthantIndex=8;}
	if ((a==10 && c==8 )||(a==2 && c==8)){var orthantIndex=9;}
	if ((a==10 && c==10 )||(a==2 && c==6)){var orthantIndex=10;}
	if ((a==0 && c==10)||(a==0 && c==6)) {var orthantIndex=11;}

	let orthantEntryDistance=((Math.PI)/2)*orthantIndex;

if (b*d!=0){
	if ((a==c || ((a-c)%4)==0)||(c-a==2)){
		var betweenMeasure=Math.atan2(d, b);
} else {
		var betweenMeasure=Math.atan2(d, -b)-(Math.PI/2);
}

	var outputTheta=orthantEntryDistance+betweenMeasure;
} else {
//if pure imaginary, s^x cycle
	if (b==0 && cycleID==1){
		var outputTheta=(Math.PI/2)*(c+1);
//if pure real, s^x cycle
	} else if (d==0 && cycleID==1){
		var outputTheta=(Math.PI/2)*(c);
	}


//if pure imaginary, s5^x cycle
	if (b==0 && cycleID==2){
		if (c==4){var outputTheta=(Math.PI/2)*(1);}
		if (c==2){var outputTheta=(Math.PI/2)*(3);}
		if (c==0){var outputTheta=(Math.PI/2)*(5);}
		if (c==10){var outputTheta=(Math.PI/2)*(7);}
		if (c==8){var outputTheta=(Math.PI/2)*(9);}
		if (c==6){var outputTheta=(Math.PI/2)*(11);}
//if pure real, s5^x cycle
	} else if (d==0 && cycleID==2){
		if (a==0){var outputTheta=(Math.PI/2)*(0);}
		if (a==2){var outputTheta=(Math.PI/2)*(2);}
		if (a==4){var outputTheta=(Math.PI/2)*(4);}
		if (a==6){var outputTheta=(Math.PI/2)*(6);}
		if (a==8){var outputTheta=(Math.PI/2)*(8);}
		if (a==10){var outputTheta=(Math.PI/2)*(10);}
	}


//if pure imaginary, s3^x cycle
	if (b==0 && cycleID==0){
		if (c==2){var outputTheta=(Math.PI/2)*(1);}
		if (c==8){var outputTheta=(Math.PI/2)*(3);}
//if pure real, s3^x cycle
	} else if (d==0 && cycleID==0){
		if (a==0){var outputTheta=(Math.PI/2)*(0);}
		if (a==6){var outputTheta=(Math.PI/2)*(2);}	}



}




return outputTheta;
}
