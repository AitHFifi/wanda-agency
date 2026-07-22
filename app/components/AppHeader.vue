<template>
  <header class="w-full h-[100px] absolute top-0 left-0 z-50 text-primary transition-all duration-300">
    <nav class="flex max-w-7xl mx-auto justify-between items-center px-6 md:px-12 pt-6 pb-2">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <NuxtLink to="/" class="flex items-center gap-2 group" aria-label="Home">
          <div class="flex items-center text-primary group-hover:opacity-70 transition-opacity">
            <!-- Custom SVG Symbol -->
            <svg class="h-[36px] lg:h-[48px] w-auto fill-current" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 6L6 24L24 42L42 24L24 14ZM24 14L34 24L24 34L14 24L24 14Z" />
            </svg>
            <!-- Logo Text -->
            <span class="font-serif italic font-bold text-lg lg:text-xl ml-2 tracking-tight">Wanda.</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation, Language Switcher & Socials (Desktop) -->
      <div class="hidden lg:flex items-center gap-16">
        <!-- Copyright/Year -->
        <div class="flex flex-col gap-1">
          <div class="text-sm text-secondary">© {{ currentYear }}</div>
        </div>

        <!-- Section Navigation -->
        <div class="flex flex-col gap-1">
          <NuxtLink to="/about" class="text-base hover:opacity-75 transition-opacity cursor-pointer">
            <span>{{ t('header.about') }}</span>
          </NuxtLink>
          <NuxtLink to="/work" class="text-base hover:opacity-75 transition-opacity cursor-pointer">
            <span>{{ t('header.work') }}</span>
          </NuxtLink>
          <button @click="$emit('open-contact')" class="text-base hover:opacity-75 transition-opacity cursor-pointer text-left focus:outline-none">
            <span>{{ t('header.contact') }}</span>
          </button>
        </div>

        <!-- Social Connections -->
        <div class="flex flex-col gap-1">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-75 transition-opacity cursor-pointer"><span>Instagram</span></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-75 transition-opacity cursor-pointer"><span>Twitter (X)</span></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-75 transition-opacity cursor-pointer"><span>Facebook</span></a>
        </div>

        <!-- Language Switcher Pill -->
        <div class="flex items-center bg-primary/5 p-1 rounded-full border border-primary/10 text-xs font-bold tracking-wider">
          <button 
            @click="setLocale('en')" 
            class="px-3 py-1 rounded-full transition-colors cursor-pointer"
            :class="currentLocale === 'en' ? 'bg-primary text-bg shadow-sm' : 'text-secondary hover:text-primary'"
            title="English"
          >
            EN
          </button>
          <button 
            @click="setLocale('fr')" 
            class="px-3 py-1 rounded-full transition-colors cursor-pointer"
            :class="currentLocale === 'fr' ? 'bg-primary text-bg shadow-sm' : 'text-secondary hover:text-primary'"
            title="Français"
          >
            FR
          </button>
        </div>
      </div>

      <!-- Mobile Right Controls (Language pill + Mobile Burger Trigger) -->
      <div class="lg:hidden flex items-center gap-3 z-50">
        <!-- Language Switcher Pill for Mobile Bar -->
        <div class="flex items-center bg-primary/5 p-1 rounded-full border border-primary/10 text-xs font-bold">
          <button 
            @click="setLocale('en')" 
            class="px-2.5 py-0.5 rounded-full transition-colors cursor-pointer text-[11px]"
            :class="currentLocale === 'en' ? 'bg-primary text-bg' : 'text-secondary'"
          >
            EN
          </button>
          <button 
            @click="setLocale('fr')" 
            class="px-2.5 py-0.5 rounded-full transition-colors cursor-pointer text-[11px]"
            :class="currentLocale === 'fr' ? 'bg-primary text-bg' : 'text-secondary'"
          >
            FR
          </button>
        </div>

        <!-- Mobile Burger Trigger -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="flex items-center gap-2 text-primary focus:outline-none cursor-pointer" 
          aria-label="Toggle menu"
        >
          <span class="block w-2 h-2 rounded-full bg-current transition-transform duration-300" :class="{ 'scale-150 rotate-45': isMobileMenuOpen }"></span>
          <span class="font-sans font-medium text-sm">{{ isMobileMenuOpen ? t('header.close') : t('header.menu') }}</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 w-full h-[100dvh] bg-bg z-40 flex flex-col justify-between px-8 py-20 lg:hidden">
        <!-- Background Decor -->
        <div class="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span class="font-serif text-[120px] font-bold italic">Wanda</span>
        </div>

        <!-- Mobile Navigation List -->
        <div class="flex flex-col gap-6 pt-10 z-10">
          <NuxtLink to="/about" @click="isMobileMenuOpen = false" class="font-serif text-5xl font-light hover:italic transition-all duration-300">
            {{ t('header.about') }}
          </NuxtLink>
          <NuxtLink to="/work" @click="isMobileMenuOpen = false" class="font-serif text-5xl font-light hover:italic transition-all duration-300">
            {{ t('header.work') }}
          </NuxtLink>
          <button @click="$emit('open-contact'); isMobileMenuOpen = false" class="font-serif text-5xl font-light hover:italic transition-all duration-300 text-left">
            {{ t('header.contact') }}
          </button>

          <!-- Language Selector in Mobile Menu -->
          <div class="flex items-center gap-3 pt-4 border-t border-primary/10">
            <span class="text-xs uppercase font-bold text-muted tracking-widest">Language:</span>
            <div class="flex gap-2">
              <button 
                @click="setLocale('en')" 
                class="px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
                :class="currentLocale === 'en' ? 'bg-primary text-bg border-primary' : 'border-primary/20 text-primary'"
              >
                English
              </button>
              <button 
                @click="setLocale('fr')" 
                class="px-3 py-1 rounded-full text-xs font-semibold border transition-colors"
                :class="currentLocale === 'fr' ? 'bg-primary text-bg border-primary' : 'border-primary/20 text-primary'"
              >
                Français
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Social Link Strip -->
        <div class="flex justify-between items-end border-t border-primary/10 pt-8 z-10">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-muted uppercase tracking-widest">{{ t('header.connect') }}</span>
            <div class="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-sm hover:opacity-70 transition-opacity">Instagram</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="text-sm hover:opacity-70 transition-opacity">Twitter (X)</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-sm hover:opacity-70 transition-opacity">Facebook</a>
            </div>
          </div>
          <span class="text-sm text-secondary">© {{ currentYear }}</span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

defineEmits(['open-contact'])

const { t, currentLocale, setLocale } = useLanguage()
const currentYear = ref(new Date().getFullYear())
const isMobileMenuOpen = ref(false)
</script>

<style scoped>
/* Mobile Drawer Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: clip-path 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease;
}

.drawer-enter-from {
  clip-path: circle(0% at 90% 5%);
  opacity: 0;
}

.drawer-enter-to {
  clip-path: circle(150% at 90% 5%);
  opacity: 1;
}

.drawer-leave-from {
  clip-path: circle(150% at 90% 5%);
  opacity: 1;
}

.drawer-leave-to {
  clip-path: circle(0% at 90% 5%);
  opacity: 0;
}
</style>
