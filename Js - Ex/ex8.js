function fator() { // Função que calcula o fatorial
    let n = document.getElementById("n").value; // Obtém o valor digitado no campo de entrada
    let result = 1 // Inicializa a variável result com 1
    for (let i = 1; i < n; i++) { // Loop que vai de 1 até n-1
        result *= i + 1 // Multiplica result pelo próximo número
        document.getElementById("result").value = result // Mostra o resultado no campo de saída
    }
}
