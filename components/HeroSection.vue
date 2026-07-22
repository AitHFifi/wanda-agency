<template>
  <section 
    ref="heroRef"
    class="relative h-[75dvh] lg:h-[100dvh] w-full flex flex-col justify-end overflow-hidden select-none bg-bg"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background Infinite Scrolling Marquee -->
    <div class="absolute top-[30%] lg:top-[25%] left-0 w-full overflow-hidden pointer-events-none z-0">
      <div class="flex whitespace-nowrap py-4">
        <!-- Double the contents for seamless looping -->
        <div class="animate-marquee flex gap-12 text-primary">
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">Crafting</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">web</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">apps</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">and</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">experiences</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">that</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">differ</span>
        </div>
        <div class="animate-marquee flex gap-12 text-primary" aria-hidden="true">
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">Crafting</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">web</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">apps</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">and</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">experiences</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">that</span>
          <span class="font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase">differ</span>
        </div>
      </div>
    </div>

    <!-- Centered Parallax Image Container -->
    <div class="absolute inset-x-0 bottom-0 top-[20%] flex justify-center items-end z-10 overflow-hidden pointer-events-none">
      <div 
        class="relative h-[85%] max-h-[680px] aspect-[3/4] md:aspect-[4/5] lg:aspect-[1/1] xl:aspect-[4/5] transition-transform duration-300 ease-out will-change-transform flex justify-center items-end"
        :style="{ transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` }"
      >
        <img 
          ref="imageRef"
          src="/logo-wanda-classic-light.svg" 
          alt="Wanda Logo" 
          class="h-[85%] lg:h-[95%] xl:h-full object-contain pointer-events-auto filter drop-shadow-sm"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>

    <!-- Bottom Metadata Strip -->
    <div class="w-full border-t border-primary/20 relative z-20 bg-bg/20 backdrop-blur-sm">
      <div ref="detailsRef" class="max-w-7xl mx-auto flex py-8 px-6 md:px-12 justify-between items-end text-primary">
        <div class="flex flex-col gap-1">
          <p class="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary">Services</p>
          <p class="text-base md:text-lg">Frontend Development</p>
          <p class="text-base md:text-lg">UI/UX Design</p>
          <p class="text-base md:text-lg">Interactive Coding</p>
        </div>
        <div class="flex flex-col gap-1 items-end text-right">
          <p class="text-sm md:text-base font-semibold uppercase tracking-wider text-secondary">Location</p>
          <p class="text-base md:text-lg">Cairo, Egypt</p>
          <p class="text-base md:text-lg">Available Worldwide</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref(null)
const imageRef = ref(null)
const detailsRef = ref(null)
const offsetX = ref(0)
const offsetY = ref(0)

onMounted(() => {
  if (process.client) {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    // Slide up the image from below on load
    tl.from(imageRef.value, {
      y: 200,
      opacity: 0,
      scale: 0.95,
      duration: 1.8,
      delay: 0.2
    })

    // Stagger fade-in metadata column elements
    tl.from(detailsRef.value.children, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.15
    }, '-=1.2')
  }
})

const handleMouseMove = (event) => {
  if (!heroRef.value) return
  
  const { clientWidth, clientHeight } = heroRef.value
  const { clientX, clientY } = event
  
  // Calculate relative movement (-0.5 to 0.5) from center
  const x = (clientX / clientWidth) - 0.5
  const y = (clientY / clientHeight) - 0.5
  
  // Max translation range (in pixels)
  const maxMove = 25
  
  // Smoothly set offsets
  offsetX.value = x * maxMove
  offsetY.value = y * maxMove
}

const handleMouseLeave = () => {
  // Reset offsets on mouse leave
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<style scoped>
/* Infinite Horizontal Marquee Animation */
@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  display: flex;
  flex-shrink: 0;
}
</style>
