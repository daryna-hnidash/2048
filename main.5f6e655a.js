parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var r=document.querySelector(".game-field"),e=document.querySelector(".game-score"),t=document.querySelector(".button"),n=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),i=document.querySelector(".message-start"),a=4,s=4,f=0,c=!1,d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];t.addEventListener("click",function(){if(c){for(;r.firstChild;)r.removeChild(r.firstChild);d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],o.classList.add("hidden"),n.classList.add("hidden")}i.classList.add("hidden"),u(),c=!0,t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart",f=0,e.innerText=f});var u=function(){for(var e=0;e<a;e++)for(var t=0;t<s;t++){var n=document.createElement("div");n.id="".concat(e,"-").concat(t),y(n,d[e][t]),r.append(n)}v(),v()};function l(){for(var r=0;r<a;r++)for(var e=0;e<s;e++)if(0===d[r][e])return!0;return!1}function v(){if(l())for(var r=!1;!r;){var e=Math.floor(Math.random()*a),t=Math.floor(Math.random()*s),n=Math.random()>.1?2:4;if(0===d[e][t]){d[e][t]=n;var o=document.getElementById(e.toString()+"-"+t.toString());o.innerText=n.toString(),o.classList.add("field-cell--"+n),r=!0}}}function m(){for(var r=0;r<a;r++)for(var e=0;e<s;e++)if(2048===d[r][e])return!0;return!1}function S(){if(l())return!1;for(var r=0;r<a;r++)for(var e=0;e<s-1;e++)if(d[r][e]===d[r][e+1])return!1;for(var t=0;t<a-1;t++)for(var n=0;n<s;n++)if(d[t][n]===d[t+1][n])return!1;return!0}function g(r){r.toString()!==d.toString()&&(d=JSON.parse(JSON.stringify(r)),h(),v())}function h(){for(var r=0;r<a;r++)for(var e=0;e<s;e++){y(document.getElementById(r.toString()+"-"+e.toString()),d[r][e])}}function y(r,e){r.innerText="",r.classList.value="",r.classList.add("field-cell"),e>0&&(r.innerText=e,r.classList.add("field-cell--".concat(e)))}function L(r){for(var t=r.filter(function(r){return 0!==r}),n=0;n<s-1;n++)t[n]===t[n+1]&&(t[n]*=2,t[n+1]=0,f+=0|+t[n],e.innerText=f);for(t=t.filter(function(r){return 0!==r&&!isNaN(r)});t.length<s;)t.push(0);return t}function N(){for(var r=JSON.parse(JSON.stringify(d)),e=0;e<a;e++){var t=r[e];t=L(t),r[e]=t}g(r)}function p(){for(var r=JSON.parse(JSON.stringify(d)),e=0;e<a;e++){var t=r[e],n=(t=L(t=t.reverse())).reverse();r[e]=n}g(r)}function J(){for(var r=JSON.parse(JSON.stringify(d)),e=0;e<a;e++){var t=[r[0][e],r[1][e],r[2][e],r[3][e]];t=L(t);for(var n=0;n<a;n++)r[n][e]=t[n]}g(r)}function O(){for(var r=JSON.parse(JSON.stringify(d)),e=0;e<a;e++){var t=[r[0][e],r[1][e],r[2][e],r[3][e]];t=(t=L(t.reverse())).reverse();for(var n=0;n<a;n++)r[n][e]=t[n]}g(r)}document.addEventListener("keyup",function(r){"ArrowLeft"===r.code&&N(),"ArrowRight"===r.code&&p(),"ArrowUp"===r.code&&J(),"ArrowDown"===r.code&&O(),m()&&o.classList.remove("hidden"),S()&&n.classList.remove("hidden")});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.5f6e655a.js.map