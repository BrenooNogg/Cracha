$(document).ready(function () {
	$("#cpf").mask("000.000.000-00", {
		reverse: true
	});
	$('#data').mask('00/00/0000');
	$('#data2').mask('00/00/0000');
});
// mascara de cpf e data com jquery
const firstStep = document.querySelector(".formulario"); // div formulário, exibição 1
let form = document.querySelector("#form"); // tag formulário

const secondStep = document.querySelector(".secondStep"); // div crachá, exibição 2
// resultados do crachá 
let resultNome = document.querySelector(".resultNome");
let resultData = document.querySelector(".resultData");
let resultCpf = document.querySelector(".resultCpf");
let resultFuncao = document.querySelector(".resultFuncao");
let senhaDialog = document.querySelector("#senha");
let btnSecond = document.querySelector(".btn");

// inputs formulário 1(exibição 1)
let nome = document.querySelector("#nome");
let data = document.querySelector("#data");
let cpf = document.querySelector("#cpf");
let funcao = document.querySelector("#select");
let btn = document.querySelector("#btn");
btn.onclick = () => {
	if (data.value == '') {
		$('#data').notify("Campo vazio!", {
			position: "left"
		});
	} else if (data.value.length < 10) {
		$('#data').notify("Campo com poucos caracteres!", {
			position: "left"
		});
	} else {
		data.style.borderColor = "#00b3c0";
	}

	if (cpf.value == '') {
		$('#cpf').notify("Campo vazio!", {
			position: "right"
		});
	} else if (cpf.value.length < 14) {
		$('#cpf').notify("Campo com poucos caracteres!", {
			position: "right"
		});
	} else {
		cpf.style.borderColor = "#00b3c0";
	}

	if (funcao.value == '') {
		$('#select').notify("Escolha uma opção!", {
			position: "left"
		});
	} else {
		$('#select').css('border-color', '#00b3c0');
	}
	let caracteres = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
	let Alfabeto = /([a-zA-Z])/;
	let numeros = /([0-9])/;
	if ($('#nome').val().match(numeros)) {
		$('#nome').notify("Somente letras!", {
			position: "left"
		});
	} else {
		$('#nome').css('border-color', '#00b3c0');
	}
	if ($('#nome').val().match(caracteres)) {
		$('#nome').notify("Somente letras!", {
			position: "left"
		});
	}
	if ($('#nome').val() == '') {
		$('#nome').notify("Campo vazio!", {
			position: "left"
		});
	}

	if (senha.value == '') {
		$('#senha').notify("Campo vazio!", {
			position: "left"
		});
	} else if (senha.value != 'Moldsoft@2022') {
		$('#senha').notify("Senha Incorreta!", {
			position: "left"
		});
	} else {
		$('#senha').css('border-color', '#00b3c0');
	}

	if (nome.value != '' && !$('#nome').val().match(numeros) && !$('#nome').val().match(caracteres) && data.value != '' && data.value.length == 10 && cpf.value != '' && cpf.value.length == 14 && funcao.value != '' && senha.value == 'Moldsoft@2022') {
		$('.formulario').toggle('fold', 1000);
		$('.formulario').css('display', 'none');
		$('.secondStep').css('display', 'block');
		alertify.success('Crachá criado!');
		alertify.set('notifier', 'position', 'top-center');
		$('.resultNome').text($('#nome').val());
		$('.resultData').text($('#data').val());
		$('.resultCpf').text($('#cpf').val());
		$('.resultFuncao').text($('#select').val());
	}
}
$('.eye').click(function () {
	if ($('.eye').attr('src') == 'olhoBlock.png') {
		$('.eye').attr('src', 'olho.png');
		senha.type = 'password';
	} else {
		$('.eye').attr('src', 'olhoBlock.png');
		senha.type = 'text';

	}
});
btnSecond.onclick = () => {
	$('.secondStep').toggle('fold', 1500);
	$('.btn').css('transition', '1s');
	secondStep.style.display = "none";
	firstStep.style.display = "flex";

}

// ação de mudar o valor dos campos
let cNome = document.querySelector('.cNome');

function editarNome() {
	$('.decorar').css('display', 'none');
	$('#resultNome').css('display', 'none');
	$('.cNome').css('display', '');
}
$(".cNome").on("focusout", function () {

	if ($(".cNome").val().length == 0) {
		alertify.error("O nome não pode ser vazio!");
		document.querySelector(".cNome").focus();
	} else {
		$('.decorar').css('display', '');
		$('#resultNome').css('display', '');
		$('.cNome').css('display', 'none');
		let value = document.querySelector(".cNome").value;
		resultNome.innerHTML = value;
	}
});

let cData = document.querySelector('.cData');

function editarData() {
	$('.resultData').css('display', 'none');
	$('.cData').css('display', '');
	$('.cData').mask('00/00/0000');
}
$(".cData").on("focusout", function () {
	if ($(".cData").val().length == 0) {
		alertify.error("O Data não pode ser vazio!");
		document.querySelector(".cData").focus();
	} else {
		$('#resultData').css('display', '');
		$('.cData').css('display', 'none');
		let value = document.querySelector(".cData").value;
		resultData.innerHTML = value;
	}
});

let cCpf = document.querySelector('.cCpf');

function editarCpf() {
	$('.resultCpf').css('display', 'none');
	$('.cCpf').css('display', '');
	$('.cCpf').mask('000.000.000-00');
}
$(".cCpf").on("focusout", function () {
	if ($(".cCpf").val().length == 0) {
		alertify.error("O CPF não pode ser vazio!");
		document.querySelector(".cCpf").focus();
	} else {
		$('#resultCpf').css('display', '');
		$('.cCpf').css('display', 'none');
		let value = document.querySelector(".cCpf").value;
		resultCpf.innerHTML = value;
	}
});
let cSelect = document.querySelector('.cSelect');

function editarSelect() {
	$('.resultFuncao').css('display', 'none');
	$('.underline').css('display', 'none');
	$('.cSelect').css('display', '');
}
$(".cSelect").on("focusout", function () {
	if ($(".cSelect").val().length == 0) {
		alertify.error("Você precisa selecionar um elemento!");
		document.querySelector(".cSelect").focus();
	} else {
		$('#resultFuncao').css('display', '');
		$('.underline').css('display', '');
		$('.cSelect').css('display', 'none');
		let value = document.querySelector(".cSelect").value;
		resultFuncao.innerHTML = value;
	}
});