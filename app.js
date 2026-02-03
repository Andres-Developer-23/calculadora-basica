const btn = document.getElementById('btn');
const primerNumero = document.getElementById('primerNumero');
const segundoNumero = document.getElementById('segundoNumero');
const resultados = document.getElementById('resultado');
const operaciones = document.getElementById('operaciones')

function calcular() {
    num1 = parseInt(primerNumero.value);
    num2 = parseInt(segundoNumero.value);
    const operacion = operaciones.value;
    
    if (isNaN(num1) || isNaN(num2)) {
       resultados.innerText = 'Ingresa numeros validos';
       return
    } else if (operacion === 'sumar') {
        resultados.innerText = num1 + num2;
    } else if (operacion === 'restar') {
        resultados.innerText = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        resultados.innerText = num1 * num2;
    } else if (operacion === 'division') {
        resultados.innerText = num1 / num2;
        if (num2 === 0) {
            resultados.innerText = 'no se puede dividir por 0'
        }
    }
     else {
        resultados.innerText = 'Operacion invalida';
    }
}
btn.addEventListener('click', calcular)