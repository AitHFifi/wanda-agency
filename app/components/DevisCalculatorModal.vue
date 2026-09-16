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
            <label class="block text-sm font-semibold mb-2 text-neutral-900 dark:text-white">Budget Estimé</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button v-for="b in budgetRanges" :key="b" @click="selectedBudget = b"
                class="py-3 px-2 text-xs font-bold rounded-lg border text-center transition-all"
                :class="selectedBudget === b ? 'border-red-600 bg-red-600 text-white' : 'border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200'">
                {{ b }}
              </button>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold mb-2 text-neutral-900 dark:text-white">Délai Souhaité</label>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="t in timelineOptions" :key="t" @click="selectedTimeline = t"
                class="py-3 px-2 text-xs font-bold rounded-lg border text-center transition-all"
                :class="selectedTimeline === t ? 'border-red-600 bg-red-600 text-white' : 'border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200'">
                {{ t }}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Contact Info -->
        <div v-if="currentStep === 3" class="space-y-4 mb-8">
          <input v-model="form.name" type="text" placeholder="Nom Complet *" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600 text-neutral-900 dark:text-white" />
          <input v-model="form.email" type="email" placeholder="Adresse Email *" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600 text-neutral-900 dark:text-white" />
          <input v-model="form.phone" type="tel" placeholder="Téléphone / WhatsApp" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600 text-neutral-900 dark:text-white" />
          <input v-model="form.company" type="text" placeholder="Nom de l'entreprise" class="w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm focus:outline-none focus:border-red-600 text-neutral-900 dark:text-white" />
        </div>

        <!-- Navigation buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <button v-if="currentStep > 1" @click="currentStep--" class="px-5 py-2.5 rounded-lg border border-neutral-200 text-sm font-semibold text-neutral-800 dark:text-neutral-200">Précédent</button>
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
    const res = await $fetch<{ success: boolean; whatsappUrl?: string }>('/api/quote', {
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
