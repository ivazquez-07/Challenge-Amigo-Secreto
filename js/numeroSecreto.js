//Inicio de archivo javascript

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

asignarTextoElemento('h1', 'Juego del Número Secreto!');
document.getElementById('valorUsuario').max = numeroMaximo;
//condicionesIniciales();
reiniciarJuego();


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        console.log("Ya se sortearon todos los números posibles");
        console.log(listaNumerosSorteados);
        return;
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();   //Esto se llama recursividad. La funcion es llamada a si misma. 
            // Hay que tener cuidado con la condición de salida para evitar la ausencia de esta y la función quede en un blucle infinito.
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        console.log("Ya se sortearon todos los números posibles");
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log("Se habilita el reinicio del juego");
        document.getElementById('intentar').setAttribute('disabled', 'true');
        console.log("Se deshabilita el botón de intentos");
        listaNumerosSorteados = [];
        console.log("Se inicializa el array de lista de números.");
    } else {
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
        console.log(numeroSecreto);
        //Deshabilitar el botón de nuevo juego
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
        document.getElementById('intentar').removeAttribute('disabled');
    }
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();

    return;
}
