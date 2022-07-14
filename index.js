window.onload = function () {
var seconds=00;
var tens=00;
var appendseconds = document.getElementById("seconds");
var appendtens = document.getElementById("tens");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var Interval ;


start.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}
stop.onclick = function() {
    clearInterval(Interval);
}
reset.onclick = function(){
    clearInterval(Interval);
    seconds="00";
    tens="00";
    appendseconds.innerHTML=seconds;
    appendtens.innerHTML=tens;
}

function startTimer(){
    tens++;
    if(tens<=9){
        appendtens.innerHTML="0" + tens;
    }
    if(tens>9){
        appendtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
      appendseconds.innerHTML = "0" + seconds;
      tens=0;
      appendtens.innerHTML="0"+0;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
}
}