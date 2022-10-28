
function tocaSom(seletorAudio) {

	const elemento = document.querySelector(seletorAudio);

	if(elemento != null && elemento.localName === 'audio'){
		elemento.play();	
	}else{		
		console.log("Elemento não encontrado ou seletor inválido!!");
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

	const tecla = listaDeTeclas[contador];

	const instrumento = tecla.classList[1];
	
	const idAudio = `#som_${instrumento}`; // template string

	tecla.onclick = () =>{
		tocaSom(idAudio);
	};



	tecla.onkeydown = function (evento){

		if (evento.code === 'Space' || evento.code === 'Enter' ) {
			tecla.classList.add('ativa');
		}
	}



	tecla.onkeyup = function (){
		tecla.classList.remove('ativa')
	}


}


























// let contador = 0;
// // enquanto
// while(contador < listaDeTeclas.length) {

// 	const tecla = listaDeTeclas[contador];

// 	const instrumento = tecla.classList[1];
// 	// template string
// 	const idAudio = `#som_${instrumento}`;

// 	tecla.onclick = () =>{
// 		tocaSom(idAudio);
// 	};

// 	contador++

// 	// console.log(idAudio);
// 	// console.log(contador);

// }










































// function tocaSom(idElementoAudio) {

// 	document.querySelector(idElementoAudio).play();	
// }

// document.querySelectorAll('.tecla');

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;
// // enquanto
// while(contador < listaDeTeclas.length) {

// 	const tecla = listaDeTeclas[contador];

// 	const instrumento = tecla.classList[1];
// 	// template string
// 	const idAudio = `#som_${instrumento}`;

// 	tecla.onclick = () =>{
// 		tocaSom(idAudio);
// 	};

// 	contador++

// 	// console.log(idAudio);
// 	// console.log(contador);


// }
