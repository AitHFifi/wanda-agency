import{i as e,n as t,t as n}from"./photo-store.ONtI-45W.js";import{n as r,t as i}from"./image-compressor.BM_919t3.js";document.addEventListener(`DOMContentLoaded`,async()=>{let a=document.getElementById(`adminAuthGate`),o=document.getElementById(`adminDashboard`),s=document.getElementById(`adminUserPill`),c=document.getElementById(`adminUserAvatar`),ee=document.getElementById(`adminUserName`),te=document.getElementById(`adminBtnLogout`),ne=document.getElementById(`btnAdminGoogle`),re=document.getElementById(`btnAdminDemo`),ie=document.getElementById(`tabNavCatalog`),ae=document.getElementById(`tabNavModeration`),l=document.getElementById(`sectionCatalog`),u=document.getElementById(`sectionModeration`),oe=document.getElementById(`badgeCatalogActiveCount`),se=document.getElementById(`badgeModerationPendingCount`),ce=document.getElementById(`chipCatalogActive`),le=document.getElementById(`chipCatalogArchived`),ue=document.getElementById(`countCatalogActive`),de=document.getElementById(`countCatalogArchived`),fe=document.getElementById(`catalogProvinceFilter`),d=document.getElementById(`catalogGrid`),pe=document.getElementById(`catalogEmptyState`),me=document.getElementById(`btnOpenAddModal`),he=document.getElementById(`btnEmptyAddPhoto`),ge=document.getElementById(`countPending`),_e=document.getElementById(`countApproved`),ve=document.getElementById(`countTotal`),ye=document.getElementById(`tabPendingBadge`),be=document.getElementById(`tabApprovedBadge`),xe=document.querySelectorAll(`[data-mod-status]`),Se=document.getElementById(`adminProvinceFilter`),f=document.getElementById(`submissionsGrid`),Ce=document.getElementById(`adminEmptyState`),p=document.getElementById(`adminAddModalBackdrop`),we=document.getElementById(`btnCloseAddModal`),Te=document.getElementById(`btnCancelAddModal`),Ee=document.getElementById(`adminAddForm`),De=document.getElementById(`addProvinceSelect`),Oe=document.getElementById(`addTitleInput`),ke=document.getElementById(`addLocationInput`),Ae=document.getElementById(`addCaptionInput`),je=document.getElementById(`addColorPresets`),Me=document.getElementById(`addColorNativePicker`),m=document.getElementById(`addColorHexInput`),Ne=document.getElementById(`btnSourceUrl`),Pe=document.getElementById(`btnSourceFile`),h=document.getElementById(`panelSourceUrl`),g=document.getElementById(`panelSourceFile`),Fe=document.getElementById(`addUrlInput`),Ie=document.getElementById(`addFileInput`);document.getElementById(`addDropzone`);let _=document.getElementById(`addCompressionStatus`),v=document.getElementById(`addCompressionText`),y=document.getElementById(`addImagePreviewBox`),b=document.getElementById(`addPreviewFrame`),x=document.getElementById(`addLiveImg`),S=document.getElementById(`btnSubmitAdd`),C=document.getElementById(`adminEditModalBackdrop`),Le=document.getElementById(`btnCloseEditModal`),Re=document.getElementById(`btnCancelEditModal`),ze=document.getElementById(`adminEditForm`),Be=document.getElementById(`editPhotoId`),Ve=document.getElementById(`editProvinceSelect`),He=document.getElementById(`editTitleInput`),Ue=document.getElementById(`editLocationInput`),We=document.getElementById(`editCaptionInput`),Ge=document.getElementById(`editColorPresets`),w=document.getElementById(`editColorNativePicker`),T=document.getElementById(`editColorHexInput`),E=document.getElementById(`editCurrentImgThumb`),Ke=document.getElementById(`btnToggleReplaceImg`),D=document.getElementById(`replaceImageDrawer`),qe=document.getElementById(`btnEditSourceUrl`),Je=document.getElementById(`btnEditSourceFile`),O=document.getElementById(`panelEditSourceUrl`),k=document.getElementById(`panelEditSourceFile`),Ye=document.getElementById(`editUrlInput`),Xe=document.getElementById(`editFileInput`),A=document.getElementById(`editCompressionStatus`),j=document.getElementById(`editCompressionText`),M=document.getElementById(`btnSubmitEdit`),N=document.getElementById(`adminDeleteModalBackdrop`),Ze=document.getElementById(`btnCloseDeleteModal`),Qe=document.getElementById(`btnCancelDeleteModal`),$e=document.getElementById(`deleteModalThumb`),et=document.getElementById(`deleteModalTitleText`),tt=document.getElementById(`deleteModalLocText`),nt=document.getElementById(`btnChoiceArchive`),rt=document.getElementById(`btnChoicePermanent`),P=document.getElementById(`previewModalBackdrop`),it=document.getElementById(`btnClosePreviewModal`),at=document.getElementById(`previewModalProvince`),ot=document.getElementById(`previewModalRatio`),F=document.getElementById(`previewModalStatus`),st=document.getElementById(`previewModalTitle`),ct=document.getElementById(`previewModalLocation`),lt=document.getElementById(`btnDeviceLaptop`),I=document.getElementById(`btnDeviceMobile`),L=document.getElementById(`frameLaptop`),R=document.getElementById(`frameMobile`),ut=document.getElementById(`laptopMainImg`),z=document.getElementById(`laptopBgBlur`),dt=document.getElementById(`laptopImageHolder`),ft=document.getElementById(`laptopMockCounter`),pt=document.getElementById(`laptopMockTitle`),mt=document.getElementById(`laptopMockLoc`),ht=document.getElementById(`mobileMainImg`),gt=document.getElementById(`mobileMockTitle`),_t=document.getElementById(`mobileMockLoc`),vt=document.getElementById(`previewFormatTip`),yt=document.getElementById(`previewModalButtons`),bt=`active`,xt=`all`,St=`pending`,Ct=`all`,B=null,V=[],H=[],U=null,W=null,G=null,K=`url`,wt=`url`;function Tt(){Et(je,Me,m,e=>{b&&(b.style.backgroundColor=e)}),Et(Ge,w,T)}function Et(e,t,r,i){e&&t&&r&&(e.innerHTML=n.map(e=>`
        <button type="button" class="swatch-btn ${e===t.value?`selected`:``}" style="background-color: ${e};" data-color="${e}" title="${e}"></button>
      `).join(``),e.querySelectorAll(`.swatch-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let a=n.getAttribute(`data-color`);a&&(t.value=a,r.value=a,e.querySelectorAll(`.swatch-btn`).forEach(e=>e.classList.remove(`selected`)),n.classList.add(`selected`),i&&i(a))})}),t.addEventListener(`input`,()=>{r.value=t.value,i&&i(t.value)}),r.addEventListener(`input`,()=>{/^#[0-9A-Fa-f]{6}$/.test(r.value)&&(t.value=r.value,i&&i(r.value))}))}async function q(){B=await t.getCurrentUser(),Dt(),B&&(t.isAdmin(B)||B.isDemo)&&await J()}function Dt(){B&&(t.isAdmin(B)||B.isDemo)?(a&&(a.style.display=`none`),o&&(o.style.display=`block`),s&&(s.style.display=`inline-flex`),ee&&(ee.textContent=`${B.name} (Admin)`),c&&B.avatar&&(c.src=B.avatar)):(a&&(a.style.display=`flex`),o&&(o.style.display=`none`),s&&(s.style.display=`none`))}async function J(){V=await t.getCatalogPhotos({includeArchived:!0}),H=await t.getPhotos({status:`all`}),Ot(),Y(),At()}function Ot(){let e=V.filter(e=>e.status===`approved`),t=V.filter(e=>e.status===`archived`),n=H.filter(e=>e.status===`pending`),r=H.filter(e=>e.status===`approved`);oe&&(oe.textContent=String(e.length)),ue&&(ue.textContent=String(e.length)),de&&(de.textContent=String(t.length)),se&&(se.textContent=String(n.length)),ge&&(ge.textContent=String(n.length)),_e&&(_e.textContent=String(r.length)),ve&&(ve.textContent=String(H.length)),ye&&(ye.textContent=String(n.length)),be&&(be.textContent=String(r.length))}function kt(e){e===`catalog`?(ie?.classList.add(`active`),ae?.classList.remove(`active`),l&&(l.style.display=`block`),u&&(u.style.display=`none`)):(ie?.classList.remove(`active`),ae?.classList.add(`active`),l&&(l.style.display=`none`),u&&(u.style.display=`block`))}ie?.addEventListener(`click`,()=>kt(`catalog`)),ae?.addEventListener(`click`,()=>kt(`moderation`));function Y(){if(!d||!pe)return;let n=V.filter(e=>bt===`active`?e.status===`approved`:e.status===`archived`);if(xt!==`all`&&(n=n.filter(e=>e.province_id===xt)),n.length===0){d.innerHTML=``,pe.style.display=`flex`;return}pe.style.display=`none`,d.innerHTML=n.map(t=>{let n=e.find(e=>e.id===t.province_id),r=n?`${n.code} · ${n.name}`:t.province_id,i=t.is_official!==!1,a=t.status===`archived`,o=(t.display_order??0)+1;return`
          <article class="catalog-card ${a?`archived`:``}" data-photo-id="${t.id}">
            <div class="catalog-thumb" data-preview-id="${t.id}" title="Cliquer pour tester dans le simulateur 3D">
              <img src="${t.image_url}" alt="${t.title}" loading="lazy" class="thumb-img" />
              
              <div class="thumb-badges-top">
                <span class="badge-prov">${r}</span>
                <span class="badge-order">#${o}</span>
              </div>

              <div class="thumb-badges-bottom">
                <span class="badge-origin ${i?`official`:`community`}">
                  ${i?`★ Officielle`:`👥 Citoyenne`}
                </span>
                ${a?`<span class="badge-archived">📦 Archivée</span>`:``}
              </div>

              <div class="thumb-overlay-hint">
                <span>👁 Tester 3D</span>
              </div>
            </div>

            <div class="catalog-card-body">
              <div class="catalog-title-row">
                <h3 class="catalog-title">${t.title}</h3>
                <span class="color-swatch-dot" style="background-color: ${t.background_color};" title="Fond d'ambiance 3D : ${t.background_color}"></span>
              </div>

              <p class="catalog-location">${t.location}</p>
              ${t.caption?`<p class="catalog-caption">« ${t.caption} »</p>`:``}

              <!-- Barre d'ajustement d'ordre de diffusion -->
              ${a?``:`
                <div class="order-controls-row">
                  <span class="order-label">Ordre province :</span>
                  <div class="order-btns">
                    <button type="button" class="btn-order-move" data-move-up="${t.id}" title="Déplacer vers l'avant dans cette province">
                      ▲ Monter
                    </button>
                    <button type="button" class="btn-order-move" data-move-down="${t.id}" title="Déplacer vers l'arrière dans cette province">
                      ▼ Descendre
                    </button>
                  </div>
                </div>
              `}

              <!-- Barre d'actions d'édition et suppression -->
              <div class="catalog-actions-row">
                <button type="button" class="btn-card-edit" data-edit-id="${t.id}">
                  ✏️ Modifier
                </button>
                <button type="button" class="btn-card-test" data-preview-id="${t.id}" title="Prévisualiser sur Laptop & Mobile">
                  👁 Tester
                </button>

                ${a?`
                  <button type="button" class="btn-card-restore" data-restore-id="${t.id}" title="Remettre dans le diaporama 3D">
                    ↺ Restaurer
                  </button>
                `:`
                  <button type="button" class="btn-card-archive" data-archive-id="${t.id}" title="Masquer du diaporama">
                    📦 Archiver
                  </button>
                `}

                <button type="button" class="btn-card-delete" data-delete-id="${t.id}" title="Supprimer">
                  🗑️
                </button>
              </div>
            </div>
          </article>
        `}).join(``),d.querySelectorAll(`[data-preview-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-preview-id`);if(n){let e=V.find(e=>e.id===n);e&&It(e)}})}),d.querySelectorAll(`[data-move-up]`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-move-up`);if(!r)return;let i=V.find(e=>e.id===r);if(!i)return;let a=V.filter(e=>e.province_id===i.province_id&&e.status===`approved`),o=a.findIndex(e=>e.id===r);if(o>0){let e=a[o];a[o]=a[o-1],a[o-1]=e,await t.reorderCatalogPhotos(i.province_id,a.map(e=>e.id)),await J()}})}),d.querySelectorAll(`[data-move-down]`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-move-down`);if(!r)return;let i=V.find(e=>e.id===r);if(!i)return;let a=V.filter(e=>e.province_id===i.province_id&&e.status===`approved`),o=a.findIndex(e=>e.id===r);if(o!==-1&&o<a.length-1){let e=a[o];a[o]=a[o+1],a[o+1]=e,await t.reorderCatalogPhotos(i.province_id,a.map(e=>e.id)),await J()}})}),d.querySelectorAll(`[data-edit-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-edit-id`);if(n){let e=V.find(e=>e.id===n);e&&Nt(e)}})}),d.querySelectorAll(`[data-archive-id]`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-archive-id`);r&&(await t.archiveCatalogPhoto(r),await J())})}),d.querySelectorAll(`[data-restore-id]`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-restore-id`);r&&(await t.restoreCatalogPhoto(r),await J())})}),d.querySelectorAll(`[data-delete-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-delete-id`);if(n){let e=V.find(e=>e.id===n);e&&Ft(e)}})})}ce?.addEventListener(`click`,()=>{ce.classList.add(`active`),le?.classList.remove(`active`),bt=`active`,Y()}),le?.addEventListener(`click`,()=>{le.classList.add(`active`),ce?.classList.remove(`active`),bt=`archived`,Y()}),fe?.addEventListener(`change`,()=>{xt=fe.value,Y()});function At(){if(!f||!Ce)return;let n=H;if(St!==`all`&&(n=n.filter(e=>e.status===St)),Ct!==`all`&&(n=n.filter(e=>e.province_id===Ct)),n.length===0){f.innerHTML=``,Ce.style.display=`flex`;return}Ce.style.display=`none`,f.innerHTML=n.map(t=>{let n=e.find(e=>e.id===t.province_id),r=n?`${n.code} · ${n.name}`:t.province_id,i=new Date(t.created_at).toLocaleDateString(`fr-FR`,{day:`numeric`,month:`short`,year:`numeric`}),a=t.status===`approved`,o=t.status===`pending`;return`
          <article class="submission-card ${t.status}" data-photo-id="${t.id}">
            <div class="card-thumb" data-preview-id="${t.id}" title="Cliquer pour prévisualiser">
              <img src="${t.image_url}" alt="${t.title}" loading="lazy" class="thumb-img" />
              <div class="card-status-badge ${t.status}">
                ${a?`✓ Approuvée`:o?`⏳ En Attente`:`✕ Rejetée`}
              </div>
              <span class="card-province-badge">${r}</span>
              <div class="thumb-overlay-hint">
                <span>👁 Prévisualiser</span>
              </div>
            </div>

            <div class="card-body">
              <div class="card-top">
                <h3 class="card-title">${t.title}</h3>
                <p class="card-location">${t.location}</p>
              </div>

              ${t.caption?`<p class="card-caption">« ${t.caption} »</p>`:`<p class="card-caption empty">Aucune légende</p>`}

              <div class="card-contributor">
                ${t.user_avatar?`<img src="${t.user_avatar}" class="contributor-avatar" alt="" />`:`<span class="contributor-initial">${t.user_name.charAt(0)}</span>`}
                <div class="contributor-meta">
                  <span class="contributor-name">${t.user_name}</span>
                  <span class="submission-date">${i}</span>
                </div>
              </div>

              <button type="button" class="btn-card-preview" data-preview-id="${t.id}">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Tester Laptop & Mobile</span>
              </button>

              <div class="card-actions">
                ${a?`
                  <a href="/?photo=${t.id}" class="btn-action-view" target="_blank">
                    👁 Diaporama ↗
                  </a>
                `:`
                  <button type="button" class="btn-action-approve" data-approve-id="${t.id}">
                    ✓ Approuver
                  </button>
                `}

                <button type="button" class="btn-action-reject" data-reject-id="${t.id}" title="Rejeter et retirer">
                  ${a?`Retirer`:`Rejeter`}
                </button>
              </div>
            </div>
          </article>
        `}).join(``),f.querySelectorAll(`[data-preview-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-preview-id`);if(n){let e=H.find(e=>e.id===n);e&&It(e)}})}),f.querySelectorAll(`.btn-action-approve`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-approve-id`);r&&(e.textContent=`Approbation...`,e.disabled=!0,await t.approvePhoto(r),await J())})}),f.querySelectorAll(`.btn-action-reject`).forEach(e=>{e.addEventListener(`click`,async n=>{n.stopPropagation();let r=e.getAttribute(`data-reject-id`);r&&confirm(`Voulez-vous rejeter cette photographie citoyenne ?`)&&(await t.rejectPhoto(r),await J())})})}xe.forEach(e=>{e.addEventListener(`click`,()=>{xe.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),St=e.getAttribute(`data-mod-status`)||`pending`,At()})}),Se?.addEventListener(`change`,()=>{Ct=Se.value,At()});function jt(){if(!p)return;Ee&&Ee.reset(),W=null,Mt(`url`),y&&(y.style.display=`none`),_&&(_.style.display=`none`);let e=n[0];Me&&(Me.value=e),m&&(m.value=e),b&&(b.style.backgroundColor=e),p.classList.add(`open`),p.setAttribute(`aria-hidden`,`false`)}function X(){p&&(p.classList.remove(`open`),p.setAttribute(`aria-hidden`,`true`))}function Mt(e){K=e,e===`url`?(Ne?.classList.add(`active`),Pe?.classList.remove(`active`),h&&(h.style.display=`block`),g&&(g.style.display=`none`)):(Pe?.classList.add(`active`),Ne?.classList.remove(`active`),g&&(g.style.display=`block`),h&&(h.style.display=`none`))}Ne?.addEventListener(`click`,()=>Mt(`url`)),Pe?.addEventListener(`click`,()=>Mt(`file`)),me?.addEventListener(`click`,jt),he?.addEventListener(`click`,jt),we?.addEventListener(`click`,X),Te?.addEventListener(`click`,X),Fe?.addEventListener(`input`,()=>{let e=Fe.value.trim();e&&x&&y&&(x.src=e,y.style.display=`block`)}),Ie?.addEventListener(`change`,async()=>{let e=Ie.files?.[0];if(e){_&&v&&(_.style.display=`flex`,v.textContent=`Optimisation WebP haute fidélité...`);try{let t=await i(e);W=t.file,x&&y&&(x.src=t.previewUrl,y.style.display=`block`),v&&(v.textContent=`Optimisé : ${r(t.originalSize)} → ${r(t.compressedSize)} (-${t.ratioPercent}%)`)}catch(t){console.error(`Erreur compression`,t),W=e}}}),Ee?.addEventListener(`submit`,async e=>{if(e.preventDefault(),!De||!Oe||!ke)return;let r=De.value,i=Oe.value.trim(),a=ke.value.trim(),o=Ae?.value.trim()||``,s=m?.value.trim()||n[0],c=Fe?.value.trim();if(K===`url`&&!c){alert(`Veuillez entrer une adresse URL valide pour l’image.`);return}if(K===`file`&&!W){alert(`Veuillez sélectionner un fichier image.`);return}S&&(S.disabled=!0,S.textContent=`Publication en cours...`);try{let e=await t.createCatalogPhoto({provinceId:r,title:i,location:a,caption:o,backgroundColor:s,imageUrl:K===`url`?c:void 0,file:K===`file`&&W?W:void 0});e.error?alert(`Erreur : ${e.error}`):(X(),await J())}catch(e){alert(`Erreur lors de l'ajout : ${e}`)}finally{S&&(S.disabled=!1,S.textContent=`✓ Publier immédiatement dans le Diaporama 3D`)}});function Nt(e){C&&(ze&&ze.reset(),G=null,D&&(D.style.display=`none`),A&&(A.style.display=`none`),Be&&(Be.value=e.id),Ve&&(Ve.value=e.province_id),He&&(He.value=e.title),Ue&&(Ue.value=e.location),We&&(We.value=e.caption||``),w&&(w.value=e.background_color),T&&(T.value=e.background_color),E&&(E.src=e.image_url),Et(Ge,w,T),C.classList.add(`open`),C.setAttribute(`aria-hidden`,`false`))}function Z(){C&&(C.classList.remove(`open`),C.setAttribute(`aria-hidden`,`true`))}Ke?.addEventListener(`click`,()=>{if(!D)return;let e=D.style.display!==`none`;D.style.display=e?`none`:`block`});function Pt(e){wt=e,e===`url`?(qe?.classList.add(`active`),Je?.classList.remove(`active`),O&&(O.style.display=`block`),k&&(k.style.display=`none`)):(Je?.classList.add(`active`),qe?.classList.remove(`active`),k&&(k.style.display=`block`),O&&(O.style.display=`none`))}qe?.addEventListener(`click`,()=>Pt(`url`)),Je?.addEventListener(`click`,()=>Pt(`file`)),Le?.addEventListener(`click`,Z),Re?.addEventListener(`click`,Z),Xe?.addEventListener(`change`,async()=>{let e=Xe.files?.[0];if(e){A&&j&&(A.style.display=`flex`,j.textContent=`Optimisation...`);try{let t=await i(e);G=t.file,E&&(E.src=t.previewUrl),j&&(j.textContent=`Optimisé : ${r(t.originalSize)} → ${r(t.compressedSize)} (-${t.ratioPercent}%)`)}catch{G=e}}}),ze?.addEventListener(`submit`,async e=>{e.preventDefault();let n=Be?.value;if(!n)return;let r=He?.value.trim(),i=Ue?.value.trim(),a=We?.value.trim(),o=Ve?.value,s=T?.value.trim(),c=D&&D.style.display!==`none`,ee=c&&wt===`url`?Ye?.value.trim():void 0,te=c&&wt===`file`&&G?G:void 0;M&&(M.disabled=!0,M.textContent=`Enregistrement...`);try{let e=await t.updateCatalogPhoto(n,{title:r,location:i,caption:a,provinceId:o,backgroundColor:s,imageUrl:ee,file:te});e.error?alert(`Erreur : ${e.error}`):(Z(),await J())}catch(e){alert(`Erreur lors de la mise à jour : ${e}`)}finally{M&&(M.disabled=!1,M.textContent=`💾 Enregistrer les Modifications`)}});function Ft(e){N&&(U=e,$e&&($e.src=e.image_url),et&&(et.textContent=e.title),tt&&(tt.textContent=e.location),N.classList.add(`open`),N.setAttribute(`aria-hidden`,`false`))}function Q(){N&&(N.classList.remove(`open`),N.setAttribute(`aria-hidden`,`true`),U=null)}Ze?.addEventListener(`click`,Q),Qe?.addEventListener(`click`,Q),nt?.addEventListener(`click`,async()=>{U&&(await t.archiveCatalogPhoto(U.id),Q(),await J())}),rt?.addEventListener(`click`,async()=>{U&&confirm(`Êtes-vous absolument sûr de vouloir supprimer définitivement "${U.title}" ? Cette action est irréversible.`)&&(await t.deletePhoto(U.id,!0),Q(),await J())});function It(n){if(!P)return;let r=e.find(e=>e.id===n.province_id),i=r?`${r.code} · ${r.name}`:n.province_id;at&&(at.textContent=i),st&&(st.textContent=n.title),ct&&(ct.textContent=`${n.location} — ${n.is_official===!1?`par `+n.user_name:`Patrimoine MVETT`}`),F&&(F.textContent=n.status===`approved`?`✓ Diffusée en 3D`:n.status===`archived`?`📦 Archivée`:`⏳ En attente`,F.className=`preview-badge-status ${n.status}`),ut&&(ut.src=n.image_url),z&&(z.style.backgroundImage=`url("${n.image_url}")`),ft&&(ft.textContent=`01 / 03 · ${r?r.code:`G1`} ${(r?r.name:`GABON`).toUpperCase()}`),pt&&(pt.textContent=n.title),mt&&(mt.textContent=n.location),ht&&(ht.src=n.image_url),gt&&(gt.textContent=n.title),_t&&(_t.textContent=n.location),yt&&(n.is_official!==!1||n.status===`approved`?(yt.innerHTML=`
            <button type="button" class="btn-modal-action-edit" id="btnPreviewEdit">
              ✏️ Modifier l'œuvre
            </button>
            <a href="/?photo=${n.id}" target="_blank" class="btn-modal-action-view">
              👁 Ouvrir dans le Diaporama 3D ↗
            </a>
          `,document.getElementById(`btnPreviewEdit`)?.addEventListener(`click`,()=>{$(),Nt(n)})):(yt.innerHTML=`
            <button type="button" class="btn-modal-action-reject" id="btnPreviewReject">
              ✕ Rejeter
            </button>
            <button type="button" class="btn-modal-action-approve" id="btnPreviewApprove">
              ✓ Approuver pour le Diaporama 3D
            </button>
          `,document.getElementById(`btnPreviewApprove`)?.addEventListener(`click`,async()=>{await t.approvePhoto(n.id),$(),await J()}),document.getElementById(`btnPreviewReject`)?.addEventListener(`click`,async()=>{await t.rejectPhoto(n.id),$(),await J()})));let a=new Image;a.src=n.image_url,a.onload=()=>{let e=a.naturalWidth/a.naturalHeight<.95;ot&&(ot.textContent=e?`📱 Format : 9:16 Portrait`:`💻 Format : 16:9 Paysage`),vt&&(e?vt.innerHTML=`✨ <strong>Photo Verticale (9:16)</strong> : Le shader la centre et ajoute un <em>flou bokeh sombre</em> cinématique en vue Laptop.`:vt.innerHTML=`✨ <strong>Photo Horizontale (16:9)</strong> : Remplissage parfait de l’écran sur Laptop, cadrée au centre sur Smartphone.`),dt&&z&&(e?(dt.classList.add(`portrait-framed`),z.style.display=`block`):(dt.classList.remove(`portrait-framed`),z.style.display=`none`))},Lt(`laptop`),P.classList.add(`open`),P.setAttribute(`aria-hidden`,`false`)}function $(){P&&(P.classList.remove(`open`),P.setAttribute(`aria-hidden`,`true`))}function Lt(e){e===`laptop`?(lt?.classList.add(`active`),I?.classList.remove(`active`),L&&(L.style.display=`flex`),R&&(R.style.display=`none`)):(lt?.classList.remove(`active`),I?.classList.add(`active`),L&&(L.style.display=`none`),R&&(R.style.display=`flex`))}lt?.addEventListener(`click`,()=>Lt(`laptop`)),I?.addEventListener(`click`,()=>Lt(`mobile`)),it?.addEventListener(`click`,$),P?.addEventListener(`click`,e=>{e.target===P&&$()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(P?.classList.contains(`open`)&&$(),p?.classList.contains(`open`)&&X(),C?.classList.contains(`open`)&&Z(),N?.classList.contains(`open`)&&Q())}),ne?.addEventListener(`click`,async()=>{await t.loginWithGoogle()}),re?.addEventListener(`click`,async()=>{await t.loginAsGuest(`Conservateur MVETT`,`alloghofrederic9@gmail.com`),await q()}),te?.addEventListener(`click`,async()=>{await t.logout(),await q()}),window.addEventListener(`mvett:auth-changed`,()=>{q()}),window.addEventListener(`mvett:catalog-updated`,()=>{J()}),window.addEventListener(`mvett:photos-updated`,()=>{J()}),Tt(),q()});