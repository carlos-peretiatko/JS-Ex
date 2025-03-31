//Crie um programa que pergunte ao usuário se ele deseja pedir uma pizza usando
//confirm(). Se o usuário confirmar, solicite seu sabor de pizza favorito através de
//prompt() e, em seguida, exiba uma mensagem de confirmação com alert().

let texto = confirm ("Você deseja pedir uma pizza?");
if(texto == true){
    let sabor = prompt("Qual sabor deseja?");
    alert("Você pediu uma pizza de " + sabor);
} else {
    alert("Você perdeu uma pizza gratis!");
}