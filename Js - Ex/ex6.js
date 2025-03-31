//Dados dois valores inteiros, escreva um algoritmo que informe se eles são múltiplos ou
//não.

let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");

if (valor1 % valor2 == 0 || valor2 % valor1 == 0) {
    alert("Os valores são múltiplos!");
} else {
    alert("Os valores não são múltiplos!");
} 