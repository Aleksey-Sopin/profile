// вывод текущего времи и проверка на доступность
var time = document.getElementById("timeNow");
var available = document.getElementById("dot");

newTime();
setInterval(newTime, 1000);

function newTime(){
  var hour = new Date().toUTCString().slice(17,19);
  var minutes = new Date().toUTCString().slice(19,22);

 // проверка доступноти в офисе с 9.00 до 18.00 по часовому поясу UTC+2 (Киев)
  hour = Number(hour) + 2;
  if (hour < 9 || hour > 19){
     available.innerHTML = `<img src="img/header-home/dot-red.svg" alt="">Please email me `;
  } else available.innerHTML = '<img src="img/header-home/dote-green.svg" alt="">At office now ';

 // вывод времени
  time.innerHTML = ' Ukraine ' + hour  + minutes;
}
