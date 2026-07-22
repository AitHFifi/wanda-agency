<template>
  <div class="pt-40 sm:pt-44 md:pt-52 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
    <!-- Hero Header -->
    <header class="mb-16 border-b border-primary/10 pb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold mb-4">
        <span>{{ t('privacyPage.tag') }}</span>
      </div>
      <h1 class="font-serif italic font-bold text-4xl sm:text-5xl md:text-6xl text-primary mb-4 tracking-tight">
        {{ t('privacyPage.title') }}
      </h1>
      <p class="text-secondary text-base sm:text-lg max-w-2xl font-light leading-relaxed">
        {{ t('privacyPage.subtitle') }}
      </p>
      <div class="mt-6 text-xs uppercase tracking-wider text-muted">
        {{ t('privacyPage.effectiveDate') }}
      </div>
    </header>

    <!-- Main Content Layout with Sticky Sidebar -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
      <!-- Sticky Navigation Index -->
      <aside class="md:col-span-1 sticky top-36 lg:top-44 hidden md:flex flex-col gap-3 p-5 rounded-2xl bg-primary/5 border border-primary/10 text-xs">
        <span class="uppercase tracking-widest font-bold text-muted mb-2">{{ t('privacyPage.onThisPage') }}</span>
        <a href="#overview" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s1Title') }}</a>
        <a href="#information-collected" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s2Title') }}</a>
        <a href="#how-we-use" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s3Title') }}</a>
        <a href="#data-storage" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s4Title') }}</a>
        <a href="#cookies" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s5Title') }}</a>
        <a href="#third-party" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s6Title') }}</a>
        <a href="#your-rights" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s7Title') }}</a>
        <a href="#contact-us" class="text-secondary hover:text-primary transition-colors">{{ t('privacyPage.sections.s8Title') }}</a>
      </aside>

      <!-- Legal Body Text -->
      <main class="md:col-span-3 space-y-12 text-secondary text-base leading-relaxed">
        <section id="overview" class="scroll-mt-44 lg:scroll-mt-48">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s1Title') }}</h2>
          <p>
            {{ t('privacyPage.sections.s1Text') }}
          </p>
        </section>

        <section id="information-collected" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s2Title') }}</h2>
          <p class="mb-4">{{ t('privacyPage.sections.s2Intro') }}</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong class="text-primary">{{ t('privacyPage.sections.s2Item1Label') }}</strong> {{ t('privacyPage.sections.s2Item1Text') }}</li>
            <li><strong class="text-primary">{{ t('privacyPage.sections.s2Item2Label') }}</strong> {{ t('privacyPage.sections.s2Item2Text') }}</li>
          </ul>
        </section>

        <section id="how-we-use" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s3Title') }}</h2>
          <p class="mb-4">{{ t('privacyPage.sections.s3Intro') }}</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>{{ t('privacyPage.sections.s3Item1') }}</li>
            <li>{{ t('privacyPage.sections.s3Item2') }}</li>
            <li>{{ t('privacyPage.sections.s3Item3') }}</li>
            <li>{{ t('privacyPage.sections.s3Item4') }}</li>
          </ul>
        </section>

        <section id="data-storage" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s4Title') }}</h2>
          <p>
            {{ t('privacyPage.sections.s4Text') }}
          </p>
        </section>

        <section id="cookies" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s5Title') }}</h2>
          <p>
            {{ t('privacyPage.sections.s5Text') }}
          </p>
        </section>

        <section id="third-party" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s6Title') }}</h2>
          <p>
            {{ t('privacyPage.sections.s6Text') }}
          </p>
        </section>

        <section id="your-rights" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s7Title') }}</h2>
          <p class="mb-4">{{ t('privacyPage.sections.s7Intro') }}</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>{{ t('privacyPage.sections.s7Item1') }}</li>
            <li>{{ t('privacyPage.sections.s7Item2') }}</li>
            <li>{{ t('privacyPage.sections.s7Item3') }}</li>
            <li>{{ t('privacyPage.sections.s7Item4') }}</li>
          </ul>
        </section>

        <section id="contact-us" class="scroll-mt-44 lg:scroll-mt-48 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">{{ t('privacyPage.sections.s8Title') }}</h2>
          <p class="mb-6">
            {{ t('privacyPage.sections.s8Text') }}
          </p>
          <div class="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div class="font-serif text-lg font-bold text-primary">{{ t('privacyPage.sections.teamTitle') }}</div>
              <div class="text-sm text-secondary">{{ t('privacyPage.sections.teamLocation') }}</div>
              <div class="text-sm text-secondary mt-1">Email: <a href="mailto:contact@wanda-agency.studio" class="text-primary hover:underline">contact@wanda-agency.studio</a></div>
            </div>
            <a href="mailto:contact@wanda-agency.studio" class="px-6 py-3 rounded-full bg-primary text-bg font-medium text-sm hover:opacity-90 transition-opacity">
              {{ t('privacyPage.sections.contactButton') }}
            </a>
          </div>
        </section>

        <!-- Document Switcher -->
        <div class="border-t border-primary/10 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 rounded-2xl bg-primary/5">
          <div class="text-sm text-secondary">{{ t('privacyPage.sections.termsPrompt') }}</div>
          <NuxtLink to="/terms" class="text-sm font-bold text-primary hover:underline inline-flex items-center gap-2">
            <span>{{ t('privacyPage.sections.termsLink') }}</span>
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
  title: computed(() => `${t('privacyPage.title')} | Wanda Agency`),
  description: computed(() => t('privacyPage.subtitle'))
})
</script>
