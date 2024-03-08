let funcionariosRegistrados = []

const valorHrTrabalhada = 450

const btnVerify = document.querySelector('.btnVerify')

btnVerify.addEventListener('click', () => {
    const funcionarioCodigoInput = document.getElementById('funcionarioCodigoInput').value
    const msgErrorId = document.getElementById('errorMSGId')
    const funcionarioTurnoInput = document.getElementById('funcionarioTurnoInput').value.toUpperCase()
    const errorMSGTurno = document.getElementById('errorMSGTurno')
    const funcionarioCategoriaInput = document.getElementById('funcionarioCategoriaInput').value.toUpperCase()
    const errorMSGCategoria = document.getElementById('errorMSGCategoria')
    let funcionarioHrsMesInput = document.getElementById('funcionarioHrsMesInput').value
    const errorMSGHrsMes = document.getElementById('errorMSGHrsMes')

    if (funcionarioCodigoInput < 0 || funcionarioCodigoInput > 10 || funcionarioCodigoInput == '' || funcionarioCodigoInput == undefined || funcionarioCodigoInput == null) {
        msgErrorId.style.display = 'inherit'
    } else if (funcionariosRegistrados.includes(funcionarioCodigoInput)) {
        msgErrorId.style.display = 'inherit'
        msgErrorId.textContent = 'funcionario já registrado'
    } else {
        msgErrorId.style.display = 'none'
    }

    switch (funcionarioCategoriaInput) {
        case 'G':
        case 'O':
            errorMSGCategoria.style.display = 'none'
            break;
        case null:
            errorMSGCategoria.style.display = 'inherit'
            break;
        case '':
            errorMSGCategoria.style.display = 'inherit'
            break;
        default:
            errorMSGCategoria.style.display = 'inherit'
            break;
    }

    switch (funcionarioTurnoInput) {
        case 'M':
        case 'V':
        case 'N':
            errorMSGTurno.style.display = 'none'
            break;
        case null:
            errorMSGTurno.style.display = 'inherit'
            break;
        case '':
            errorMSGTurno.style.display = 'inherit'
            break;
        default:
            errorMSGTurno.style.display = 'inherit'
            break;
    }

    if (funcionarioHrsMesInput == '' || funcionarioHrsMesInput == undefined || funcionarioHrsMesInput == null) {
        errorMSGHrsMes.style.display = 'inherit'
    } else {
        errorMSGHrsMes.style.display = 'none'
    }

    if (errorMSGHrsMes.style.display !== 'inherit' && errorMSGCategoria.style.display !== 'inherit' && errorMSGTurno.style.display !== 'inherit' && msgErrorId.style.display !== 'inherit') {
        const containerFuncionarios = document.getElementById('containerFuncionarios')
        const funcionario = document.createElement('div')
        funcionario.classList.add = `funcionario`

        funcionariosRegistrados.push(funcionarioCodigoInput)

        salarioInicial = calcularSalarioInicial(funcionarioCategoriaInput, funcionarioTurnoInput, funcionarioHrsMesInput)

        valorAuxilio = calcularAuxAlimentacao(calcularSalarioInicial(funcionarioCategoriaInput, funcionarioTurnoInput, funcionarioHrsMesInput))

        salarioTotal = calcularSalarioFinal(calcularSalarioInicial(funcionarioCategoriaInput, funcionarioTurnoInput, funcionarioHrsMesInput), calcularAuxAlimentacao(calcularSalarioInicial(funcionarioCategoriaInput, funcionarioTurnoInput, funcionarioHrsMesInput)))

        funcionario.innerHTML = `
            <h1>Funcionario: ${funcionarioCodigoInput}</h1>
            <h4>Codigo: ${funcionarioCodigoInput}</h5>
            <h5>Salario inicial: ${salarioInicial}</h5>
            <h5>Valor auxilio: ${valorAuxilio}</h5>
            <h5>Salario total: ${salarioTotal}</h5>
            `

        containerFuncionarios.appendChild(funcionario)

    }


})

function calcularSalarioInicial(categoria, turno, horas) {
    let valorTotal

    if (categoria == 'G' && turno == 'N') {
        valorTotal = horas * (valorHrTrabalhada * 0.18)
        return valorTotal
    }

    if (categoria == 'G' && turno == 'M' || turno == 'V') {
        valorTotal = horas * (valorHrTrabalhada * 0.15)
        return valorTotal
    }

    if (categoria == 'O' && turno == 'N') {
        valorTotal = horas * (valorHrTrabalhada * 0.13)
        return valorTotal
    }

    if (categoria == 'O' && turno == 'M' || turno == 'V') {
        valorTotal = horas * (valorHrTrabalhada * 0.10)
        return valorTotal
    }
}

function calcularAuxAlimentacao(valor) {
    if (valor < 300) {
        const auxAlimentacao = (valor * 0.20)
        return auxAlimentacao
    }

    if (valor >= 300 || valor <= 600) {
        const auxAlimentacao = (valor * 0.15)
        return auxAlimentacao
    }

    if (valor > 600) {
        const auxAlimentacao = (valor * 0.5)
        return auxAlimentacao
    }

}

function calcularSalarioFinal(valorSalario, valorAuxilio) {
    return valorSalario + valorAuxilio
}