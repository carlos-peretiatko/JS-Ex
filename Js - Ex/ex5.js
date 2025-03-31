//Dados dois números inteiros distintos descreva um algoritmo para informar o maior
//valor entre eles

let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");

if (valor1 == valor2) {
    alert("Os valores são iguais!");
} else {
    let maior = Math.max(valor1, valor2);
    alert("O maior valor é: " + maior);
}