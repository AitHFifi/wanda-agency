<template>
  <div class="bg-bg text-primary min-h-screen relative font-sans selection:bg-primary selection:text-bg">
    <!-- Header Navigation -->
    <AppHeader @open-contact="isContactOpen = true" />

    <!-- Main Content Layout with Nuxt Page Router -->
    <main class="relative z-10">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <AppFooter @open-contact="isContactOpen = true" />

    <!-- Contact Drawer Overlay -->
    <ContactPopup :is-open="isContactOpen" @close="closeContact" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { isOpen: isContactOpen, close: closeContact } = useContactModal()

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }
})
</script>
