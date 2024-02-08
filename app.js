//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego del Numero Secreto.";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Escoje un numero del 1 al 10";

let numeroSecreto = 0;
let intetos = 0;
let listaumerosSorteados = []
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero ${intetos} ${(intetos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intetos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = ""; 
}
     
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() *numeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log(listaumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else {      
    
        //si el numero geerado esta icluido en la lista
        if (listaumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto.");
    asignarTextoElemento("p",`Escoje un numero del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intetos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();    
    //generar el numero aleatoreo
    //indicar mensaje de intervalo de numeros
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();