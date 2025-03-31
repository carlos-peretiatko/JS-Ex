let contador = 0;
let arrayIndex = 0;
const array = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];

function aoClicar1() {
    document.getElementById("texto").innerHTML = "Hello, world!";
}

function aoClicar2() {
    contador++;
    document.getElementById("texto").innerHTML = contador;
}

function aoClicar3() {
    document.getElementById("texto").innerHTML = array[arrayIndex];
    arrayIndex = (arrayIndex + 1) % array.length;
}

function aoClicar4() {
    const texto = document.getElementById("texto");
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}