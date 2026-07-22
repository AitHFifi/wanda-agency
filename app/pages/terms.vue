<template>
  <div class="pt-40 sm:pt-44 md:pt-52 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <!-- Hero Header -->
    <header class="mb-16 border-b border-primary/10 pb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold mb-4">
        <span>{{ t('termsPage.tag') }}</span>
      </div>
      <h1 class="font-serif italic font-bold text-4xl sm:text-5xl md:text-6xl text-primary mb-4 tracking-tight">
        {{ t('termsPage.title') }}
      </h1>
      <p class="text-secondary text-base sm:text-lg max-w-2xl font-light leading-relaxed">
        {{ t('termsPage.subtitle') }}
      </p>
      <div class="mt-6 text-xs uppercase tracking-wider text-muted">
        {{ t('termsPage.effectiveDate') }}
      </div>
    </header>

    <!-- Main Content Layout with Sticky Sidebar -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
      <!-- Sticky Navigation Index -->
      <aside class="md:col-span-1 sticky top-36 lg:top-44 hidden md:flex flex-col gap-3 p-5 rounded-2xl bg-primary/5 border border-primary/10 text-xs">
        <span class="uppercase tracking-widest font-bold text-muted mb-2">{{ t('termsPage.onThisPage') }}</span>
        <a href="#acceptance" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s1Title') }}</a>
        <a href="#services-scope" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s2Title') }}</a>
        <a href="#intellectual-property" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s3Title') }}</a>
        <a href="#client-responsibilities" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s4Title') }}</a>
        <a href="#payment-terms" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s5Title') }}</a>
        <a href="#warranties-liability" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s6Title') }}</a>
        <a href="#termination" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s7Title') }}</a>
        <a href="#governing-law" class="text-secondary hover:text-primary transition-colors">{{ t('termsPage.sections.s8Title') }}</a>
      </aside>

      <!-- Legal Body Text -->
      <main class="md:col-span-3 space-y-12 text-secondary text-base leading-relaxed">
        <section id="acceptance" class="scroll-mt-44 lg:scroll-mt-48">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s1Title') }}</h2>
          <p>
            {{ t('termsPage.sections.s1Text') }}
          </p>
        </section>

        <section id="services-scope" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s2Title') }}</h2>
          <p class="mb-4">{{ t('termsPage.sections.s2Intro') }}</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>{{ t('termsPage.sections.s2Item1') }}</li>
            <li>{{ t('termsPage.sections.s2Item2') }}</li>
            <li>{{ t('termsPage.sections.s2Item3') }}</li>
          </ul>
          <p class="mt-4">
            {{ t('termsPage.sections.s2Outro') }}
          </p>
        </section>

        <section id="intellectual-property" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s3Title') }}</h2>
          <p class="mb-4"><strong class="text-primary">{{ t('termsPage.sections.s3Item1Label') }}</strong> {{ t('termsPage.sections.s3Item1Text') }}</p>
          <p class="mb-4"><strong class="text-primary">{{ t('termsPage.sections.s3Item2Label') }}</strong> {{ t('termsPage.sections.s3Item2Text') }}</p>
          <p><strong class="text-primary">{{ t('termsPage.sections.s3Item3Label') }}</strong> {{ t('termsPage.sections.s3Item3Text') }}</p>
        </section>

        <section id="client-responsibilities" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s4Title') }}</h2>
          <p class="mb-4">{{ t('termsPage.sections.s4Intro') }}</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>{{ t('termsPage.sections.s4Item1') }}</li>
            <li>{{ t('termsPage.sections.s4Item2') }}</li>
            <li>{{ t('termsPage.sections.s4Item3') }}</li>
          </ul>
        </section>

        <section id="payment-terms" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s5Title') }}</h2>
          <p class="mb-4">
            {{ t('termsPage.sections.s5Text1') }}
          </p>
          <p>
            {{ t('termsPage.sections.s5Text2') }}
          </p>
        </section>

        <section id="warranties-liability" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s6Title') }}</h2>
          <p class="mb-4">
            {{ t('termsPage.sections.s6Text1') }}
          </p>
          <p>
            {{ t('termsPage.sections.s6Text2') }}
          </p>
        </section>

        <section id="termination" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s7Title') }}</h2>
          <p>
            {{ t('termsPage.sections.s7Text') }}
          </p>
        </section>

        <section id="governing-law" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('termsPage.sections.s8Title') }}</h2>
          <p class="mb-6">
            {{ t('termsPage.sections.s8Text') }}
          </p>
          <div class="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div class="font-serif text-lg font-bold text-primary">{{ t('termsPage.sections.questionsTitle') }}</div>
            <div class="text-sm text-secondary mt-1">{{ t('termsPage.sections.reachOut') }} <a href="mailto:contact@wanda-agency.studio" class="text-primary hover:underline">contact@wanda-agency.studio</a></div>
          </div>
        </section>

        <!-- Document Switcher -->
        <div class="border-t border-primary/10 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 rounded-2xl bg-primary/5">
          <div class="text-sm text-secondary">{{ t('termsPage.sections.privacyPrompt') }}</div>
          <NuxtLink to="/privacy" class="text-sm font-bold text-primary hover:underline inline-flex items-center gap-2">
            <span>{{ t('termsPage.sections.privacyLink') }}</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

useSeoMeta({
  title: computed(() => `${t('termsPage.title')} | Wanda Agency`),
  description: computed(() => t('termsPage.subtitle'))
})
</script>
