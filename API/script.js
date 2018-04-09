var key = 'cff0fc35528f4c2ca9bfbdf016ba119f'
var url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=cff0fc35528f4c2ca9bfbdf016ba119f'
var btn = document.getElementById('btn')


btn.addEventListener('click', function(){

  fetch(url).then(function(response) {
    return response.json()
  }).then(function(res) {
    draw(res)
  })
});

function draw(res){

  var template = `<div class="col-md-3 col-xs-12" id="card">
    <img id="img" src="" alt="img">
    <h1 id="titolo"></h1>
    <h3 id="autore"></h3>
    <i id="data"></i> 
    <p id="testo"></p>
    <a id="link" href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">LINK</a>
  </div>`

  for(i = 0; i < res.articles.length; i++){

    var template = `<div class="col-md-3 col-xs-12" id="card">
      <img id="img" src="${res.articles[i].urlToImage}" alt="img">
      <h1 id="titolo">${res.articles[i].title}</h1>
      <h3 id="autore">${res.articles[i].author}</h3>
      <i id="data">${res.articles[i].publishedAt}</i>
      <p id="testo">${res.articles[i].description}</p>
      <a id="link" href="${res.articles[i].url}" target="_blank" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">LINK</a>
    </div>`

    var div = document.createElement('div')
    var cont = document.getElementById('cont')

    div.innerHTML = template
    cont.append(div)

    console.log(template)

  }
}
