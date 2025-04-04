import{S as u,a as f,i}from"./assets/vendor-BH9GyP-n.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=documen.querySelector(".gallery"),l=document.querySelector(".loader"),p=new u(".gallery a");function m(s){const o=images.map(e=>`<li class ="gallery-item">
        <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
          <div class="info">
            <p>Likes: ${e.likes}</p>
            <p>Views: ${e.views}</p>
            <p>Comments: ${e.comments}</p>
            <p>Downloads: ${e.downloads}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),p.refresh()}function y(){c.innerHTML=""}function h(){l.classlist.remove("hidden")}function g(){l.classList.add("hidden")}const L="49650117-af312fdd4c8d669445c27b54b",w="https://pixabay.com/api/";async function b(s){const o={key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(w,{params:o})).data}const d=document.querySelector(".form"),v=d.quarySelector('input[name="search-text"]');d.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){i.warning({message:"Поле пошуку не може бути порожнім!",position:"topRight"});return}y(),h();try{const e=await b(o);e.hits.length===0?i.info({message:"На жаль, нічого не знайдено. Спробуй інше слово.",position:"topRight"}):m(e.hits)}catch(e){i.error({message:"Сталася помилка! Спробуй ще раз пізніше.",position:"topRight"}),console.error(e)}finally{g()}});
//# sourceMappingURL=index.js.map
