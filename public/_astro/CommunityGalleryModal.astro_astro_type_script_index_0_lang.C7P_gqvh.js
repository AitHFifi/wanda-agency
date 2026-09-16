import{i as e,n as t}from"./photo-store.ONtI-45W.js";document.addEventListener(`DOMContentLoaded`,()=>{let n=document.getElementById(`galleryDrawerBackdrop`),r=document.getElementById(`closeGalleryDrawerBtn`),i=document.getElementById(`btnDrawerUpload`),a=document.getElementById(`btnEmptyUpload`),o=document.getElementById(`communityGrid`),s=document.getElementById(`galleryEmptyState`),c=document.querySelectorAll(`.filter-chip`),l=`all`,u=null,d=[];t.getCurrentUser().then(e=>u=e),window.addEventListener(`mvett:auth-changed`,(e=>{u=e.detail,p()}));async function f(){d=await t.getPhotos(),p()}function p(){if(!o||!s)return;let n=l===`all`?d:d.filter(e=>e.province_id===l);if(n.length===0){o.innerHTML=``,s.style.display=`flex`;return}s.style.display=`none`,o.innerHTML=n.map(t=>{let n=e.find(e=>e.id===t.province_id),r=n?`${n.code} · ${n.name}`:t.province_id,i=u&&u.id===t.user_id,a=new Date(t.created_at).toLocaleDateString(`fr-FR`,{day:`numeric`,month:`short`,year:`numeric`});return`
          <article class="photo-card" data-photo-id="${t.id}" style="--bg-accent: ${t.background_color};">
            <div class="card-media">
              <img src="${t.image_url}" alt="${t.title}" loading="lazy" />
              <div class="card-overlay">
                <button type="button" class="btn-view-3d" data-photo-id="${t.id}">
                  Voir en 3D ↗
                </button>
              </div>
              <span class="card-badge">${r}</span>
            </div>

            <div class="card-info">
              <h4 class="card-title">${t.title}</h4>
              <p class="card-location">${t.location}</p>
              ${t.caption?`<p class="card-caption">« ${t.caption} »</p>`:``}
              
              <div class="card-footer">
                <div class="author-info">
                  ${t.user_avatar?`<img src="${t.user_avatar}" class="author-avatar" alt="" />`:`<span class="author-avatar-placeholder">${t.user_name.charAt(0).toUpperCase()}</span>`}
                  <span class="author-name">${t.user_name}</span>
                </div>
                <div class="footer-meta">
                  <span class="card-date">${a}</span>
                  ${i?`<button type="button" class="btn-delete-photo" data-delete-id="${t.id}" title="Supprimer ma photo">🗑</button>`:``}
                </div>
              </div>
            </div>
          </article>
        `}).join(``),o.querySelectorAll(`.btn-view-3d`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-photo-id`);n&&(h(),window.dispatchEvent(new CustomEvent(`mvett:jump-to-slide`,{detail:{photoId:n}})))})}),o.querySelectorAll(`.btn-delete-photo`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-delete-id`);r&&confirm(`Êtes-vous sûr de vouloir supprimer cette photographie du patrimoine ?`)&&(await t.deletePhoto(r),await f())})})}function m(e){n&&(e&&(l=e,c.forEach(t=>{let n=t.getAttribute(`data-province`);t.classList.toggle(`active`,n===e)})),n.classList.add(`open`),n.setAttribute(`aria-hidden`,`false`),f())}function h(){n&&(n.classList.remove(`open`),n.setAttribute(`aria-hidden`,`true`))}c.forEach(e=>{e.addEventListener(`click`,()=>{c.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),l=e.getAttribute(`data-province`)||`all`,p()})}),window.addEventListener(`mvett:open-gallery`,(e=>{m(e.detail?.provinceId)})),window.addEventListener(`mvett:photos-updated`,()=>{f()}),r?.addEventListener(`click`,h),n?.addEventListener(`click`,e=>{e.target===n&&h()}),i?.addEventListener(`click`,()=>{h(),u?window.dispatchEvent(new CustomEvent(`mvett:open-upload`,{detail:{provinceId:l===`all`?void 0:l}})):window.dispatchEvent(new CustomEvent(`mvett:open-auth`))}),a?.addEventListener(`click`,()=>{h(),u?window.dispatchEvent(new CustomEvent(`mvett:open-upload`,{detail:{provinceId:l===`all`?void 0:l}})):window.dispatchEvent(new CustomEvent(`mvett:open-auth`))}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&n?.classList.contains(`open`)&&h()})});