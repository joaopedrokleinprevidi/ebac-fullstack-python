const button = document.querySelector('#button')
let linhas = '';

button.addEventListener('click', ()=> {
    const nome = document.querySelector('#nomeDoUsuario')
    const telefone = document.querySelector('#telefone')

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'

    linhas += linha;

    console.log(nome.value, telefone.value)

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;

    console.log(linhas)

    nome.value = ''
    telefone.value = ''

})