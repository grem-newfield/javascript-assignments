var $ = function (id) { return document.getElementById(id); };

let is_leap_year = year => ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));

let year = parseInt(prompt('Enter a year.'));

$('mark').textContent = year + ' is' + (is_leap_year(year) ? '' : ' not') + ' a leap year.';

