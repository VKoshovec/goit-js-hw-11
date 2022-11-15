import Vimeo from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const keyName = 'videoplayer-current-time';

let currentTime = (key) => {
    return localStorage.getItem(key) === null ? 0 : JSON.parse(localStorage.getItem(key));
}

player.setCurrentTime (currentTime(keyName)); 

player.on ('timeupdate', throttle( onPlay, 1000));

function onPlay (event) {
    let curSec = JSON.stringify(event.seconds);
    localStorage.setItem (keyName, curSec); 
}