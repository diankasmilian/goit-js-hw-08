function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,i,r,a,u,f,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function x(e){return c=e,u=setTimeout(S,t),l?g(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=r}function S(){var e=v();if(w(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return d?p(n,r-(e-c)):n}(e))}function j(e){return u=void 0,m&&o?g(e):(o=i=void 0,a)}function h(){var e=v(),n=w(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(d)return u=setTimeout(S,t),g(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,b(n)&&(l=!!n.leading,r=(d="maxWait"in n)?s(y(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:j(v())},h}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};const g={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),button:document.querySelector("button")};function x(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify({email:g.input.value,message:g.textarea.value}))}g.input.addEventListener("input",e(t)(x,500)),g.textarea.addEventListener("input",e(t)(x,500)),g.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(w),localStorage.removeItem("feedback-form-state"),g.input.value="",g.textarea.value=""})),window.addEventListener("load",(function(){w&&(g.input.value=w.email,g.textarea.value=w.message)}));const w=JSON.parse(localStorage.getItem("feedback-form-state"));
//# sourceMappingURL=03-feedback.e3bd7203.js.map
