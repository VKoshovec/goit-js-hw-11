import Vimeo from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
let currentTime = JSON.parse(localStorage.getItem ('videoplayer-current-time'));

player.setCurrentTime (currentTime); 

player.on ('timeupdate', onPlay);

function onPlay (event) {
localStorage.setItem ('videoplayer-current-time', JSON.stringify(event.seconds)); 
}