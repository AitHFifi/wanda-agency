<!--
  AppFooter Component: Global footer with social links, localized copyright, and newsletter integration.
-->
<template>
  <footer class="w-full bg-bg text-primary pt-16 md:pt-20 pb-8 px-6 md:px-12 border-t border-primary/10 relative z-20">
    <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
      
      <!-- Footer Layout Container -->
      <div class="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-12 items-center md:items-start text-center md:text-left">
        
        <!-- Branding & Language Switcher column -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 w-full md:col-span-1">
          <NuxtLink to="/" class="font-serif italic font-bold text-3xl tracking-tight">
            Wanda.
          </NuxtLink>
          <p class="text-sm text-secondary max-w-[260px] md:max-w-[200px]">
            {{ t('footer.tagline') }}
          </p>

          <!-- Language Switcher Pill in Footer -->
          <div class="flex items-center bg-primary/5 p-1 rounded-full border border-primary/10 text-xs font-bold mt-2">
            <button 
              @click="setLocale('en')" 
              class="px-3 py-1 rounded-full transition-colors cursor-pointer"
              :class="currentLocale === 'en' ? 'bg-primary text-bg shadow-sm' : 'text-secondary hover:text-primary'"
            >
              English
            </button>
            <button 
              @click="setLocale('fr')" 
              class="px-3 py-1 rounded-full transition-colors cursor-pointer"
              :class="currentLocale === 'fr' ? 'bg-primary text-bg shadow-sm' : 'text-secondary hover:text-primary'"
            >
              Français
            </button>
          </div>
        </div>

        <!-- Menu & Social Side-by-Side Wrapper on Mobile -->
        <div class="w-full grid grid-cols-2 gap-8 text-center md:contents">
          <!-- Links column (Menu) -->
          <div class="flex flex-col items-center md:items-start gap-3">
            <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">{{ t('footer.menu') }}</h4>
            <NuxtLink to="/about" class="text-base hover:opacity-70 transition-opacity">{{ t('header.about') }}</NuxtLink>
            <NuxtLink to="/work" class="text-base hover:opacity-70 transition-opacity">{{ t('header.work') }}</NuxtLink>
            <button @click="$emit('open-contact')" class="text-base hover:opacity-70 transition-opacity focus:outline-none cursor-pointer">
              {{ t('header.contact') }}
            </button>
          </div>

          <!-- Social column -->
          <div class="flex flex-col items-center md:items-start gap-3">
            <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">{{ t('footer.social') }}</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Twitter (X)</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Facebook</a>
          </div>
        </div>

        <!-- Contact details column (Bottom & Centered on Mobile) -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full border-t border-primary/10 pt-8 md:border-none md:pt-0">
          <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">{{ t('footer.getInTouch') }}</h4>
          <a href="mailto:contact@wanda-agency.studio" class="text-base font-medium hover:opacity-70 transition-opacity break-all">
            contact@wanda-agency.studio
          </a>
          <div class="flex flex-col items-center md:items-start gap-0.5 mt-1">
            <span class="text-xs font-bold text-muted uppercase tracking-wider">{{ t('footer.locationLabel') }}</span>
            <span class="text-sm text-secondary">
              {{ t('footer.locationValue') }}
            </span>
          </div>
        </div>

      </div>

      <!-- Giant Typography Footer Decor -->
      <div class="w-full select-none pointer-events-none mt-4 md:mt-8 border-t border-primary/5 pt-8 md:pt-12">
        <h2 class="w-full text-center text-primary/10 font-serif italic text-[12vw] font-bold leading-none uppercase tracking-tighter">
          Wanda Agency
        </h2>
      </div>

      <!-- Bottom Credits bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-muted border-t border-primary/5 pt-6 md:pt-8 gap-4 text-center sm:text-left">
        <span>© {{ new Date().getFullYear() }} {{ t('footer.copyright') }}</span>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="hover:underline">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/terms" class="hover:underline">{{ t('footer.terms') }}</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '~/composables/useLanguage'

defineEmits(['open-contact'])

const { t, currentLocale, setLocale } = useLanguage()
</script>

<style scoped>
</style>
