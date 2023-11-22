var $ = function (id) { return document.getElementById(id); };

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const query = document.querySelector('#query').value
  $('mark').innerHTML = ''
  fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.result.forEach(o => {
        let article = document.createElement('article')
        let p = document.createElement('p')
        let text = o.value
        p.textContent = text
        article.appendChild(p)
        $('mark').appendChild(article)
      });
    })
    .catch(err => console.log("ERR:", err))
})


