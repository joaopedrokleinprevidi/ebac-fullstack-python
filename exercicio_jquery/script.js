let gerarAtributoAleatorio = '';
let atributosExistentes = []

$(document).ready(function(){
    $("#buttonCadastrar").click(function(){
        const nomeDaTarefa = $('#inputNomeDaTarefa').val();

        if(nomeDaTarefa == ''){
            return;
        }else {

        do {
            gerarAtributoAleatorio = Number(Math.floor(Math.random() * 10001));
        } while (atributosExistentes.includes(gerarAtributoAleatorio));
        atributosExistentes = atributosExistentes + gerarAtributoAleatorio

        const listaDeTarefa = $(`<li class="elemento" data-i="${gerarAtributoAleatorio}"> ${nomeDaTarefa}</li>`);
        gerarAtributoAleatorio = '';

        $("#listaDeTarefas").append(listaDeTarefa);
        $('#inputNomeDaTarefa').val('');
        }
    })

$('#listaDeTarefas').on('click', '.elemento', function(){
    const pegarAtributo = $(this).data('i');
    $(this).toggleClass('linha-colorida');
});

})