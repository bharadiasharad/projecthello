document.getElementById("vibration").addEventListener("click", vibration);
document.getElementById("vibrationPattern").addEventListener("click", vibrationPattern);

function vibration() {
   var time = 300;
   navigator.vibrate(time);
}

function vibrationPattern() {
   var pattern = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
   navigator.vibrate(pattern);
}