import Vimeo from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let currentTime = JSON.parse(localStorage.getItem ('videoplayer-current-time'));

player.setCurrentTime (currentTime); 

player.on ('timeupdate', throttle( onPlay, 1000));

function onPlay (event) {
    let curSec = JSON.stringify(event.seconds);
    localStorage.setItem ('videoplayer-current-time', curSec); 
}