const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

const timer =document.querySelector('.time');



//console.log(currTime.getHours());
let minutes = 25;
let seconds = 0;
let timerId;

start.addEventListener('click', () => {
    timerId=setInterval(() => {

        if( seconds === 0 ) {
            seconds = 59;
            if( minutes !== 0 ){
                minutes--;
            }

        }else{
            seconds--;
        }
        
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
}); ``

stop.addEventListener('click', () => {
    clearInterval(timerId);
});

reset.addEventListener('click', () => {
    let minutes = 25;
let seconds = 0;
timer.innerHTML = `${minutes}:0${seconds}`;
  
});


