!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},n={inProgress:!1,timerId:"",start:function(){this.inProgress||(this.timerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),this.inProgress=!0)},stop:function(){clearInterval(this.timerId),this.inProgress=!1}};t.btnStart.addEventListener("click",n.start.bind(n)),t.btnStop.addEventListener("click",n.stop.bind(n))}();
//# sourceMappingURL=01-color-switcher.8f177291.js.map
