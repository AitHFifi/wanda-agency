<template>
  <div class="w-full pt-40 sm:pt-44 md:pt-52 pb-24 px-6 md:px-12 bg-bg min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      
      <!-- Page Header -->
      <div class="flex flex-col gap-4 border-b border-primary/15 pb-12">
        <span class="text-xs font-semibold uppercase tracking-widest text-secondary">{{ t('workPage.tag') }}</span>
        <h1 class="font-serif italic text-4xl sm:text-6xl font-normal leading-tight text-primary">
          {{ t('workPage.heading') }}
        </h1>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a 
          v-for="project in projects" 
          :key="project.name" 
          :href="project.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col gap-4 border border-primary/10 p-5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all"
        >
          <div class="aspect-[4/3] w-full bg-white border border-primary/10 overflow-hidden rounded-xl">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-bold tracking-tight">{{ project.name }}</h3>
              <svg class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p class="text-sm text-secondary">{{ t(project.categoryKey) }} · {{ project.year }}</p>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const projects = computed(() => [
  {
    name: 'AitHStore',
    link: 'https://aithstore.vercel.app/',
    categoryKey: 'workSection.categories.digitalMarketplace',
    year: '2026',
    image: '/thumbnails/aithstore.png'
  },
  {
    name: 'OliExpress',
    link: 'https://oli-express.vercel.app/',
    categoryKey: 'workSection.categories.logisticsECommerce',
    year: '2026',
    image: '/thumbnails/oliexpress.png'
  },
  {
    name: 'Pay Bridge',
    link: 'https://pay-bridge.app/',
    categoryKey: 'workSection.categories.fintechPlatform',
    year: '2026',
    image: '/thumbnails/paybridge.png'
  }
])

useHead({
  title: computed(() => `${t('workPage.heading')} — Wanda Agency`),
  meta: [
    { name: 'description', content: computed(() => t('workPage.heading')) }
  ]
})
</script>
