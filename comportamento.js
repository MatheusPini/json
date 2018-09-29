let botao = document.querySelector('button');
botao.addEventListener('click', function(){
	// let cep = document.querySelector('#cep').value;
	// let api = `https://viacep.com.br/ws/${cep}/json/`;
	let id_candidato = document.querySelector('#id_candidato').value;
	let candidato = "http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/MT/2022802018/3/candidatos";
	let request = new XMLHttpRequest();
	request.open('GET', candidato);

	request.onload = function(){
		let candidadoEleicao = JSON.parse(request.responseText);
		let nomeUrna = document.querySelector("#nomeUrna");
		nomeUrna.innerHTML = candidadoEleicao.nomeUrna;
		// let endereco = JSON.parse(request.responseText);
		// let logradouro = document.querySelector('#logradouro');
		// logradouro.innerHTML = endereco.logradouro;

		// let bairro = document.querySelector('#bairro');
		// bairro.innerHTML = endereco.bairro;

		// let localidade = document.querySelector('#localidade');
		// localidade.innerHTML = endereco.localidade;
	}
	request.send();
	
})