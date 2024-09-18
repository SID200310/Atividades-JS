const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const jogadadoplayer = document.getElementById("jogadadoplayer");
const jogadadocomputador = document.getElementById("jogadadocomputador");

pedra.addEventListener("click", function(){
    console.log("pedra");
})

papel.addEventListener("click", function(){
    console.log("papel");
})

tesoura.addEventListener("click", function(){
    console.log("tesoura");
})