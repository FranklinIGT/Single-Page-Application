(()=>{var n={41:()=>{}},a={};function e(t){var r=a[t];if(void 0!==r)return r.exports;var s=a[t]={exports:{}};return n[t](s,s.exports,e),s.exports}e.n=n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return e.d(a,{a}),a},e.d=(n,a)=>{for(var t in a)e.o(a,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:a[t]})},e.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),(()=>{"use strict";const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{return(await fetch(e)).json()}catch(n){console.log("Fetch eror",n)}},t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var r=e(41),s=e.n(r);const i={"/":async()=>`\n        \n        <div class ="Characters">\n\n        ${(await a()).results.map((n=>`\n            <article class="Character-item">\n                <a href= "#/${n.id}/ ">\n                    <img src="${n.image}" alt="${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>\n            `)).join("")}\n            \n        </div>\n    \n    `,"/:id":async()=>{const n=t(),e=await a(n);return`\n    <div className="Characters-inner">\n        <article className="Characters-card">\n            <img src=${e.image} alt="${e.name}"/>\n            <h2>${e.name}</h2>\n            <article className="Characters-card">\n                <h3>Episodes: <span>${e.episode.length}\t</span></h3>\n                <h3>Status: <span>${e.status}</span></h3>\n                <h3>Species: <span>${e.species}</span></h3>\n                <h3>Gender: <span>${e.gender}</span></h3>\n                <h3>Origin: <span>${e.origin.name}</span></h3>\n                <h3>Last location: <span>${e.location.name}</span></h3>\n            </article>\n        </article>\n    </div>\n    `},"/Contac":"Contac"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n        <dir class="Header-main">\n            <div class="Header-log">\n                <h1>\n                    <a href="/">\n                    Rick y Morty\n                    </a>\n                </h1>\n            </div>\n            <div class="Header-nav">\n                <a href="#/about">About\n                </a>\n            </div>\n        </dir>\n\n    \n    ';let e=t(),r=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(e),c=i[r]?i[r]:s();a.innerHTML=await c()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})()})();