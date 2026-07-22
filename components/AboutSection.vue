<template>
  <section 
    id="about"
    class="w-full py-20 lg:py-32 px-6 md:px-12 bg-bg relative z-20 shadow-[0_-10px_70px_-5px_rgba(0,0,0,0.08)]"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16">
      <!-- Animated Heading (Column Span 3) -->
      <div 
        ref="headingRef" 
        class="font-display text-2xl md:text-3xl lg:text-4xl md:col-span-3 leading-relaxed tracking-tight text-primary font-light"
      >
        <!-- Splitting text into words dynamically for clean stagger animations -->
        <span 
          v-for="(word, i) in headingWords" 
          :key="i" 
          class="animate-word inline-block mr-2 will-change-transform opacity-15"
        >
          {{ word }}
        </span>
      </div>

      <!-- Description and Button (Column Span 2) -->
      <div ref="descRef" class="flex flex-col gap-8 justify-between items-start md:col-span-2 opacity-0 translate-y-8 will-change-transform">
        <p class="text-base lg:text-lg text-secondary leading-relaxed font-medium">
          My passion for design, development, and interaction shapes a distinctive approach to modern web experiences. Focused, intentional, and always pushing the standard forward.
        </p>

        <!-- Custom animated button -->
        <div>
          <a href="#work" class="custom-btn group relative overflow-hidden inline-flex items-center gap-3 px-8 py-3.5 border border-primary rounded-full transition-colors duration-500 cursor-pointer">
            <span class="relative z-10 text-primary group-hover:text-bg font-sans font-medium text-base transition-colors duration-300">
              Explore my work
            </span>
            <svg class="relative z-10 w-4 h-4 text-primary group-hover:text-bg transition-colors duration-300 transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const headingText = "I design and build modern digital experiences — that help brands rise above the noise. Focused, intentional, and always pushing the standard forward."
const headingWords = headingText.split(' ')

const headingRef = ref(null)
const descRef = ref(null)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate words to full opacity on scroll
    gsap.to(headingRef.value.querySelectorAll('.animate-word'), {
      scrollTrigger: {
        trigger: headingRef.value,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 0.5,
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      stagger: 0.02,
      ease: 'none'
    })

    // Slide-up fade-in animation for description block and button
    gsap.to(descRef.value, {
      scrollTrigger: {
        trigger: descRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
  }
})
</script>

<style scoped>
/* Stagger helper layout */
.animate-word {
  transform: translate3d(0, 8px, 0);
}

.custom-btn {
  backface-visibility: hidden;
}
</style>
