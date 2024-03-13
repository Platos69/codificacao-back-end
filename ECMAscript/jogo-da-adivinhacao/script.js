const inNumero = document.getElementById('inNumero')

const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')

const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')
const outDica = document.getElementById('outDica')

let iniciouJogo = false
let numeroRandomizado
let chances = 7
let erros = 0
let errosArray = []

btnApostar.addEventListener('click', () => {
    start
})

function start(params) {
    iniciarJogo()
    chances--
}

function iniciarJogo() {
    if (iniciouJogo === false) {
        iniciouJogo = true
        numeroRandomizado = Math.floor(Math.random() * 100 + 1)
        outChances.innerHTML = chances
        rodandoJogo()
    } else {
        rodandoJogo()
    }
}

function rodandoJogo() {
    if (chances > 0) {
        btnApostar.addEventListener('click', () => {
            if (inNumero.value === null || inNumero.value === "") {
                alert('digite um valor')
            } else {                
                if (inNumero.value === numeroRandomizado) {
                    alert('você acertou')
                } else if (inNumero.value < numeroRandomizado) {
                    erros++
                    errosArray.push(inNumero.value)
                    outErros.innerHTML = `${erros}, ${errosArray}`
                    outDica.innerHTML = `Digite um valor maior que ${inNumero.value}`
                } else if (inNumero.value > numeroRandomizado) {
                    outDica.innerHTML = `Digite um valor menor que ${inNumero.value}`
                }
            }
        })
    } else {
        alert('acabou')
    }
}

btnJogar.addEventListener('click', () => {
    chances = 7
    iniciarJogo()
})