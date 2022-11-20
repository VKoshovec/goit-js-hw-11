const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener ('click', startColorChange);


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startColorChange () {
    let inProgress = false;

    colorTimer = setInterval (document.body.style.backgroundColor =  getRandomHexColor(), 1000);
    inProgress = true;

}