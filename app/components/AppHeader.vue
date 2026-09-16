<!--
  AppHeader Component: Glassmorphic navigation bar with responsive drawer, Devis CTA, and i18n switcher.
-->
<template>
  <header class="w-full h-[88px] fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900 text-white">
    <nav class="flex max-w-7xl mx-auto justify-between items-center px-6 md:px-12 h-full">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <NuxtLink to="/" class="flex items-center gap-2 group" aria-label="Home">
          <div class="flex items-center text-white group-hover:opacity-80 transition-opacity">
            <span class="font-serif italic font-extrabold text-2xl tracking-tight text-white">Wanda<span class="text-red-600">.</span></span>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation & Devis CTA (Desktop) -->
      <div class="hidden lg:flex items-center gap-8">
        <NuxtLink to="/" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Accueil</NuxtLink>
        <NuxtLink to="/services" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Services</NuxtLink>
        <NuxtLink to="/crm" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Solution CRM</NuxtLink>
        <NuxtLink to="/work" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Réalisations</NuxtLink>
        <NuxtLink to="/carrieres" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Carrières</NuxtLink>
        <NuxtLink to="/blog" class="text-sm font-semibold text-neutral-300 hover:text-red-500 transition-colors">Blog</NuxtLink>

        <!-- Language Switcher Pill -->
        <div class="flex items-center bg-neutral-900 p-1 rounded-full border border-neutral-800 text-xs font-bold">
          <button 
            @click="setLocale('en')" 
            class="px-2.5 py-1 rounded-full transition-colors cursor-pointer"
            :class="locale === 'en' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'"
          >
            EN
          </button>
          <button 
            @click="setLocale('fr')" 
            class="px-2.5 py-1 rounded-full transition-colors cursor-pointer"
            :class="locale === 'fr' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'"
          >
            FR
          </button>
        </div>

        <!-- Devis CTA Button -->
        <button @click="isDevisModalOpen = true" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md">
          Demander un Devis →
        </button>
      </div>

      <!-- Mobile Right Controls -->
      <div class="lg:hidden flex items-center gap-3">
        <button @click="isDevisModalOpen = true" class="px-3.5 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg">
          Devis
        </button>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="p-2 text-white focus:outline-none" 
          aria-label="Toggle menu"
        >
          <span class="text-xl font-bold">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <Transition name="drawer">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 w-full h-screen bg-neutral-950 z-40 flex flex-col justify-between px-8 py-20 lg:hidden text-white">
        <div class="flex flex-col gap-6 pt-10">
          <NuxtLink to="/" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Accueil</NuxtLink>
          <NuxtLink to="/services" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Services</NuxtLink>
          <NuxtLink to="/crm" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Solution CRM</NuxtLink>
          <NuxtLink to="/work" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Réalisations</NuxtLink>
          <NuxtLink to="/carrieres" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Carrières</NuxtLink>
          <NuxtLink to="/blog" @click="isMobileMenuOpen = false" class="text-2xl font-bold hover:text-red-500">Blog</NuxtLink>

          <div class="flex items-center gap-4 pt-6 border-t border-neutral-800">
            <button @click="setLocale('fr')" class="px-4 py-2 rounded-lg border text-xs font-bold" :class="locale === 'fr' ? 'bg-red-600 border-red-600 text-white' : 'border-neutral-800 text-neutral-400'">Français</button>
            <button @click="setLocale('en')" class="px-4 py-2 rounded-lg border text-xs font-bold" :class="locale === 'en' ? 'bg-red-600 border-red-600 text-white' : 'border-neutral-800 text-neutral-400'">English</button>
          </div>
        </div>
      </div>
    </Transition>

    <DevisCalculatorModal :is-open="isDevisModalOpen" @close="isDevisModalOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '~/composables/useI18n'

const { locale, setLocale } = useI18n()
const isMobileMenuOpen = ref(false)
const isDevisModalOpen = ref(false)
</script>

<style scoped>
.drawer-enter-active, .drawer-leave-active { transition: opacity 0.3s ease; }
.drawer-enter-from, .drawer-leave-to { opacity: 0; }
</style>
