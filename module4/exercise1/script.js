document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const query = document.querySelector('#query').value
  fetch(`https://api.tvmaze.com/search/shows?q=${query}"`)
    .then(response => response.json())
    .then(data => console.log(
      "Here is the first result: \n",
      "Show: ", data[0]['show']['name'], "\n",
      "Summary: ", data[0]['show']['summary'],
    ))
    .catch(err => console.log("ERR:", err))
}) 

