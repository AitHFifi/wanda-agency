<template>
  <section class="py-8 bg-neutral-900 border-t border-b border-neutral-800 overflow-hidden relative">
    <div class="max-w-[1200px] mx-auto px-5 mb-4 text-center">
      <span class="text-xs font-bold uppercase tracking-widest text-neutral-400">Ils nous font confiance</span>
    </div>
    <div class="flex w-max gap-12 animate-ticker items-center">
      <div v-for="(logo, i) in doubleLogos" :key="i" class="h-12 px-6 py-2 bg-neutral-800/50 rounded-xl border border-neutral-800 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all flex-shrink-0">
        <span class="font-extrabold text-sm tracking-wider text-neutral-300">{{ logo }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = ['EPILMED', 'FLY WAY', 'HOME KALTOUM', 'KAIS LELA', 'KODING KIDS', 'NOFAS', 'OLYQ', 'PALEDO', 'PINJOY', 'UGREEN']
const doubleLogos = computed(() => [...logos, ...logos, ...logos])
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

.animate-ticker {
  animation: marquee 25s linear infinite;
}

.animate-ticker:hover {
  animation-play-state: paused;
}
</style>
