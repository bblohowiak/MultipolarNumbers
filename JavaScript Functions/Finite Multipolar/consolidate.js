function consolidate(a,b,c,d,e,f,g,h){
//a,c,e,g must be 0 if mod2, i.e. even or 0
//a,c must be even or 0, twice the sign index (e.g., identity=0, sequitive=2, trinitive=4, quadritive=6, etc.). 
	const consolidArray=[];
	let realSign=0;
	let imSign=0;
	let realMag=0;
	let imMag=0;

	if (a==e){
		realMag=b+f;
	} else {
		realMag=Math.abs(b-f);
}

	if (c==g){
		imMag=d+h;
	} else {
		imMag=Math.abs(d-h);
}

	if (a==e && (b+f) != 0){
	realSign=a;	
	}
	
	if(b>f){
	realSign=a;
} 	

	if (f>b){
	realSign=e;
} 	

	if (b+f==0){
	realSign=0;	
}

	if (c==g && (d+h) != 0){
	imSign=c;	
	}
	
	if(d>h){
	imSign=c;
} 	

	if (h>d){
	imSign=g;
} 	

	if (d+h==0){
	imSign=0;	
}

	consolidArray.push(realSign,realMag,imSign,imMag);

consolid=consolidArray;

return consolid;
}	
