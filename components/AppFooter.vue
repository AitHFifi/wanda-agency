<template>
  <footer class="w-full bg-bg text-primary pt-20 pb-8 px-6 md:px-12 border-t border-primary/10 relative z-20">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      
      <!-- Footer Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        
        <!-- Branding column -->
        <div class="flex flex-col gap-4 md:col-span-1">
          <NuxtLink to="/" class="font-serif italic font-bold text-3xl tracking-tight">
            Wanda.
          </NuxtLink>
          <p class="text-sm text-secondary max-w-[200px]">
            Elevating digital design & custom development to the next level.
          </p>
        </div>

        <!-- Links column -->
        <div class="flex flex-col gap-3">
          <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Menu</h4>
          <a href="#about" class="text-base hover:opacity-70 transition-opacity">About</a>
          <a href="#work" class="text-base hover:opacity-70 transition-opacity">Work</a>
          <button @click="$emit('open-contact')" class="text-base hover:opacity-70 transition-opacity text-left focus:outline-none">
            Contact
          </button>
        </div>

        <!-- Social column -->
        <div class="flex flex-col gap-3">
          <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Social</h4>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Linkedin</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Github</a>
        </div>

        <!-- Contact details column -->
        <div class="flex flex-col gap-3">
          <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Get in touch</h4>
          <a href="mailto:hello@wanda.agency" class="text-base hover:opacity-70 transition-opacity break-all">
            hello@wanda.agency
          </a>
          <div class="flex flex-col gap-0.5 mt-2">
            <span class="text-xs font-bold text-muted uppercase tracking-wider">Phone</span>
            <a href="tel:+20 155 039 1373" class="text-sm hover:opacity-70 transition-opacity">
              +20 155 039 1373
            </a>
          </div>
        </div>

      </div>

      <!-- Giant Typography Footer Decor -->
      <div class="w-full select-none pointer-events-none mt-8 border-t border-primary/5 pt-12 overflow-hidden">
        <h2 
          ref="decorRef" 
          class="w-full text-center text-primary/10 font-serif italic text-[12vw] font-bold leading-none uppercase tracking-tighter opacity-0 translate-y-12 scale-90 will-change-transform"
        >
          Wanda Agency
        </h2>
      </div>

      <!-- Bottom Credits bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-muted border-t border-primary/5 pt-8 gap-4">
        <span>© {{ new Date().getFullYear() }} Wanda Agency. All rights reserved.</span>
        <div class="flex gap-6">
          <NuxtLink to="/" class="hover:underline">Privacy Policy</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Terms of Service</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineEmits(['open-contact'])

const decorRef = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Smoothly scale up and reveal the giant footer text when scrolled into view
    gsap.to(decorRef.value, {
      scrollTrigger: {
        trigger: decorRef.value,
        start: 'top 95%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.4,
      ease: 'power3.out'
    })
  }
})
</script>

<style scoped>
/* Scoped adjustments */
</style>
