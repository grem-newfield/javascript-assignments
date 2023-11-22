function get_joke() {
  let joke = fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data.value))
    .catch(err => console.log("ERR:", err));
  return joke;
}

get_joke()
