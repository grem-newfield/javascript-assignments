const trigger = document.getElementById('trigger');
const img = document.getElementById('target');
trigger.addEventListener('mouseenter', function (evt) {
  target.src = 'img/picB.jpg'
});
trigger.addEventListener('mouseleave', function (evt) {
  target.src = 'img/picA.jpg'
});
