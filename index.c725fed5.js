const e=document.querySelector(".error");function n(){return fetch("https://api.thecatapi.com/v1/breeds?api_key=live_qVMnKGr2HdlsR807IOCErOPauQsHEHnfe8oeOiRs1YEqeZSIyzW0Zk7fOKIeCJQA&limit=100").then((n=>{if(!n.ok)throw e.hidden=!1,new Error("resp.statusText");return n.json()}))}const t=document.querySelector(".js-search"),o=document.querySelector(".cat-info"),c=document.querySelector(".loader");t.addEventListener("change",(function(e){const t=e.currentTarget.value;c.hidden=!1,o.innerHTML="",n().then((e=>function(e,n){const t=e.find((({id:e})=>e===n));console.log("infoSearchCatt:",t),console.log(t.name),o.innerHTML=function({name:e="cat",description:n,temperament:t,image:{url:o="https://cdn2.thecatapi.com/images/oGefY4YoG.jpg"}}){return`\n    <img class="cat-info_img" src="${o}" alt="${e}" width=300>\n    <div class="cat-info_box">\n        <h2 class="cat-info_title">${e}</h2>\n        <p class="cat-info_descriptio">${n}</p>\n        <p><span class="cat-info_nature">Temperament:</span> ${t}</p>\n    </div>\n    `}(t),c.hidden=!0}(e,t))).catch((e=>console.log(e)))})),n().then((e=>{var n;t.insertAdjacentHTML("beforeend",(n=e,console.log("arrForOptions:",n),n.map((({id:e,name:n})=>`\n        <option value="${e}">${n}</option>\n    `)).join("")))})).catch((e=>console.log(e)));
//# sourceMappingURL=index.c725fed5.js.map
