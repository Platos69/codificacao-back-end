const inPaciente = document.getElementById('inPaciente')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

const pacientesLista = []
let pacienteAtendimento

document.addEventListener('DOMContentLoaded', () => {
    if (pacientesLista.length === 0) {
        outAtendimento.innerHTML = `Não há pacientes registrados`
    }

    if (pacientesLista.length === 0) {
        outLista.innerHTML = `Não há pacientes registrados`
    }
})

btnAdicionar.addEventListener('click', () => {
    console.log(inPaciente.value, pacienteAtendimento)
    if (inPaciente.value === null || inPaciente.value === "") {
        alert('Não foi digitado um valor válido')
    } else if (inPaciente.value === pacienteAtendimento){
        alert('Este paciente já está em atendiemnto')
    } else {
        pacientesLista.push(inPaciente.value)
        adicionarPaciente()
    }
})

btnUrgencia.addEventListener('click', () => {
    if (inPaciente.value === null || inPaciente.value === "") {
        alert('Não foi digitado um valor válido')
    } else if (inPaciente.value === pacienteAtendimento){
        alert('Este paciente já está em atendiemnto')
    } else {
        if (pacientesLista.includes(inPaciente.value)) {
            const indexToRemove = pacientesLista.indexOf(inPaciente.value);
            pacientesLista.splice(indexToRemove, 1);
            pacientesLista.unshift(inPaciente.value)
            adicionarPaciente();
        } else {
            pacientesLista.unshift(inPaciente.value)
            adicionarPaciente()
        }
    }
})

btnAtender.addEventListener('click', () => {
    if (inPaciente.value === null || inPaciente.value === "") {
        alert('Não foi digitado um valor válido')
    } else {
        if (pacientesLista.includes(inPaciente.value)) {
            const indexToRemove = pacientesLista.indexOf(inPaciente.value);
            pacientesLista.splice(indexToRemove, 1);
            pacienteAtendimento = inPaciente.value
            outAtendimento.innerHTML = `${pacienteAtendimento}`
            adicionarPaciente();
        } else {
            alert('Este paciente não está registrado na fila')
        }
        
    }
})

function adicionarPaciente() {
    if (outLista.length === 0) {
        outLista.innerHTML = `Não há pacientes registrados`
    } else {
        outLista.innerHTML = ""
        for (let i = 0; i < pacientesLista.length; i++) {
            outLista.innerHTML += `${pacientesLista[i]}`
        }
    }
}

