var input = document.getElementsByClassName('input')[0]
var btn = document.getElementsByClassName('btn')[0]
var btns = document.getElementsByClassName('btns')[0]
var li = document.getElementsByClassName('elemento')[0]
var ul = document.getElementById('ulContainer')
var arrayValues = [];

btn.addEventListener('click', addToArray)

function addToArray(){
  var valueInput =  input.value
  arrayValues.push(valueInput)

  ul.innerHTML = ''

  printList(arrayValues)

}

function printList(arrayValues){

  for(i = 0; i < arrayValues.length; i++){

      var li = document.createElement("li")
      li.innerHTML = arrayValues[i]
      ul.appendChild(li)
  }
}
