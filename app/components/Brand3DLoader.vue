<template>
  <div v-if="visible" class="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 transition-opacity duration-700" :class="{ 'opacity-0 pointer-events-none': fadingOut }">
    <div class="relative w-24 h-24 [perspective:1000px]">
      <div class="cube-spinner relative w-full h-full [transform-style:preserve-3d] animate-rotate-cube">
        <div v-for="face in 6" :key="face" class="cube-face absolute inset-0 bg-red-600 border border-red-500/50 flex items-center justify-center font-extrabold text-white text-xl tracking-wider shadow-lg" :style="getFaceStyle(face)">
          WANDA
        </div>
      </div>
    </div>
    <div class="mt-12 w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
      <div class="h-full bg-red-600 animate-loading-bar"></div>
    </div>
    <span class="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-400">Chargement de WANDA...</span>
  </div>
</template>

<script setup lang="ts">
const visible = ref(true)
const fadingOut = ref(false)

const getFaceStyle = (face: number) => {
  const transforms: Record<number, string> = {
    1: 'translateZ(48px)',
    2: 'rotateY(180deg) translateZ(48px)',
    3: 'rotateY(90deg) translateZ(48px)',
    4: 'rotateY(-90deg) translateZ(48px)',
    5: 'rotateX(90deg) translateZ(48px)',
    6: 'rotateX(-90deg) translateZ(48px)'
  }
  return { transform: transforms[face] }
}

onMounted(() => {
  setTimeout(() => {
    fadingOut.value = true
    setTimeout(() => {
      visible.value = false
    }, 700)
  }, 1200)
})
</script>

<style scoped>
@keyframes rotateCube {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  25% { transform: rotateX(90deg) rotateY(90deg); }
  50% { transform: rotateX(180deg) rotateY(180deg); }
  75% { transform: rotateX(270deg) rotateY(270deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes loadingBar {
  0% { width: 0%; transform: translateX(-100%); }
  50% { width: 50%; transform: translateX(50%); }
  100% { width: 100%; transform: translateX(200%); }
}

.animate-rotate-cube {
  animation: rotateCube 3.5s infinite cubic-bezier(0.65, 0, 0.35, 1);
}

.animate-loading-bar {
  animation: loadingBar 1.8s infinite ease-in-out;
}
</style>
