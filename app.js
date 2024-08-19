let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafio";


function botonClicado() {
    console.log ("El Boton Fue Clicado");
}
function ciudad() {
    let ciudad = 0;
ciudad = prompt ("Nombre de una ciudad de Brasil");
alert (`Estuve en ciudad ${ciudad} y me acorde de ti`);
}
function amo() {
    alert ("Yo amo JS");
}
function suma(){
    let numero1= 0;
    let numero2= 0;
    let suma = 0;
numero1 = parseInt (prompt ("Ingresa un número"));
numero2 = parseInt (prompt ("Ingresa otro número"));
suma = parseInt (numero1 + numero2);
alert (suma);
}

/*
function mostrarHola() {
    console.log("¡Hola, mundo!");
  }
  
  mostrarHola();

  function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("Alice");

  function mostrarNumero(numero) {
    return numero *2;
    
  }
  
let resultadoMostrarNumero = mostrarNumero(10);
console.log (resultadoMostrarNumero);

function mostarPromedio(nuemro1, numero2, numero3) {
    return (nuemro1+numero2+numero3)/3;
}
let resultadoPromedio = mostarPromedio (4,4,4);
console.log (resultadoPromedio);

function numeroMayor(nuemro1, numero2) {
    return nuemro1>numero2 ? nuemro1 : numero2;
}
let resultadoMayor = numeroMayor (14, 29);
console.log (resultadoMayor); 


function mostrarNumeroDoblre(numeroa) {
    return numeroa * numeroa;
    
  }
  
let resultadoNumeroDoble = mostrarNumeroDoblre (5);
console.log (resultadoNumeroDoble);
*/