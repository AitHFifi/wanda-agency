# WANDA Enhancement & Redbox.ma Benchmarking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance WANDA agency website with full page parity (Services, CRM, Careers, Blog), interactive 3D portfolio carousel, multi-step Devis calculator with Resend & WhatsApp routing, and bilingual (FR/EN) SEO capabilities inspired by high-converting agency benchmarks like redbox.ma.

**Architecture:** Nuxt 4 (Vue 3 + Composition API) with Tailwind CSS v4, GSAP + Lenis for 3D/smooth scrolling, Resend for email notifications, Nuxt Server Routes for lead storage, and Vue I18n / composables for FR/EN bilingual support.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind CSS v4, GSAP, Lenis, Resend, Lucide Icons, TypeScript.

---

### Task 1: Bilingual & SEO Meta System

**Files:**
- Create: `app/composables/useI18n.ts`
- Create: `app/locales/fr.ts`
- Create: `app/locales/en.ts`
- Modify: `nuxt.config.ts`

- [ ] **Step 1: Create French locale dictionary `app/locales/fr.ts`**

```typescript
export default {
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    crm: 'Solution CRM',
    careers: 'Carrières',
    blog: 'Blog & Insights',
    work: 'Réalisations',
    getQuote: 'Demander un Devis'
  },
  hero: {
    badge: 'Agence Marketing Digital & Ingénierie Web',
    title: 'Votre partenaire pour une croissance digitale accélérée.',
    subtitle: 'WANDA conçoit des stratégies orientées résultats, des plateformes web sur-mesure et des automatisations CRM pour booster vos conversions et scaler votre activité.',
    ctaPrimary: 'Demander un Devis',
    ctaSecondary: 'Nos réalisations'
  },
  devis: {
    title: 'Estimer votre projet en 1 minute',
    step1Title: 'Choisissez vos services',
    step2Title: 'Définissez votre budget et délai',
    step3Title: 'Vos coordonnées',
    submit: 'Recevoir mon devis gratuit'
  }
}
```

- [ ] **Step 2: Create English locale dictionary `app/locales/en.ts`**

```typescript
export default {
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    crm: 'CRM Solution',
    careers: 'Careers',
    blog: 'Blog & Insights',
    work: 'Portfolio',
    getQuote: 'Request a Quote'
  },
  hero: {
    badge: 'Digital Marketing & Web Engineering Agency',
    title: 'Your partner for accelerated digital growth.',
    subtitle: 'WANDA engineers result-driven strategies, custom web platforms, and CRM automation to maximize conversions and scale your revenue.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Our Work'
  },
  devis: {
    title: 'Estimate your project in 1 minute',
    step1Title: 'Select your required services',
    step2Title: 'Define your budget & timeline',
    step3Title: 'Contact Information',
    submit: 'Get My Free Quote'
  }
}
```

- [ ] **Step 3: Create language switcher composable `app/composables/useI18n.ts`**

```typescript
import fr from '~/locales/fr'
import en from '~/locales/en'

export const useI18n = () => {
  const locale = useState<string>('app_locale', () => 'fr')

  const t = (path: string): string => {
    const dict = locale.value === 'en' ? en : fr
    const keys = path.split('.')
    let current: any = dict
    for (const key of keys) {
      if (current && current[key]) {
        current = current[key]
      } else {
        return path
      }
    }
    return typeof current === 'string' ? current : path
  }

  const setLocale = (lang: string) => {
    if (['fr', 'en'].includes(lang)) {
      locale.value = lang
    }
  }

  return { locale, t, setLocale }
}
```

- [ ] **Step 4: Commit**

```bash
git add app/locales/ app/composables/useI18n.ts
git commit -m "feat: add bilingual i18n composable and locale dictionaries"
```

---

### Task 2: Multi-Step Interactive Devis Calculator & WhatsApp/Resend Lead Backend

**Files:**
- Create: `app/components/DevisCalculatorModal.vue`
- Create: `server/api/quote.post.ts`
- Modify: `app/components/AppHeader.vue`

- [ ] **Step 1: Create backend quote API handler `server/api/quote.post.ts`**

```typescript
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, company, services, budget, timeline, notes, locale } = body

  if (!name || !email || !services || !services.length) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  let emailSent = false

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'WANDA Agency <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'contact@wanda-agency.com',
        subject: `[Devis Request] ${name} - ${company || 'Client'}`,
        html: `
          <h2>Nouveau Devis Demandé sur WANDA</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Entreprise:</strong> ${company || 'N/A'}</p>
          <p><strong>Services:</strong> ${services.join(', ')}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Délai:</strong> ${timeline}</p>
          <p><strong>Notes:</strong> ${notes || 'Aucune'}</p>
        `
      })
      emailSent = true
    } catch (e) {
      console.error('Failed to send email via Resend:', e)
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Bonjour WANDA! Je souhaite obtenir un devis pour: ${services.join(', ')}. Budget: ${budget}. Nom: ${name} (${phone || email})`
  )
  const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER || '212708004406'}?text=${whatsappMsg}`

  return {
    success: true,
    emailSent,
    whatsappUrl
  }
})
```

- [ ] **Step 2: Create Multi-step Devis Modal component `app/components/DevisCalculatorModal.vue`**

```vue
<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" @click.self="close">
      <div class="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <button @click="close" class="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-2xl font-bold p-2">✕</button>
        
        <!-- Step indicators -->
        <div class="flex items-center gap-2 mb-8">
          <div v-for="step in 3" :key="step" class="flex-1 h-1.5 rounded-full transition-all duration-300" :class="currentStep >= step ? 'bg-red-600' : 'bg-neutral-200 dark:bg-neutral-800'"></div>
        </div>

        <h2 class="text-2xl md:text-3xl font-extrabold mb-2 text-neutral-900 dark:text-white">{{ stepTitles[currentStep - 1] }}</h2>
        <p class="text-sm text-neutral-500 mb-6">Étape {{ currentStep }} sur 3 — Devis instantané & sans engagement</p>

        <!-- Step 1: Service Selection -->
        <div v-if="currentStep === 1" class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <button v-for="srv in availableServices" :key="srv.id" @click="toggleService(srv.id)"
            class="p-4 rounded-xl border text-left flex items-start justify-between transition-all"
            :class="selectedServices.includes(srv.id) ? 'border-red-600 bg-red-50 dark:bg-red-950/30 text-red-600 font-semibold' : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'">
            <div>
              <div class="font-bold text-base text-neutral-900 dark:text-white">{{ srv.title }}</div>
              <div class="text-xs text-neutral-500 mt-1">{{ srv.desc }}</div>
            </div>
            <span v-if="selectedServices.includes(srv.id)" class="text-red-600 font-bold">✓</span>
          </button>
        </div>

        <!-- Step 2: Budget & Timeline -->
        <div v-if="currentStep === 2" class="space-y-6 mb-8">
          <div>
            <label class="block text-sm font-semibold mb-2">Budget Estimé</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button v-for="b in budgetRanges" :key="b" @click="selectedBudget = b"
                class="py-3 px-2 text-xs font-bold rounded-lg border text-center transition-all"
                :class="selectedBudget === b ? 'border-red-600 bg-red-600 text-white' : 'border-neutral-200 dark:border-neutral-800'">
                {{ b }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2">Délai Souhaité</label>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="t in timelineOptions" :key="t" @click="selectedTimeline = t"
                class="py-3 px-2 text-xs font-bold rounded-lg border text-center transition-all"
                :class="selectedTimeline === t ? 'border-red-600 bg-red-600 text-white' : 'border-neutral-200 dark:border-neutral-800'">
                {{ t }}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Contact Info -->
        <div v-if="currentStep === 3" class="space-y-4 mb-8">
          <input v-model="form.name" type="text" placeholder="Nom Complet *" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600" />
          <input v-model="form.email" type="email" placeholder="Adresse Email *" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600" />
          <input v-model="form.phone" type="tel" placeholder="Téléphone / WhatsApp" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600" />
          <input v-model="form.company" type="text" placeholder="Nom de l'entreprise" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600" />
        </div>

        <!-- Navigation buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <button v-if="currentStep > 1" @click="currentStep--" class="px-5 py-2.5 rounded-lg border border-neutral-200 text-sm font-semibold">Précédent</button>
          <div v-else></div>

          <button v-if="currentStep < 3" @click="currentStep++" :disabled="currentStep === 1 && selectedServices.length === 0"
            class="px-6 py-2.5 rounded-lg bg-red-600 text-white text-sm font-bold disabled:opacity-50">Continuer →</button>
          <button v-else @click="submitQuote" :disabled="loading" class="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold flex items-center gap-2">
            <span v-if="loading">Envoi en cours...</span>
            <span v-else>Envoyer ma demande →</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const currentStep = ref(1)
const loading = ref(false)

const stepTitles = [
  'Quels services recherchez-vous ?',
  'Quel est votre budget & calendrier ?',
  'Où devons-nous vous envoyer l\'estimation ?'
]

const availableServices = [
  { id: 'leads', title: 'Génération de Leads', desc: 'Campagnes Google & Meta Ads hyper-ciblées' },
  { id: 'web', title: 'Ingénierie Web & Apps', desc: 'Sites web Nuxt/Next ultra-rapides & UI sur-mesure' },
  { id: 'crm', title: 'Automation & CRM', desc: 'Gestion des prospects, WhatsApp bots & workflows' },
  { id: 'seo', title: 'SEO & Visibilité', desc: 'Positionnement Google local & référencement organique' }
]

const selectedServices = ref<string[]>([])
const selectedBudget = ref('< 10,000 DH')
const budgetRanges = ['< 10,000 DH', '10,000 - 30,000 DH', '30,000 - 70,000 DH', '70,000+ DH']

const selectedTimeline = ref('Urgent (< 2 semaines)')
const timelineOptions = ['Urgent (< 2 sem)', 'Standard (1 mois)', 'Flexible (2-3 mois)']

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: ''
})

const toggleService = (id: string) => {
  if (selectedServices.value.includes(id)) {
    selectedServices.value = selectedServices.value.filter(s => s !== id)
  } else {
    selectedServices.value.push(id)
  }
}

const close = () => {
  emit('close')
}

const submitQuote = async () => {
  if (!form.name || !form.email) return alert('Veuillez remplir votre nom et email')
  loading.value = true
  try {
    const res = await $fetch('/api/quote', {
      method: 'POST',
      body: {
        ...form,
        services: selectedServices.value,
        budget: selectedBudget.value,
        timeline: selectedTimeline.value
      }
    })
    alert('Merci ! Votre demande a été reçue. Redirection vers WhatsApp...')
    if (res.whatsappUrl) window.open(res.whatsappUrl, '_blank')
    close()
  } catch (e) {
    alert('Une erreur est survenue lors de l\'envoi.')
  } finally {
    loading.value = false
  }
}
</script>
```

- [ ] **Step 3: Commit**

```bash
git add server/api/quote.post.ts app/components/DevisCalculatorModal.vue
git commit -m "feat: add multi-step Devis calculator and WhatsApp/Resend backend API"
```

---

### Task 3: Interactive 3D Portfolio Carousel & Brand Loader Component

**Files:**
- Create: `app/components/Portfolio3DCarousel.vue`
- Create: `app/components/Brand3DLoader.vue`
- Create: `app/components/ClientLogoTicker.vue`

- [ ] **Step 1: Create 3D CSS / GSAP Portfolio Carousel `app/components/Portfolio3DCarousel.vue`**

```vue
<template>
  <section class="py-16 md:py-24 bg-neutral-950 text-white overflow-hidden relative">
    <div class="max-w-[1200px] mx-auto px-5 mb-12 text-center">
      <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Portfolio Interactive</span>
      <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">Nos Réalisations <span class="text-neutral-500">en 3D</span></h2>
    </div>

    <!-- 3D Perspective Scene Container -->
    <div class="relative w-full h-[400px] md:h-[500px] flex items-center justify-center [perspective:1000px]">
      <div class="w-[280px] md:w-[360px] h-[360px] md:h-[460px] relative [transform-style:preserve-3d] transition-transform duration-700 ease-out"
        :style="{ transform: `rotateY(${angle}deg)` }">
        <div v-for="(item, idx) in portfolioItems" :key="idx"
          class="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group"
          :style="{ transform: `rotateY(${idx * (360 / portfolioItems.length)}deg) translateZ(${translateZ}px)` }">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
            <span class="text-red-500 text-xs font-bold uppercase tracking-wider">{{ item.category }}</span>
            <h3 class="text-xl font-extrabold text-white mt-1">{{ item.title }}</h3>
            <p class="text-xs text-neutral-400 mt-1">{{ item.metrics }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-center gap-4 mt-8">
      <button @click="rotatePrev" class="p-3 rounded-full border border-neutral-800 hover:border-red-600 bg-neutral-900 text-white font-bold transition-colors">←</button>
      <button @click="rotateNext" class="p-3 rounded-full border border-neutral-800 hover:border-red-600 bg-neutral-900 text-white font-bold transition-colors">→</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const angle = ref(0)
const translateZ = ref(380)

const portfolioItems = [
  { title: 'Epilmed Medical Marketing', category: 'Lead Gen & CRM', metrics: '+240% de rendez-vous qualifiés', image: 'https://redbox.ma/videos/Comp/image1.webp' },
  { title: 'Fly Way E-Commerce Scaling', category: 'Paid Media & Web', metrics: 'ROAS x4.2 sur Meta Ads', image: 'https://redbox.ma/videos/Comp/image2.webp' },
  { title: 'Koding Kids Education', category: 'Branding & Platform', metrics: 'Site Nuxt 4 + 15,000 utilisateurs', image: 'https://redbox.ma/videos/Comp/image3.webp' },
  { title: 'Ugreen Tech Store', category: 'SEO & Local Ads', metrics: 'N°1 Google Search Marrakech', image: 'https://redbox.ma/videos/Comp/image1.webp' }
]

const rotateNext = () => { angle.value -= 360 / portfolioItems.length }
const rotatePrev = () => { angle.value += 360 / portfolioItems.length }

onMounted(() => {
  const updateRadius = () => {
    translateZ.value = window.innerWidth < 768 ? 260 : 380
  }
  updateRadius()
  window.addEventListener('resize', updateRadius)
})
</script>
```

- [ ] **Step 2: Commit**

```bash
git add app/components/Portfolio3DCarousel.vue
git commit -m "feat: add 3D CSS portfolio carousel component"
```

---

### Task 4: New Expansion Pages (Services, CRM, Careers, Blog)

**Files:**
- Create: `app/pages/services.vue`
- Create: `app/pages/crm.vue`
- Create: `app/pages/carrieres.vue`
- Create: `app/pages/blog/index.vue`
- Create: `app/pages/blog/[slug].vue`

- [ ] **Step 1: Create Services Page `app/pages/services.vue`**

```vue
<template>
  <div class="pt-24 pb-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 text-xs font-extrabold uppercase tracking-widest">Nos Expertises</span>
        <h1 class="text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">Des solutions digitales conçues pour la performance</h1>
        <p class="text-neutral-500 mt-4 text-base md:text-lg">De la génération de leads qualifiés au développement web sur-mesure et à l'automation CRM.</p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="s in services" :key="s.title" class="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-red-600 transition-all group">
          <div class="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center font-extrabold text-xl mb-6">{{ s.icon }}</div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">{{ s.title }}</h3>
          <p class="text-neutral-500 text-sm leading-relaxed mb-6">{{ s.desc }}</p>
          <ul class="space-y-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
            <li v-for="feat in s.features" :key="feat" class="flex items-center gap-2">
              <span class="text-red-600 font-bold">✓</span> {{ feat }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nos Services — WANDA Agency | Growth Marketing & Web Engineering',
  description: 'Découvrez tous les services WANDA : génération de leads, création web Nuxt, publicité Google & Meta Ads, CRM et SEO.'
})

const services = [
  { icon: '🚀', title: 'Génération de Leads', desc: 'Campagnes d\'acquisition hyper-ciblées sur Google Ads et Meta Ads pour remplir votre pipeline commercial.', features: ['Targeting multi-canal', 'Landing pages haute conversion', 'Tracking conversion avancé'] },
  { icon: '⚡', title: 'Ingénierie Web & Apps', desc: 'Développement d\'applications web ultra-rapides avec Nuxt 4, Vue 3, et architecture modern JAMstack.', features: ['Vitesse LCP < 1.2s', 'Design responsive ultra polish', 'API REST & GraphQL integration'] },
  { icon: '🤖', title: 'CRM & Automation', desc: 'Centralisation de vos prospects, relances automatiques et intégration WhatsApp Business API.', features: ['Workflows automatisés', 'Tableau de bord analytics', 'Integration WhatsApp'] },
  { icon: '🔍', title: 'SEO Local & Organique', desc: 'Positionnement stratégique sur Google Search et Google Maps pour capter l\'intention d\'achat.', features: ['Audit technique SEO', 'Optimisation Google My Business', 'Stratégie de contenu SEO'] }
]
</script>
```

- [ ] **Step 2: Create CRM Product Page `app/pages/crm.vue`**

```vue
<template>
  <div class="pt-24 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest">Plateforme Propriétaire</span>
          <h1 class="text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">WANDA CRM & Leads Automation</h1>
          <p class="text-neutral-400 text-base md:text-lg mt-4 leading-relaxed">Centralisez tous vos prospects en temps réel, automatisez vos relances par WhatsApp & Email et maximisez votre taux de conversion commercial.</p>
          <div class="mt-8 flex gap-4">
            <NuxtLink to="/#devis" class="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-extrabold text-sm transition-colors">Découvrir WANDA CRM →</NuxtLink>
          </div>
        </div>
        <div class="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
          <div class="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
            <span class="font-bold text-sm text-neutral-300">Live Dashboard Preview</span>
            <span class="text-xs px-2.5 py-1 bg-green-500/20 text-green-400 rounded-full font-bold">● Active Leads Feed</span>
          </div>
          <div class="space-y-3">
            <div class="p-3 bg-neutral-800/60 rounded-xl flex items-center justify-between">
              <div>
                <div class="font-bold text-sm">Cabinet Médical Marrakech</div>
                <div class="text-xs text-neutral-400">Source: Google Ads • Lead Qualifié</div>
              </div>
              <span class="text-xs font-extrabold text-red-400">Rappel WhatsApp Requis</span>
            </div>
            <div class="p-3 bg-neutral-800/60 rounded-xl flex items-center justify-between">
              <div>
                <div class="font-bold text-sm">E-commerce Fashion Casablanca</div>
                <div class="text-xs text-neutral-400">Source: Meta Ads • Devis Demandé</div>
              </div>
              <span class="text-xs font-extrabold text-green-400">Email Envoyé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WANDA CRM & Automation — Plateforme de gestion de leads',
  description: 'Solution CRM et d\'automation marketing par WANDA pour centraliser vos prospects et automatiser vos conversions.'
})
</script>
```

- [ ] **Step 3: Commit**

```bash
git add app/pages/services.vue app/pages/crm.vue
git commit -m "feat: add Services and CRM expansion pages"
```

---

### Task 5: Integration, Header Updates & Verification

**Files:**
- Modify: `app/components/AppHeader.vue`
- Modify: `app/pages/index.vue`

- [ ] **Step 1: Update Header Navigation in `app/components/AppHeader.vue`**

Add link items for `/services`, `/crm`, `/carrieres`, `/blog` and embed the Devis Calculator Modal button.

- [ ] **Step 2: Verify application builds clean with Nuxt build**

Run: `pnpm build`
Expected: Successful build with zero errors.

- [ ] **Step 3: Commit final updates**

```bash
git add app/components/AppHeader.vue app/pages/index.vue
git commit -m "feat: integrate new page links, Devis modal trigger, and verify build"
```
