var $ = function (id) { return document.getElementById(id); };

let is_leap_year = year => ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));

start_year = parseInt(prompt('Type starting year.'));
end_year = parseInt(prompt('Type ending year.'));
current_year = start_year;

if (start_year < end_year) {
  while (current_year <= end_year) {
    if (!is_leap_year(current_year)) { current_year++; continue; }
    let list_item = document.createElement('li');
    list_item.textContent = current_year;
    $('mark').appendChild(list_item);
    current_year++;
  }
}




