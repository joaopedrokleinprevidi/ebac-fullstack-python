let passouDeAno;

const alunos = [
    {
        nome: 'jose',
        nota: 7,
    },

    {
        nome: 'roberta',
        nota: 5,
    },

    {
        nome: 'matheus',
        nota: 4,
    },

    {
        nome: 'shyvana',
        nota: 9,
    }
]

function verificaNotaDeAlunos(){
    for(i = 0; i < alunos.length; i++){
        if(alunos[i].nota >= 6){
            console.log(alunos[i].nome)
        }
    }
}

verificaNotaDeAlunos()

