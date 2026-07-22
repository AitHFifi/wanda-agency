<template>
  <section 
    ref="heroRef"
    class="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden select-none bg-bg"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background Infinite Scrolling Marquee -->
    <div class="absolute top-[18%] sm:top-[20%] lg:top-[25%] left-0 w-full overflow-hidden pointer-events-none select-none z-0">
      <div class="flex whitespace-nowrap">
        <!-- Double the contents for seamless looping -->
        <div class="animate-marquee flex text-primary">
          <span 
            v-for="(word, index) in marqueeWords" 
            :key="'m1-' + index"
            class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8"
          >
            {{ word }}
          </span>
        </div>
        <div class="animate-marquee flex text-primary" aria-hidden="true">
          <span 
            v-for="(word, index) in marqueeWords" 
            :key="'m2-' + index"
            class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8"
          >
            {{ word }}
          </span>
        </div>
      </div>
    </div>

    <!-- Centered Parallax Cutout Image Container (Positioned in middle of hero above bottom strip) -->
    <div class="flex size-full justify-center overflow-hidden items-end pointer-events-none">
      <div 
        class="absolute bottom-[115px] sm:bottom-[130px] lg:bottom-[-10px] z-[3] transition-transform duration-300 ease-out will-change-transform"
        :style="{ transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` }"
      >
        <img 
          src="/hero_portrait.webp" 
          alt="Wanda Creative Agency" 
          class="h-[320px] sm:h-[400px] md:h-[460px] lg:h-[550px] xl:h-[645px] object-contain opacity-100 pointer-events-auto"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>

    <!-- Bottom Metadata Strip (Solid crisp black text, 100% readable) -->
    <div class="absolute bottom-0 left-0 w-full z-[10] bg-bg">
      <div class="container mx-auto relative px-4 sm:px-6 md:px-12">
        <span class="absolute left-0 top-0 z-[2] w-full">
          <span class="w-full block h-[1px] bg-black/20"></span>
        </span>
        <div class="relative z-[4] text-primary py-4 sm:py-5 md:py-6">
          <div class="grid grid-cols-2 md:grid-cols-3 items-center md:items-end gap-3 sm:gap-4">
            <!-- Services (Left Column) -->
            <div class="flex flex-col gap-[2px]">
              <p class="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">{{ t('hero.servicesLabel') }}</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">{{ t('hero.service1') }}</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">{{ t('hero.service2') }}</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">{{ t('hero.service3') }}</p>
            </div>

            <!-- Conversion CTA Button (Middle Column) -->
            <div class="col-span-2 md:col-span-1 flex items-center justify-center order-last md:order-none pt-2 md:pt-0">
              <button 
                @click="openContact"
                class="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-primary text-bg font-sans font-medium text-xs sm:text-sm lg:text-base rounded-full shadow-lg hover:bg-primary/90 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>{{ t('hero.startProject') }}</span>
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <!-- Location (Right Column) -->
            <div class="flex flex-col gap-[2px] items-end text-right">
              <p class="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">{{ t('hero.locationLabel') }}</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">{{ t('hero.locatedIn') }}</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">{{ t('hero.locationValue') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
const { open: openContact } = useContactModal()

const marqueeWords = computed(() => {
  const words = t('hero.marqueeWords')
  return Array.isArray(words) ? words : ['Crafting', 'web', 'apps', 'and', 'experiences', 'that', 'differ']
})

const heroRef = ref(null)
const offsetX = ref(0)
const offsetY = ref(0)

const handleMouseMove = (event) => {
  if (!heroRef.value) return
  const { clientWidth, clientHeight } = heroRef.value
  const { clientX, clientY } = event
  const x = (clientX / clientWidth) - 0.5
  const y = (clientY / clientHeight) - 0.5
  const maxMove = 15
  offsetX.value = x * maxMove
  offsetY.value = y * maxMove
}

const handleMouseLeave = () => {
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
  display: flex;
  flex-shrink: 0;
}
</style>
