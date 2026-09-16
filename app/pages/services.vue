<template>
  <div class="pt-28 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Nos Expertises</span>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">Des solutions digitales conçues pour la performance</h1>
        <p class="text-neutral-400 mt-4 text-base md:text-lg">De la génération de leads qualifiés au développement web sur-mesure et à l'automation CRM.</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="s in services" :key="s.title" class="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/60 hover:border-red-600 transition-all group relative overflow-hidden">
          <div class="w-12 h-12 rounded-xl bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center font-extrabold text-2xl mb-6">{{ s.icon }}</div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">{{ s.title }}</h3>
          <p class="text-neutral-400 text-sm leading-relaxed mb-6">{{ s.desc }}</p>
          <ul class="space-y-2 text-xs font-semibold text-neutral-300">
            <li v-for="feat in s.features" :key="feat" class="flex items-center gap-2">
              <span class="text-red-500 font-bold">✓</span> {{ feat }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="mt-20 p-10 rounded-3xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-950 border border-red-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold">Prêt à accélérer votre croissance ?</h2>
          <p class="text-neutral-400 text-sm mt-1">Obtenez une stratégie d'acquisition sur-mesure adaptée à vos objectifs.</p>
        </div>
        <button @click="openModal" class="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-lg shrink-0">
          Demander un Devis Gratuit →
        </button>
      </div>
    </div>
    <DevisCalculatorModal :is-open="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
const isModalOpen = ref(false)
const openModal = () => { isModalOpen.value = true }

useSeoMeta({
  title: 'Nos Services — WANDA Agency | Growth Marketing & Web Engineering',
  description: 'Découvrez tous les services WANDA : génération de leads, création web Nuxt, publicité Google & Meta Ads, CRM et SEO.'
})

const services = [
  { icon: '🚀', title: 'Génération de Leads', desc: 'Campagnes d\'acquisition hyper-ciblées sur Google Ads et Meta Ads pour remplir votre pipeline commercial.', features: ['Targeting multi-canal', 'Landing pages haute conversion', 'Tracking conversion avancé'] },
  { icon: '⚡', title: 'Ingénierie Web & Apps', desc: 'Développement d\'applications web ultra-rapides avec Nuxt 4, Vue 3, et architecture modern JAMstack.', features: ['Vitesse LCP < 1.2s', 'Design responsive ultra polish', 'API REST & GraphQL integration'] },
  { icon: '🤖', title: 'CRM & Automation', desc: 'Centralisation de vos prospects, relances automatiques et intégration WhatsApp Business API.', features: ['Workflows automatisés', 'Tableau de bord analytics', 'Integration WhatsApp'] },
  { icon: '🔍', title: 'SEO Local & Organique', desc: 'Positionnement stratégique sur Google Search et Google Maps pour capter l\'intention d\'achat.', features: ['Audit technique SEO', 'Optimisation Google My Business', 'Stratégie de contenu SEO'] },
  { icon: '🎨', title: 'Branding & Content', desc: 'Création d\'identité visuelle percutante, assets publicitaires vidéo & Motion Design.', features: ['Design system complet', 'Vidéos publicitaires optimisées', 'Copywriting haute conversion'] },
  { icon: '📊', title: 'Conseil & Growth Audit', desc: 'Analyse approfondie de votre tunnel de vente et optimisation du taux de conversion (CRO).', features: ['Audit de tunnel de conversion', 'A/B Testing continu', 'Rapports ROI mensuels'] }
]
</script>
