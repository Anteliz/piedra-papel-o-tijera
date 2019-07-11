$(document).ready(function(){
	$('#piedra, #papel, #tijera').click(function(){
		var eleccion = $(this).attr("id");
		$('#u_ele').html(eleccion);

		var maq = Math.floor(Math.random()*3);
		if (maq == 0){
			maq = "piedra";
		}else if (maq == 1){
			maq = "papel";
		}else if (maq == 2){
			maq = "tijera";
		}
		if (maq == 0){
			$('#m_ele').css("color","red");
		}else if (maq == 1){
			$('#m_ele').css("color","blue");
		}else if (maq == 2){
			$('#m_ele').css("color","green");
		}

		$('#m_ele').html(maq);

		var tu = 0;
		var pc = 0;
		if(eleccion == 'piedra'){
			if(maq == 'piedra'){
				res = "Empataste:/";
				tu = tu;
				pc = pc;
			}else if(maq == 'papel'){
				res = "Perdiste:c";
				tu = tu;
				pc = pc + 1;
			}else if(maq == 'tijera'){
				res = "Ganaste:D";
				tu = tu + 1;
				pc = pc;
			}
		}else if(eleccion == 'papel'){
			if(maq == 'piedra'){
				res = "Ganaste:D";
				tu = tu + 1;
				pc = pc;
			}else if(maq == 'papel'){
				res = "Empataste:/";
				tu = tu;
				pc = pc;
			}else if(maq == 'tijera'){
				res = "Perdiste:c";
				tu = tu;
				pc = pc + 1;
			}
		}else if(eleccion == 'tijera'){
			if(maq == 'piedra'){
				res = "Perdiste:c";
				tu = tu;
				pc = pc + 1;
			}else if(maq == 'papel'){
				res = "Ganaste:D";
				tu = tu + 1;
				pc = pc;
			}else if(maq == 'tijera'){
				res = "Empataste:/";
				tu = tu;
				pc = pc;
			}
		}
		$('#res').html(res);
		$('#tu').html(tu);
		$('#pc').html(pc);
	})
})