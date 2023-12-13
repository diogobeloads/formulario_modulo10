$("#telefone").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");
$("#cep").mask("00000-000");
$("form").validate({
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
    },
    telefone: {
      required: true,
    },
    cpf: {
      required: true,
    },
    cep: {
      required: true,
    },
  },
});

function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;
  let cep = document.getElementById("cep").value;
  let telefone = document.getElementById("telefone").value;

  // Para verificar se os campos nome e email estão preenchidos corretamente
  if (nome === "" || email === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Se todos os campos estiverem preenchidos, exibir um alerta de confirmação
    alert(
      "Formulário enviado com sucesso!\nNome: " + nome + "\nE-mail: " + email
    );
  }
}
