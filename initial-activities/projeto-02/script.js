const btnSubmit = document.getElementById('btnSubmit')
const idCandidato = document.getElementById('candidatoId')
const nCandidatosM = document.querySelector('.nCandidatosM')
const nCandidatosF = document.querySelector('.nCandidatosF')
const idadeExperienciaM = document.querySelector('.idadeExperienciaM')
const porcentagemEspecifica = document.querySelector('.porcentagemEspecifica')
const mulheresIdadeInferior = document.querySelector('.mulheresIdadeInferior')
const mulheresExperiencia = document.querySelector('.mulheresExperiencia')

let indexCandidato = 1

let numeroCandidatosM = 0, numeroCandidatosF = 0, idadesCandidatosM = [], idadesCandidatosF = []

document.addEventListener('DOMContentLoaded', () => {
    idCandidato.textContent = `Candidato ${indexCandidato}`
})

btnSubmit.addEventListener('click', () => {
    if (indexCandidato === 1) {
        indexCandidato++
        validarInputs()
    } else {
        indexCandidato++
        validarInputs()
    }
})

function validarInputs() {
    let idadeInput = document.getElementById('idade').value
    idadeInput = parseInt(idadeInput)
    const sexoInput = document.getElementById('sexo').value.toUpperCase()
    const temExperienciaInput = document.getElementById('temExperiencia').value

    if (sexoInput === 'M') {
        numeroCandidatosM++
        nCandidatosM.innerHTML = `${numeroCandidatosM}`
    } else if (sexoInput === 'F') {
        numeroCandidatosF++
        nCandidatosF.innerHTML = `${numeroCandidatosF}`
    }

    if (sexoInput === 'M' && idadeInput !== "") {
        idadesCandidatosM.push(idadeInput)
        idadeExperienciaM.innerHTML = idadeMedia()
        porcentagemEspecifica.innerHTML = idadeEspecificaM()
    }

    if (sexoInput === 'F' && temExperienciaInput === 'S' && idadeInput !== "" && temExperienciaInput !== "") {
        idadesCandidatosF.push(idadeInput)
        mulheresIdadeInferior.innerHTML = idadeEspecificaF()
        mulheresExperiencia.innerHTML = idadeComExperiencia()
    }

    idadeEspecificaM()

    idCandidato.textContent = `Candidato ${indexCandidato}`
}

function idadeMedia() {
    let somandoValores = 0

    for (let i = 0; i < idadesCandidatosM.length; i++) {
        somandoValores = idadesCandidatosM[i] + somandoValores
    }

    somandoValores = parseInt(somandoValores/idadesCandidatosM.length)

    return somandoValores
}

function idadeEspecificaM() {
    let idadeEspecificaQtda = 0

    for (let i = 0; i < idadesCandidatosM.length; i++) {
        if (idadesCandidatosM[i] >= 45) {
            idadeEspecificaQtda++
        }
    }

    const porcentagemIdadeEspecifica = ((idadeEspecificaQtda/idadesCandidatosM.length) * 100).toFixed(1)
    return porcentagemIdadeEspecifica
}

function idadeEspecificaF() {
    let idadeEspecificaQtda = 0

    for (let i = 0; i <= idadesCandidatosF.length; i++) {
        if (idadesCandidatosF[i] < 21) {
            idadeEspecificaQtda++
        }
    }

    return idadeEspecificaQtda
}

function idadeComExperiencia() {
    let menorIdade = 132

    for (let i = 0; i <= idadesCandidatosF.length; i++) {
        if (idadesCandidatosF[i] < menorIdade) {
            menorIdade = idadesCandidatosF[i]
        }        
    }

    return menorIdade   
}