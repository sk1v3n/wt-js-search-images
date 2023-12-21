import{a as S,S as Q,i as I}from"./assets/vendor-30bfe4fa.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const T="41394686-bb75b189d857ad4dfef12ed53",C="https://pixabay.com/api/",O=40;function $(){const e={searchQuery:"",page:1,PER_PAGE:O},n=async()=>{try{return(await S.get(C,{params:{key:T,q:e.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e.page,per_page:e.PER_PAGE}})).data}catch(i){throw console.error(i),new Error("Failed to fetch data")}},o=()=>{e.page+=1},r=()=>{e.page=1};return{fetchGallery:n,incrementPage:o,resetPage:r,getQuery:()=>e.searchQuery,setQuery:i=>{e.searchQuery=i,r()},getPage:i=>{e.page=i}}}const p=$();let x=new Q(".photo-card a",{captions:!0,captionsData:"alt",captionDelay:250});const G=document.getElementById("search-button"),L=document.querySelector(".gallery"),P=document.getElementById("search-bar"),f=document.getElementById("pagination-container"),g=document.getElementById("pagination-numbers"),h=document.getElementById("prev-button"),m=document.getElementById("next-button");let d=0,c=!0,a=1,b="";G.addEventListener("click",function(e){e.preventDefault(),w(),c=!0,a=1});P.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),w()),c=!0,a=1});h.addEventListener("click",()=>y(a-1));m.addEventListener("click",()=>y(a+1));async function w(){const e=P.value.trim();if(p.setQuery(e),e===""){u("warning","Будь ласка, заповніть поле пошуку"),f.classList.add("is-hidden");return}if(e===b){u("warning","Будь ласка, змініть або введіть нове значення для пошуку.");return}p.resetPage(),b=e,d=0,await B(1)}async function B(e){try{p.getPage(e);const n=await p.fetchGallery(),{hits:o,totalHits:r}=n;if(c&&!o.length){u("error","Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз."),f.classList.add("is-hidden");return}c&&d<r&&(u("success",`Ура! Ми знайшли ${r} зображень!`),R({hits:o,totalHits:r}),c=!1),L.innerHTML="",N(o),d+=o.length,c&&d>=r&&u("info","Ви досягли кінця результатів пошуку.")}catch(n){console.error("Error fetching gallery:",n),u("error","Під час отримання галереї зображень сталася помилка.")}}function N(e){const n=e.map(({webformatURL:o,largeImageURL:r,tags:t,likes:s,views:l,downloads:i})=>`
      <div class="photo-card">
        <a href="${r}">
          <img class="photo-img" src="${o}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Вподобайки</b><span class="info__span">${s}</span></p>
          <p class="info-item"><b>Перегляди</b><span class="info__span">${l}</span></p>
          <p class="info-item"><b>Завантаження</b><span class="info__span">${i}</span></p>
        </div>
      </div>`).join("");L.insertAdjacentHTML("beforeend",n),x.refresh()}function R({hits:e,totalHits:n}){const o=Math.ceil(n/e.length);g.innerHTML="";for(let r=1;r<=o;r++){const t=document.createElement("button");t.className="pagination-number",t.textContent=r,g.appendChild(t),o>1?f.classList.remove("is-hidden"):f.classList.add("is-hidden"),t.addEventListener("click",()=>{y(r),c=!1})}_(),A()}async function y(e){a=e,await B(a),q(),_(),A()}const E=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},v=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},_=()=>{a===1?E(h):v(h),a===g.children.length?E(m):v(m)},A=()=>{document.querySelectorAll(".pagination-number").forEach((e,n)=>{e.classList.remove("active"),n+1===a&&e.classList.add("active")})};function u(e,n){I[e]({title:e.charAt(0).toUpperCase()+e.slice(1),message:n,position:"topRight",color:e==="success"?"green":e==="warning"?"yellow":e==="error"?"red":"blue",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function q(){window.scrollTo({top:0,behavior:"auto"})}
//# sourceMappingURL=commonHelpers.js.map
