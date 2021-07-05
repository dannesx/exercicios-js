// Por qual motivo o código abaixo retorna com erros?
{
   var cor = 'preto';
   const marca = 'Fiat';
   let portas = 4;
 }
 console.log(var, marca, portas);
 // Porque as variáveis foram criadas dentro de um escopo local, e sendo chamadas no escopo global
 
 // Como corrigir o erro abaixo?
 function somarDois(x) {
   const dois = 2;
   return x + dois;
 }
 function dividirDois(x) {
   return x + dois;
 }
 somarDois(4);
 dividirDois(6);

 // Declarando a variável `const dois` fora do escopo local
 
 // O que fazer para total retornar 500?
 var numero = 50;
 
 for(var numero = 0; numero < 10; numero++) {
   console.log(numero);
 }
 
 const total = 10 * numero;
 console.log(total);
 
 // alterar o tipo de variável para let, ou apagar a declaração de var no escopo do laço `for`