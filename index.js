var cardUm = window.document.getElementById ("card1")
var cardDois = window.document.getElementById ("card2")
var cardTres = window.document.getElementById ("card3")
var SetaD = window.document.getElementById ("setad")
var SetaE = window.document.getElementById ("setae")


function RolarDireita(){
cardUm.style = "display:none"
cardTres.style = "display:flex"
SetaD.style ="display:none"
SetaE.style= "display:flex"
}

function RolarEsquerda(){
cardUm.style ="display:flex"
cardTres.style ="display:none"
SetaD.style ="display:flex"
SetaE.style="display:none"
}