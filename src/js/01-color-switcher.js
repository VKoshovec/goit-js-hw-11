const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};

const ColorChange = {
    inProgress: false,
    timerId: '',

    start () {
       if (this.inProgress) return;
    
       this.timerId = setInterval (() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000);
       this.inProgress = true;
    },

    stop() {
       clearInterval (this.timerId);
       this.inProgress = false;
    },
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener ('click', ColorChange.start.bind(ColorChange));
refs.btnStop.addEventListener ('click', ColorChange.stop.bind(ColorChange));