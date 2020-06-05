/*# VALIDA E-MAIL [expressão regular] */
function verificaEmail(vc_campo) {
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(vc_campo)) {
  		return true;
	}
	
	return false;
}

/* VALIDAR CPF */
function valida_CPF(s)    {
    var i;
    s = limpa_string(s);
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
	
    	for (i = 0; i < 9; i++){
			d1 += c.charAt(i)*(10-i);
			/*
			d1 = 0
			c = 441231688 
			4*10 4*9 1*8 2*7 3*6 1*5 6*4 8*3 8*2
			
			d1=185
			*/
			
    	}
		if (d1 == 0) return false;
    
		d1 = 11 - (d1 % 11);
		/*
		185 = 11 - (185 % 11)
		d1=9 (verdadeiro)
		 */
    
		if (d1 > 9) d1 = 0;
	    
		if (dv.charAt(0) != d1){
			return false;
			/*
			dv = 25
			*/
    	}
		
		d1 *= 2;
	    
		for (i = 0; i < 9; i++){
	        d1 += c.charAt(i)*(11-i);
	    }
    
		d1 = 11 - (d1 % 11); 
   	 	if (d1 > 9) d1 = 0;
	
	    if (dv.charAt(1) != d1){
	        return false;
	    }
		
	return true;
}

function limpa_string(str){
	str=str.replace(/\D+/g, '');

	return str
}
