const button = document.querySelector('#button')

function validarResposta(e){

    const campoA = document.querySelector('#campoA').value
    const campoB = document.querySelector('#campoB').value

    e.preventDefault()
    if(campoB > campoA){
        alert("Parabéns, você acertou!")
    }else {
        alert("Infelizmente, você errou.")
    }

    console.log(campoA, campoB)
}

button.addEventListener('click', validarResposta)