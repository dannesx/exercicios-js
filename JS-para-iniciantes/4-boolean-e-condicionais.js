// Verifique se a sua idade é maior do que a de algum parente
var idadeDaniel = 23
var idadeGustavo = 21
console.log(idadeDaniel > idadeGustavo)

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if(idadeDaniel > idadeGustavo){
   console.log("É maior")
} else if(idadeDaniel == idadeGustavo){
   console.log("É igual")
} else {
   console.log("É menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //false
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //truthy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
   console.log("Brasil tem mais habitantes que a China")
} else {
   console.log("Brasil tem menos habitantes que a China")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}