var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),a=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return c.Date.now()};function p(t,e,n){var o,i,r,u,f,c,a=0,p=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(T,e),p?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=r}function T(){var t=d();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return b?s(n,r-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=d(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(b)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,v(n)&&(p=!!n.leading,r=(b="maxWait"in n)?l(y(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==a.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||i.test(t)?r(t.slice(2),f?2:8):n.test(t)?NaN:+t}({inputCountry:document.querySelector("#search-box")}).inputCountry.addEventListener("input",(function(){console.log("Auch!")}));
//# sourceMappingURL=index.ebd8a1e6.js.map
