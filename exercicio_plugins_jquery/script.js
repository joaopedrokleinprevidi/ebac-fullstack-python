$(document).ready(function(){
    
    $('#buttonCadastrar').click(function(){
        alert('Cadastrado com sucesso!');
        $('.allInputs').val('');
    })

    $("#telefone").mask('(00) 00000-0000', {placeholder: "(00) 01234-5678"})
    $("#cpf").mask('000.000.000-00', {placeholder: "123.456.789-01"})
    $("#cep").mask('00000-000', {placeholder: "12345-678"})

});

