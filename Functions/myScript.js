
// ...DROPDOWN DO MOBILE...............
function myFunction() {
 document.getElementById("myDropdown").classList.toggle("mostrar");
}

window.onclick = function(e) {
 if (!e.target.matches('.menuBar')) {
 let myDropdown = document.getElementById("myDropdown");
   if (myDropdown.classList.contains('mostrar')) {
     myDropdown.classList.remove('mostrar');
   }
 }
}
// ...AVISO DE TRABALHANDO...............
function aviso(){
 alert("Aguarde!\n Estamos trabalhando"); 
}
// ...DROPDOWN DE +JOGOS...............
function jogos(){
  document.getElementById("maisJogos").classList.toggle('game');
}
window.onclick = function(e) {
  if (!e.target.matches(".jogos")) {
  let maisJogos = document.getElementById('maisJogos');
    if (maisJogos.classList.contains('game')) {
      maisJogos.classList.remove('game');
    }
  }
 }

 function carShop(){
  document.getElementById("car").classList.toggle("mostre");
}
window.onclick = function(e) {
  if (!e.target.matches('.carrinho')) {
  let car = document.getElementById("car");
    if (car.classList.contains('mostre')) {
      car.classList.remove('mostre');
    }
  }
 }