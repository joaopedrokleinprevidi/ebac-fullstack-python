


$(document).ready(function(){
    $("#buttonCadastrar").click(function(){
        const nomeDaTarefa = $('#inputNomeDaTarefa').val();

        const listaDeTarefa = $(`<div class="elemento"> <li>${nomeDaTarefa}</li> </div>`);


        $("#listaDeTarefas").append(listaDeTarefa);

        $('#inputNomeDaTarefa').val('');
    })
})


$('#listaDeTarefas').click(function(){
    $(this).toggleClass('linha-colorida');
});