let operacion1 = "";
let operdigitada = document.getElementById("operaciondigitada");
let resul = document.getElementById("resultado");

let operador = "";
let numero = "";
let ultimodigito = "";

function limpiar() {
  operacion1 = "";
  operdigitada.innerHTML = "";
  resul.innerHTML = "";
  operador = "";
  numero = "";
  ultimodigito = "";
}

function calcular() {
  operdigitada.innerHTML = operacion1;
  operacion1 = eval(operacion1);
  resul.innerHTML = operacion1;
  operacion1 = operacion1.toString();
  numero = "";
}

function digito(num) {
  numero = numero + num;
  operacion1 = operacion1 + num;
  operdigitada.innerHTML = operacion1;
  if (ultimodigito == "operacion") {
    ultimodigito = "numero";
  }
}

function operacion(operador) {
  operdigitada = operador;
  ultimodigito = "operacion";
  operacion1 = operacion1 + operador;
  numero = "";
  operdigitada.innerHTML = operacion1;
}

function porcentaje(numero, porcentaje) {
  numero = (numero / 100) * porcentaje;
}

function exponente() {}

function factorial() {}
