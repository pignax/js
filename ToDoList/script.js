  var arrayItem = []; //array vuoto dove vado a pushare oggetti
  var arrayFatti = []; //array dove andremo ad inserire gli item fatti
  var items = document.getElementById("items")  //richiamo l'id items

  btni.addEventListener('click', addItem) //invece di onclick, faccio partire la funzione addItem al click su btni

  function addItem(){

    var newInput = { //creo un oggetto con il value e l'id randomico
      value: document.getElementById("input").value,
      id : parseInt(Math.random()*10000)
    }
    arrayItem.push(newInput) //pushiamo l'oggetto newInput dentro l'array

    drawM(); //chiamo la funzione dreawM()

  }

  function drawM() { //funzione per stampare gli elementi

    var cont = document.createElement('div')  //assegnamo un div dentro una variabile
    var mansioni = document.getElementById("mansioni")
    var mansioneL = document.createElement('div')
    var mansioneB = document.createElement('div')
    var label = document.createElement("label") //creo una label
    var buttonF = document.createElement('button') //creo un btn


    for(i = 0; i < arrayItem.length; i++){

      cont.setAttribute('id', arrayItem[i].id) //assegno un id al elemento creato cont (contenitore di label e btnf)
      buttonF.setAttribute('id', 'btnf')
      buttonF.setAttribute('onclick', 'fatto(this)') //onclick al bottone fatto che richiama la funzione elimina
      buttonF.classList.add('btn', 'btn-success') //assegno le classi
      mansioneL.classList.add('col-xs-9')
      mansioneB.classList.add('col-xs-3')

      buttonF.innerHTML = 'FATTO'; //scrivo il testo all'interno del btn
      label.innerHTML = arrayItem[i].value //scrivo il value dell'input nella label
      //vado ad appentere cont dentro items
      items.append(cont)
      mansioni.append(cont)
      cont.append(mansioneL)
      cont.append(mansioneB)
      mansioneB.append(buttonF)
      mansioneL.append(label)
    }
  }

  function fatto(event){ //funzione fatto che sposta ed elimina l'elmento da arrayItem per inserirlo in arrayFatti

    var id = event.parentNode.parentNode.id //assegniamo l'id al id random

    for(i = 0; i < arrayItem.length; i++){

      if(arrayItem[i].id === parseInt(id)){
        arrayFatti.push(arrayItem[i]) //inserisco l'elemento eliminato nell'array
        arrayItem.slice(i, 1) //elimino un solo elemento, indice i

      }
    }

    var elementofatto = document.getElementById(id) //assegniamo
    elementofatto.remove();
    drawFatti();

  }

  function drawFatti() {

    var contF = document.createElement('div')
    var mansioneFL = document.createElement('div')
    var mansioneFB = document.createElement('div')
    var mansioniF = document.getElementById("mansioniF")
    var labelF = document.createElement("label")
    var buttonD = document.createElement('buttonD')


    for(i = 0; i < arrayFatti.length; i++){

      contF.setAttribute('id', arrayFatti[i].id)
      buttonD.setAttribute('id', 'btnD')
      buttonD.setAttribute('onclick', 'elimina(this)')
      buttonD.classList.add('btn', 'btn-danger')

      mansioneFL.classList.add('col-xs-9')
      mansioneFB.classList.add('col-xs-3')

      buttonD.innerHTML = 'ELIMINA';
      labelF.innerHTML = arrayFatti[i].value

      items.append(contF)
      mansioniF.append(contF)
      contF.append(mansioneFL)
      contF.append(mansioneFB)
      mansioneFB.append(buttonD)
      mansioneFL.append(labelF)

    }
  }

  function elimina(event) {

    var id = event.parentNode.parentNode.id

    for(i = 0; i < arrayFatti.length; i++){

      if(arrayFatti[i].id === parseInt(id)){
        arrayFatti.slice(i, 1)
      }
    }

    var elemento = document.getElementById(id)
    elemento.remove()

  }
