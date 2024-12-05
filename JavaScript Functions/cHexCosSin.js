function cHexCosSin(a,b) {
//a indicates which cycle of exponentiation, csCycleID=1->s^theta, csCycleID=2 s5^theta, csCycleID=0->s3^theta
//b indicates a distance in radians
//not for use with rootless orthants

	let argumentNose=b%Math.PI;
	let csrealMag=Math.abs(Math.cos(argumentNose));
	let csimMag=Math.sin(argumentNose);
	let orthantCount=(Math.floor(b/(Math.PI/2)))%12;
	
	if (a==0 && orthantCount%4==0){
	var csrealSign=0;
	var csimSign=2;}
	if (a==0 && orthantCount%4==1){
	var csrealSign=6;
	var csimSign=2;}
	if (a==0 && orthantCount%4==2){
	var csrealSign=6;
	var csimSign=8;}
	if (a==0 && orthantCount%4==3){
	var csrealSign=0;
	var csimSign=8;}

	if (a==1 && (orthantCount==0||orthantCount==12)){
	var csrealSign=0;
	var csimSign=0;}
	if (a==1 && orthantCount==1){
	var csrealSign=2;
	var csimSign=0;}
	if (a==1 && orthantCount==2){
	var csrealSign=2;
	var csimSign=2;}
	if (a==1 && orthantCount==3){
	var csrealSign=4;
	var csimSign=2;}
	if (a==1 && orthantCount==4){
	var csrealSign=4;
	var csimSign=4;}
	if (a==1 && orthantCount==5){
	var csrealSign=6;
	var csimSign=4;}
	if (a==1 && orthantCount==6){
	var csrealSign=6;
	var csimSign=6;}
	if (a==1 && orthantCount==7){
	var csrealSign=8;
	var csimSign=6;}
	if (a==1 && orthantCount==8){
	var csrealSign=8;
	var csimSign=8;}
	if (a==1 && orthantCount==9){
	var csrealSign=10;
	var csimSign=8;}
	if (a==1 && orthantCount==10){
	var csrealSign=10;
	var csimSign=10;}
	if (a==1 && orthantCount==11){
	var csrealSign=0;
	var csimSign=10;}

	if (a==2 && (orthantCount==0||orthantCount==12)){
	var csrealSign=0;
	var csimSign=4;}
	if (a==2 && orthantCount==1){
	var csrealSign=10;
	var csimSign=4;}
	if (a==2 && orthantCount==2){
	var csrealSign=10;
	var csimSign=2;}
	if (a==2 && orthantCount==3){
	var csrealSign=8;
	var csimSign=2;}
	if (a==2 && orthantCount==4){
	var csrealSign=8;
	var csimSign=0;}
	if (a==2 && orthantCount==5){
	var csrealSign=6;
	var csimSign=0;}
	if (a==2 && orthantCount==6){
	var csrealSign=6;
	var csimSign=10;}
	if (a==2 && orthantCount==7){
	var csrealSign=4;
	var csimSign=10;}
	if (a==2 && orthantCount==8){
	var csrealSign=4;
	var csimSign=8;}
	if (a==2 && orthantCount==9){
	var csrealSign=2;
	var csimSign=8;}
	if (a==2 && orthantCount==10){
	var csrealSign=2;
	var csimSign=6;}
	if (a==2 && orthantCount==11){
	var csrealSign=0;
	var csimSign=6;}



	if (realMag==0){
	var csrealSign=0;
	}
	
	if (imMag==0){
	var csimSign=0;
	}
	
	
	outputArray=[csrealSign,csrealMag,csimSign,csimMag];



return outputArray;
}
