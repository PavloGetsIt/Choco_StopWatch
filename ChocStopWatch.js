window.onload = function () {
var seconds = 00;
var tens = 00;
var setTens = document.getElementById("tens")
var setSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById("buttonStart");
var buttonStop = document.getElementById("buttonStop");
var buttonReset = document.getElementById("buttonReset");
var timer;


  buttonStart.onclick = function () {
    
    clearInterval(timer);
      timer = setInterval(startTimer,10);
  }
    buttonStop.onclick = function () {
      clearInterval(timer);
    }
    buttonReset.onclick = function () {
      clearInterval(timer);
      tens = "00";
      seconds = "00";
      setTens.innerHTML = tens;
      setSeconds.innerHTML = seconds;
    }

  function startTimer () {
    tens++;
    
    if(tens <= 9){
      setTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
      setTens.innerHTML = tens;
    }
    
    if(tens > 99){
    seconds++;
      setSeconds.innerHTML = "0" + seconds;
      // So whats the difference between string "0" and just 0?
      // property innerHTML is just a way to refer back to HTML doc?
      tens = 0;  
      setTens.innerHTML = "0" + 0;
    }

    if(seconds > 9){
      setSeconds.innerHTML = seconds;
    }
  }
}