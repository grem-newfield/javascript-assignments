var $ = function (id) { return document.getElementById(id); };

let candidates = []
let number_of_candidates = parseInt(prompt('Number of candidates?'))
for (let i = 0; i < number_of_candidates; i++) {
  let candidate = prompt('Name for candidate ' + (i + 1))
  candidates.push({ name: candidate, votes: 0 })
}

let number_of_voters = parseInt(prompt('Number of voters?'))
for (let i = 0; i < number_of_voters; i++) {
  let candidate_name = prompt('Who you vote for? (Name)')
  try {
    candidates.find(obj => { return obj.name == candidate_name }).votes++
  } catch {
    console.log('Couldnt filter by name: ' + candidate_name)
    continue
  }
}

console.log(candidates)

candidates.sort((a, b) => b.votes - a.votes)

console.log('The winner is ' + candidates[0].name)

for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i].name + ": " + candidates[i].votes + " votes")
}

