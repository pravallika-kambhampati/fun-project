var deadline = new Date("mar 15,2020,23:59:59").getTime();
var x = setInterval(function(){
    var now = new Date().getTime()
    var timeleft = deadline - now;
    var days = Math.floor(timeleft/(1000*60*60*24));
    var hours = Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((timeleft%(1000*60*60))/(1000*60));
    var seconds = Math.floor((timeleft   % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    var streamlink = "#";
    if(timeleft<0){
        clearInterval(x);
        toggle();
        }
    },1000);

function toggle(){
        var timer = document.getElementById("timercard");
        var postcompletion = document.getElementById("postcompletion");
        timer.style.display="none";
        postcompletion.style.display='block';
        var confetti = document.querySelector('.wrapper');
        confetti.style.display = 'block';
        var glitch = document.querySelector('.glitchButton');
        glitch.style.display = 'block';
}

if (window.innerWidth < 576) {
  var mySVG = document.querySelector('#text');
  mySVG.setAttribute("viewBox", "350 180 960 300");
}
