function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register;var r=i("7Y9D8");/*@__PURE__*/e(r).Notify.init({timeout:5e3,useIcon:!1});const l=document.querySelector(".form");l.addEventListener("submit",function(t){t.preventDefault();let{elements:{delay:o,step:n,amount:i}}=t.currentTarget,l=Number(o.value),u=Number(n.value),s=Number(i.value),a=l;for(let t=1;t<=s;t++)(function(e,t){return new Promise((o,n)=>{let i=Math.random()>.3;setTimeout(()=>{i?o({position:e,delay:t}):n({position:e,delay:t})},t)})}//# sourceMappingURL=03-promises.ab159eb0.js.map
)(t,a).then(({position:t,delay:o})=>{/*@__PURE__*/e(r).Notify.success(`\u{2705} Fullfilled promise ${t} in ${o}ms.`)}).catch(({position:t,delay:o})=>{/*@__PURE__*/e(r).Notify.failure(`\u{274C} Fullfilled promise ${t} in ${o}ms.`)}),a+=u});
//# sourceMappingURL=03-promises.ab159eb0.js.map
