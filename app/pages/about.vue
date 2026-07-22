<template>
  <div class="w-full pt-40 sm:pt-44 md:pt-52 pb-24 px-6 md:px-12 bg-bg min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      
      <!-- Page Header -->
      <div class="flex flex-col gap-4 border-b border-primary/15 pb-12">
        <span class="text-xs font-semibold uppercase tracking-widest text-secondary">{{ t('aboutPage.tag') }}</span>
        <h1 class="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-primary">
          {{ t('aboutPage.heading') }}
        </h1>
      </div>

      <!-- Agency Overview Grid -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div class="md:col-span-3 flex flex-col gap-6 text-lg md:text-xl text-secondary leading-relaxed">
          <p>
            {{ t('aboutPage.p1') }}
          </p>
          <p>
            {{ t('aboutPage.p2') }}
          </p>
        </div>

        <div class="md:col-span-2 border border-primary/10 p-8 rounded-2xl bg-white/50 backdrop-blur-sm flex flex-col gap-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-muted">{{ t('aboutPage.quickInfoTitle') }}</h3>
          <div class="flex flex-col gap-4 text-sm">
            <div>
              <span class="text-secondary block">{{ t('aboutPage.location') }}</span>
              <strong class="text-base text-primary">{{ t('aboutPage.locationVal') }}</strong>
            </div>
            <div>
              <span class="text-secondary block">{{ t('aboutPage.services') }}</span>
              <strong class="text-base text-primary">{{ t('aboutPage.servicesVal') }}</strong>
            </div>
            <div>
              <span class="text-secondary block">{{ t('aboutPage.reach') }}</span>
              <strong class="text-base text-primary">{{ t('aboutPage.reachVal') }}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Services Breakdown -->
      <div class="flex flex-col gap-8 border-t border-primary/15 pt-16">
        <h2 class="text-2xl md:text-4xl font-light">{{ t('aboutPage.whatWeDo') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">01</span>
            <h3 class="text-xl font-bold">{{ t('aboutPage.service1Title') }}</h3>
            <p class="text-sm text-secondary leading-relaxed">
              {{ t('aboutPage.service1Desc') }}
            </p>
          </div>
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">02</span>
            <h3 class="text-xl font-bold">{{ t('aboutPage.service2Title') }}</h3>
            <p class="text-sm text-secondary leading-relaxed">
              {{ t('aboutPage.service2Desc') }}
            </p>
          </div>
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">03</span>
            <h3 class="text-xl font-bold">{{ t('aboutPage.service3Title') }}</h3>
            <p class="text-sm text-secondary leading-relaxed">
              {{ t('aboutPage.service3Desc') }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

useHead({
  title: computed(() => `${t('header.about')} — Wanda Agency`),
  meta: [
    { name: 'description', content: computed(() => t('aboutPage.p1')) }
  ]
})
</script>
