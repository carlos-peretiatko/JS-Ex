//Faça uma pesquisa de satisfação utilizando confirm(). Pergunte ao usuário se ele está
//satisfeito com o serviço ou produto. Com base na resposta, exiba uma mensagem de
//agradecimento com alert() ou peça feedback adicional com prompt()

let satisfacao = confirm("Você está satisfeito com o nosso serviço?");
if (satisfacao == true) {
    alert("Obrigado pela sua satisfação!");
} else {
    let feedback = prompt("O que podemos melhorar?");
    alert("Obrigado pelo seu feedback esperamos melhorar!");
}