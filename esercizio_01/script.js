var input = document.getElementById("input")
var btn = document.getElementById("btn").addEventListener("click", function(){

  sayHallo(input)

});

function sayHallo(nome){

  var stringa = 'ciao'
  var finale = nome + stringa

  console.log(nome.value)
  console.log(finale)

}
