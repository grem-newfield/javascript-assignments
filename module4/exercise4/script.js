const grid = document.querySelector('.grid-container');
let data = [];

const SUMMARY_STRING_SIZE = 100;

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#query').value;
  fetch(`https://api.tvmaze.com/search/shows?q=${query}"`)
    .then(response => response.json())
    .then(data => {
      grid.innerHTML = '';
      data.forEach(obj => {
        let grid_item = document.createElement('div');
        grid_item.className = 'grid-item';
        // name, link to details, image, summary
        let show = obj.show;
        let image = show.image.medium || 'https://via.placeholder.com/210x295?text=Not%20Found';
        let summary = truncate_string(show.summary, SUMMARY_STRING_SIZE);
        grid_item.innerHTML =
          `
        <h2>${show.name}</h2>
        <img src="${image}">
        <a href="${show.url}" target="_blank">Link to details</a>
        <p>Summary: ${summary}</p>
          `
        grid.appendChild(grid_item);
      })
    })
    .catch(err => console.log("ERR:", err));
})

function truncate_string(str, max_size) {
  if (str.length > max_size) { return str.substring(0, max_size) + '...'; } else { return str; }
}

// [
//   {
//     "score": 0.8777634,
//     "show": {
//       "id": 48267,
//       "url": "https://www.tvmaze.com/shows/48267/ice",
//       "name": "Ice",
//       "type": "Scripted",
//       "language": "English",
//       "genres": [
//         "Action",
//         "Science-Fiction",
//         "Thriller"
//       ],
//       "status": "Ended",
//       "runtime": 120,
//       "averageRuntime": 120,
//       "premiered": "2011-01-02",
//       "ended": "2011-01-02",
//       "officialSite": null,
//       "schedule": {
//         "time": "",
//         "days": [
//           "Sunday"
//         ]
//       },
//       "rating": {
//         "average": null
//       },
//       "weight": 49,
//       "network": {
//         "id": 45,
//         "name": "Channel 4",
//         "country": {
//           "name": "United Kingdom",
//           "code": "GB",
//           "timezone": "Europe/London"
//         },
//         "officialSite": "https://www.channel4.com/"
//       },
//       "webChannel": null,
//       "dvdCountry": null,
//       "externals": {
//         "tvrage": null,
//         "thetvdb": 260611,
//         "imdb": "tt1510984"
//       },
//       "image": {
//         "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/258/645306.jpg",
//         "original": "https://static.tvmaze.com/uploads/images/original_untouched/258/645306.jpg"
//       },
//       "summary": "<p>FUCK</p>",
//       "updated": 1598921981,
//       "_links": {
//         "self": {
//           "href": "https://api.tvmaze.com/shows/48267"
//         },
//         "previousepisode": {
//           "href": "https://api.tvmaze.com/episodes/1870419"
//         }
//       }
//     }
//   }]
