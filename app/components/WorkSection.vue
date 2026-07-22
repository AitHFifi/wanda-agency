<template>
  <section 
    id="work"
    class="w-full bg-bg text-primary py-20 lg:py-32 px-6 md:px-12 relative z-20"
    @mousemove="updateMousePosition"
  >
    <!-- Desktop Mouse-Follow Image Preview -->
    <div 
      class="hidden lg:block fixed pointer-events-none z-50 transition-all duration-300 ease-out origin-center"
      :style="{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        transform: `translate3d(-50%, -50%, 0) scale(${hoveredIndex !== null ? 1 : 0.4})`,
        opacity: hoveredIndex !== null ? 1 : 0,
      }"
    >
      <div class="w-80 h-60 bg-white border border-primary/15 overflow-hidden shadow-2xl rounded-lg">
        <Transition name="fade" mode="out-in">
          <img 
            v-if="hoveredIndex !== null"
            :key="projects[hoveredIndex].image"
            :src="projects[hoveredIndex].image" 
            alt="Preview" 
            class="w-full h-full object-cover object-top"
          />
        </Transition>
      </div>
    </div>

    <!-- Inner Wrapper -->
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-10 lg:mb-24">
        <h2 class="text-2xl lg:text-4xl font-light">
          {{ t('workSection.title') }} <span class="text-secondary/60 font-serif italic ml-2">({{ projects.length }})</span>
        </h2>
        <div class="flex items-center gap-4">
          <NuxtLink to="/work" class="text-secondary/70 hover:text-primary transition-colors text-base font-medium">
            {{ t('workSection.viewAll') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile/Tablet Layout (Horizontal Scroll Snap Carousel) -->
      <div class="lg:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 -mx-6 px-6 sm:-mx-12 sm:px-12">
        <a 
          v-for="(project, index) in projects" 
          :key="project.name" 
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-none w-[85vw] max-w-[340px] sm:w-[360px] snap-start group flex flex-col gap-4 border border-primary/10 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all"
        >
          <div class="aspect-[4/3] w-full bg-white border border-primary/10 overflow-hidden rounded-lg">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-2 flex flex-col">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold tracking-tight">{{ project.name }}</h3>
              <svg class="w-4 h-4 text-secondary opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div class="border-t border-primary/10 my-2"></div>
            <div class="flex justify-between text-sm text-secondary">
              <span>{{ t(project.categoryKey) }}</span>
              <span>{{ project.year }}</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Desktop Layout (Interactive Table List) -->
      <div class="hidden lg:block">
        <!-- Table Header -->
        <div class="grid grid-cols-[2.5fr_1.5fr_2fr_0.5fr] gap-8 pb-6 border-b border-primary/25 text-xs uppercase tracking-wider text-muted font-bold">
          <div>{{ t('workSection.tableHeaders.client') }}</div>
          <div>{{ t('workSection.tableHeaders.category') }}</div>
          <div>{{ t('workSection.tableHeaders.services') }}</div>
          <div class="text-right">{{ t('workSection.tableHeaders.year') }}</div>
        </div>

        <!-- Table Rows -->
        <div class="flex flex-col">
          <a 
            v-for="(project, index) in projects" 
            :key="project.name"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group grid grid-cols-[2.5fr_1.5fr_2fr_0.5fr] gap-8 py-10 border-b border-primary/15 items-center hover:translate-x-2 transition-all duration-300 cursor-pointer"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
          >
            <!-- Project Name -->
            <div class="text-3xl lg:text-4xl font-semibold transition-opacity duration-300 group-hover:opacity-40 flex items-center gap-2">
              <span>{{ project.name }}</span>
              <svg class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            <!-- Category -->
            <div class="text-lg text-secondary transition-opacity duration-300 group-hover:opacity-40">
              {{ t(project.categoryKey) }}
            </div>
            
            <!-- Services -->
            <div class="text-lg text-secondary transition-opacity duration-300 group-hover:opacity-40">
              {{ t(project.servicesKey) }}
            </div>
            
            <!-- Year -->
            <div class="text-xl text-right font-mono transition-opacity duration-300 group-hover:opacity-40">
              {{ project.year }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const projects = computed(() => [
  {
    name: 'AitHStore',
    link: 'https://aithstore.vercel.app/',
    categoryKey: 'workSection.categories.digitalMarketplace',
    servicesKey: 'hero.service1',
    year: '2026',
    image: '/thumbnails/aithstore.png'
  },
  {
    name: 'OliExpress',
    link: 'https://oli-express.vercel.app/',
    categoryKey: 'workSection.categories.logisticsECommerce',
    servicesKey: 'hero.service2',
    year: '2026',
    image: '/thumbnails/oliexpress.png'
  },
  {
    name: 'Pay Bridge',
    link: 'https://pay-bridge.app/',
    categoryKey: 'workSection.categories.fintechPlatform',
    servicesKey: 'hero.service3',
    year: '2026',
    image: '/thumbnails/paybridge.png'
  }
])

const mouseX = ref(0)
const mouseY = ref(0)
const hoveredIndex = ref(null)

const updateMousePosition = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
