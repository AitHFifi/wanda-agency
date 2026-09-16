<template>
  <div class="pt-28 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <!-- Hero -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Plateforme Propriétaire</span>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">WANDA CRM & Automation</h1>
          <p class="text-neutral-400 text-base md:text-lg mt-4 leading-relaxed">Centralisez tous vos prospects en temps réel, automatisez vos relances par WhatsApp & Email et maximisez votre taux de conversion commercial.</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <button @click="openModal" class="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-extrabold text-sm transition-colors shadow-lg">
              Demander une Démo →
            </button>
          </div>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
          <div class="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
            <span class="font-bold text-sm text-neutral-300">Live Dashboard Preview</span>
            <span class="text-xs px-2.5 py-1 bg-green-500/20 text-green-400 rounded-full font-bold">● Active Leads Feed</span>
          </div>
          <div class="space-y-3">
            <div class="p-3.5 bg-neutral-800/60 rounded-xl flex items-center justify-between border border-neutral-700/40">
              <div>
                <div class="font-bold text-sm">Cabinet Médical Marrakech</div>
                <div class="text-xs text-neutral-400">Source: Google Ads • Lead Qualifié</div>
              </div>
              <span class="text-xs font-extrabold text-red-400 bg-red-950/50 px-2.5 py-1 rounded-md">Rappel WhatsApp</span>
            </div>
            <div class="p-3.5 bg-neutral-800/60 rounded-xl flex items-center justify-between border border-neutral-700/40">
              <div>
                <div class="font-bold text-sm">E-commerce Fashion Casablanca</div>
                <div class="text-xs text-neutral-400">Source: Meta Ads • Devis Demandé</div>
              </div>
              <span class="text-xs font-extrabold text-green-400 bg-green-950/50 px-2.5 py-1 rounded-md">Email Envoyé</span>
            </div>
            <div class="p-3.5 bg-neutral-800/60 rounded-xl flex items-center justify-between border border-neutral-700/40">
              <div>
                <div class="font-bold text-sm">Clinique Esthétique Rabat</div>
                <div class="text-xs text-neutral-400">Source: SEO Local • Rendez-vous pris</div>
              </div>
              <span class="text-xs font-extrabold text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded-md">Confirmé</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
        <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <div class="text-3xl mb-4">📲</div>
          <h3 class="text-xl font-bold mb-2">WhatsApp Business Bot</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Envoyez des messages automatisés à vos prospects dès qu'ils remplissent un formulaire sur votre site.</p>
        </div>
        <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <div class="text-3xl mb-4">⚡</div>
          <h3 class="text-xl font-bold mb-2">Notification Instantanée</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Soyez alerte instantanément par notification push & email dès qu'un prospect à forte valeur se manifeste.</p>
        </div>
        <div class="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <div class="text-3xl mb-4">📈</div>
          <h3 class="text-xl font-bold mb-2">Suivi du ROI publicitaire</h3>
          <p class="text-xs text-neutral-400 leading-relaxed">Mesurez exactement le coût par prospect (CPL) et le retour sur investissement de chaque campagne.</p>
        </div>
      </div>
    </div>
    <DevisCalculatorModal :is-open="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)
const openModal = () => { isModalOpen.value = true }

useSeoMeta({
  title: 'WANDA CRM & Automation — Plateforme de gestion de leads',
  description: 'Solution CRM et d\'automation marketing par WANDA pour centraliser vos prospects et automatiser vos conversions.'
})
</script>
