<template>
  <section class="py-16 md:py-24 bg-neutral-950 text-white overflow-hidden relative border-t border-b border-neutral-900">
    <div class="max-w-[1200px] mx-auto px-5 mb-12 text-center">
      <span class="text-red-500 text-xs font-extrabold uppercase tracking-widest block mb-2">Portfolio Interactive</span>
      <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">Nos Réalisations <span class="text-neutral-500">en 3D</span></h2>
    </div>

    <!-- 3D Perspective Scene Container -->
    <div class="relative w-full h-[400px] md:h-[500px] flex items-center justify-center [perspective:1000px]">
      <div class="w-[280px] md:w-[360px] h-[360px] md:h-[460px] relative [transform-style:preserve-3d] transition-transform duration-700 ease-out"
        :style="{ transform: `rotateY(${angle}deg)` }">
        <div v-for="(item, idx) in portfolioItems" :key="idx"
          class="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group"
          :style="{ transform: `rotateY(${idx * (360 / portfolioItems.length)}deg) translateZ(${translateZ}px)` }">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end">
            <span class="text-red-500 text-xs font-bold uppercase tracking-wider">{{ item.category }}</span>
            <h3 class="text-xl font-extrabold text-white mt-1">{{ item.title }}</h3>
            <p class="text-xs text-neutral-400 mt-1 font-semibold">{{ item.metrics }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-center gap-4 mt-8">
      <button @click="rotatePrev" aria-label="Previous Project" class="p-3 rounded-full border border-neutral-800 hover:border-red-600 bg-neutral-900 text-white font-bold transition-colors">←</button>
      <button @click="rotateNext" aria-label="Next Project" class="p-3 rounded-full border border-neutral-800 hover:border-red-600 bg-neutral-900 text-white font-bold transition-colors">→</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const angle = ref(0)
const translateZ = ref(380)

const portfolioItems = [
  { title: 'Epilmed Medical Marketing', category: 'Lead Gen & CRM', metrics: '+240% de rendez-vous qualifiés', image: 'https://redbox.ma/videos/Comp/image1.webp' },
  { title: 'Fly Way E-Commerce Scaling', category: 'Paid Media & Web', metrics: 'ROAS x4.2 sur Meta Ads', image: 'https://redbox.ma/videos/Comp/image2.webp' },
  { title: 'Koding Kids Education', category: 'Branding & Platform', metrics: 'Site Nuxt 4 + 15,000 utilisateurs', image: 'https://redbox.ma/videos/Comp/image3.webp' },
  { title: 'Ugreen Tech Store', category: 'SEO & Local Ads', metrics: 'N°1 Google Search Marrakech', image: 'https://redbox.ma/videos/Comp/image1.webp' }
]

const rotateNext = () => { angle.value -= 360 / portfolioItems.length }
const rotatePrev = () => { angle.value += 360 / portfolioItems.length }

onMounted(() => {
  const updateRadius = () => {
    translateZ.value = window.innerWidth < 768 ? 260 : 380
  }
  updateRadius()
  window.addEventListener('resize', updateRadius)
})
</script>
