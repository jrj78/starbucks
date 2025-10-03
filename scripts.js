/* javascript não é Java. */
/* javascript é uma linguagem de script, interpretada, fraca e dinamicamente tipada. */
/* Algoritmo: Sequência de passos para resolver um problema. 
    1- Saber quem é o botão
    2- Saber quando o botão foi clicado
    3- Saber quem é Bola colorida
    4- Trocar a cor da Bola colorida
    5- Saber quem é o copo
    6- Trocar a imagem do copo


    javascript = script para inserir no index.html
    document = HTML
    querySelector = selecionar um elemento, pegar, buscar.
*/


let circulo = document.querySelector(".circulo") /*vou no index html e pego a classe cirulo*/
let imagem = document.querySelector(".copo") /*vou no index html e pego a classe copo*/


function trocarAcor(cor){
    circulo.style.background = cor /*mudar a cor do circulo*/
}

function trocarImagem(endereco){
    imagem.src = endereco /*mudar a imagem do copo*/
}