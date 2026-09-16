<template>
  <div class="pt-28 pb-20 bg-neutral-950 text-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-5 md:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Rejoignez l'équipe</span>
        <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">Construisons ensemble le futur de la croissance digitale</h1>
        <p class="text-neutral-400 mt-4 text-base md:text-lg">Nous recherchons des talents passionnés en ingénierie web, growth marketing, media buying et design UI/UX.</p>
      </div>

      <!-- Open Positions -->
      <div class="space-y-4 max-w-4xl mx-auto">
        <div v-for="job in jobs" :key="job.title" class="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-red-600 transition-colors">
          <div>
            <div class="flex items-center gap-3">
              <h3 class="text-xl font-bold text-white">{{ job.title }}</h3>
              <span class="text-xs px-2.5 py-1 bg-red-950/60 text-red-400 border border-red-900/40 rounded-full font-semibold">{{ job.type }}</span>
            </div>
            <p class="text-xs text-neutral-400 mt-1">{{ job.location }} • {{ job.department }}</p>
          </div>
          <button @click="apply(job.title)" class="px-5 py-2.5 bg-neutral-800 hover:bg-red-600 text-white text-xs font-bold rounded-lg transition-colors shrink-0">
            Postuler →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Carrières — WANDA Agency',
  description: 'Rejoignez WANDA Agency. Opportunités de carrière en marketing digital, développement web Nuxt/Vue, et design.'
})

const jobs = [
  { title: 'Senior Media Buyer (Google & Meta Ads)', type: 'Temps plein', location: 'Marrakech / Hybride', department: 'Growth Marketing' },
  { title: 'Développeur Full-Stack Nuxt 4 / Node', type: 'Temps plein', location: 'Remote / Hybride', department: 'Ingénierie Web' },
  { title: 'UI/UX Designer & Motion Graphicer', type: 'Temps plein', location: 'Marrakech', department: 'Creative' },
  { title: 'Chef de Projet CRM & Automation', type: 'Temps plein', location: 'Marrakech', department: 'Operations' }
]

const apply = (title: string) => {
  alert(`Pour postuler au poste de "${title}", veuillez envoyer votre CV et portfolio à contact@wanda-agency.com`)
}
</script>
