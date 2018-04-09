var key = 'cff0fc35528f4c2ca9bfbdf016ba119f' //variabile per registrazione key api
var url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=cff0fc35528f4c2ca9bfbdf016ba119f' //variabilizzo url JSON
var url_category = 'https://newsapi.org/v1/sources'
var articles_array = [] //array per inserire articolo
var category_array = [] //arrray per iscerire categorie

document.addEventListener("DOMContentLoaded", function(event){

  caricaRisultati(urlGeneration('source=the-next-web'))

    fetch(url_category).then(function(response){
      return response.json()
    }).then(function(res){

      category_array = res.sources

      drawCategory()


      }) //qui chiude la fetch

});

function drowSidebar(){ //stampa url e il titolo dell'articolo nella sidebar

  for(i = 0; i < articles_array.length; i++){

  var templateS = `<div class="col-xs-12 estratto_articolo" id="${i}">
                    <a href="${articles_array[i].url}" target="_blank">LINK</a>
                    <h3>${articles_array[i].title}</h3>
                   </div>`
  var div = document.createElement('div')
  var sidebar = document.getElementsByClassName('sidebar')

  div.innerHTML = templateS
  sidebar[0].append(div)

  }
}

function drawArticle(article){

  var divpage = document.createElement('div')
  var page = document.getElementsByClassName('page')
  page[0].innerHTML = '' //svuoto l'elemento zero
  var templateA = `<div class="url_data">
                    <span><a href="${article.url}" target="_blank">LINK</a></span> | <span>${article.publishedAt}</span>
                   </div>
                    <h1>${article.title}</h1>
                    <h4><span>${article.author}</span></h4>
                    <img src="${article.urlToImage}" alt="immagine non caricata" class="img-responsive">
                    <p>${article.description}</p>`

  divpage.innerHTML = templateA
  page[0].append(divpage)
}

function drawCategory(){

  var category = ``
  var dropdown = document.getElementsByClassName('dropdown')
  var ul = document.createElement('ul')
  ul.classList.add('dropdown-menu') //aggiungo classe ad elemento ul creato in var ul

  for(i = 0; i < category_array.length; i++){

    var templateC = `<li id="${i}"><span>${category_array[i].category}</span></li>`
    category += templateC

  }

  ul.innerHTML = category
  dropdown[0].append(ul)

  var listCategory = document.getElementsByClassName('dropdown')

  for(i = 0; i < listCategory.length; i++){

    //istanzio categoria all'evento click
    listCategory[i].addEventListener('click', function(event){
        if(event.target.parentNode.id && event.target.parentNode.id !== 'titolo') {

          var source = category_array[event.target.parentNode.id].id

          urlGeneration('source=' + source)

          caricaRisultati(urlGeneration('source=' + source))

          console.log(category_array[event.target.parentNode.id])


        } else if(event.target.id && event.target.id !== 'titolo') {

          caricaRisultati()

        }
      })
    }
  }

function urlGeneration(url_entrante){

  var urlPrincipale = 'https://newsapi.org/v1/articles?'
  var urlSource = url_entrante
  var urlSortBy = '&sortBy=latest'
  var urlApiKey = '&apiKey=cff0fc35528f4c2ca9bfbdf016ba119f'

  var urlFinale = urlPrincipale + urlSource + urlSortBy + urlApiKey

  return urlFinale
}

function caricaRisultati(url_cliccata){

  fetch(url_cliccata).then(function(response){ //funzione per scaricarmi il file JSON
    return response.json()
  }).then(function(res){

    articles_array = res.articles //salvo l'array JSON in un array vuoto

    drowSidebar() //richiamo drowSidebar
    drawArticle(articles_array[0]) //richiamo funzione articles_array partendo dal primo elemento

    console.log(urlGeneration())

    var estratto_articoloLista = document.querySelectorAll('.estratto_articolo h3') //variabilizzo estratto articolo

    for(i = 0; i < estratto_articoloLista.length; i++){

      estratto_articoloLista[i].addEventListener("click", function(event){

        var articolBox = event.target.parentNode

        drawArticle(articles_array[articolBox.id]) //richiamo funzione che stampa il primo elemento appena si apre la pagina

      })
    }
  })
}
