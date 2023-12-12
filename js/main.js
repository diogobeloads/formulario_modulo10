$("#telefone").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");
$("#cep").mask("00000-000");
$(".menu-hamburguer").click(function () {
  $("nav").slideToggle();
});
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
    endereco: {
      required: true,
    },
  },
});
