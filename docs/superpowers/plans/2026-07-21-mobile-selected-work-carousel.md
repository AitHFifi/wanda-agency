# Mobile Selected Work Horizontal Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the mobile/tablet "Selected work" layout from a vertical stacked grid into a smooth horizontal scroll-snap carousel with 85vw card widths and next-card peek.

**Architecture:** Update `app/components/WorkSection.vue` mobile container (`lg:hidden`) with `flex overflow-x-auto snap-x snap-mandatory` and `scroll-snap-align: start`, style each project card with `flex-none w-[85vw] max-w-[340px]`, and hide browser scrollbars cleanly.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS.

---

### Task 1: Refactor WorkSection.vue mobile view into a horizontal carousel

**Files:**
- Modify: `app/components/WorkSection.vue`

- [ ] **Step 1: Replace mobile grid in WorkSection.vue with horizontal snap carousel**

Update `WorkSection.vue`:
```vue
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
            class="w-full h-full object-cover"
          />
        </Transition>
      </div>
    </div>

    <!-- Inner Wrapper -->
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="flex justify-between items-center mb-10 lg:mb-24">
        <h2 class="text-2xl lg:text-4xl font-light">
          Selected work <span class="text-secondary/60 font-serif italic ml-2">({{ projects.length }})</span>
        </h2>
        <div class="flex items-center gap-4">
          <span class="lg:hidden text-xs text-secondary font-medium tracking-wider uppercase">Swipe &rarr;</span>
          <NuxtLink to="/" class="text-secondary/70 hover:text-primary transition-colors text-base font-medium">
            View all
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile/Tablet Layout (Horizontal Scroll Snap Carousel) -->
      <div class="lg:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-6 pb-6 -mx-6 px-6 sm:-mx-12 sm:px-12">
        <div 
          v-for="(project, index) in projects" 
          :key="project.name" 
          class="flex-none w-[85vw] max-w-[340px] sm:w-[360px] snap-start group flex flex-col gap-4 border border-primary/10 p-4 rounded-xl bg-white/60 backdrop-blur-sm shadow-sm"
        >
          <div class="aspect-[4/3] w-full bg-white border border-primary/10 overflow-hidden rounded-lg">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="mt-2 flex flex-col">
            <h3 class="text-xl font-bold tracking-tight">{{ project.name }}</h3>
            <div class="border-t border-primary/10 my-2"></div>
            <div class="flex justify-between text-sm text-secondary">
              <span>{{ project.category }}</span>
              <span>{{ project.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Layout (Interactive Table List) -->
      <div class="hidden lg:block">
        <!-- Table Header -->
        <div class="grid grid-cols-[2.5fr_1.5fr_2fr_0.5fr] gap-8 pb-6 border-b border-primary/25 text-xs uppercase tracking-wider text-muted font-bold">
          <div>Client</div>
          <div>Category</div>
          <div>Services</div>
          <div class="text-right">Year</div>
        </div>

        <!-- Table Rows -->
        <div class="flex flex-col">
          <div 
            v-for="(project, index) in projects" 
            :key="project.name"
            class="group grid grid-cols-[2.5fr_1.5fr_2fr_0.5fr] gap-8 py-10 border-b border-primary/15 items-center hover:translate-x-2 transition-all duration-300 cursor-pointer"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
          >
            <!-- Project Name -->
            <div class="text-3xl lg:text-4xl font-semibold transition-opacity duration-300 group-hover:opacity-40">
              {{ project.name }}
            </div>
            
            <!-- Category -->
            <div class="text-lg text-secondary transition-opacity duration-300 group-hover:opacity-40">
              {{ project.category }}
            </div>
            
            <!-- Services -->
            <div class="text-lg text-secondary transition-opacity duration-300 group-hover:opacity-40">
              {{ project.services }}
            </div>
            
            <!-- Year -->
            <div class="text-xl text-right font-mono transition-opacity duration-300 group-hover:opacity-40">
              {{ project.year }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    name: 'Plan4u',
    category: 'Landing page',
    services: 'Design',
    year: '2026',
    image: '/thumbnails/plan4u.png'
  },
  {
    name: 'Trackify',
    category: 'Dashboard App',
    services: 'Design & development',
    year: '2025',
    image: '/thumbnails/trackify.png'
  },
  {
    name: 'Moraqb',
    category: 'Security Portal',
    services: 'Design & development',
    year: '2025',
    image: '/thumbnails/moraqb.png'
  },
  {
    name: 'Echopus',
    category: 'Audio Engine',
    services: 'Design & development',
    year: '2025',
    image: '/thumbnails/echopus.png'
  },
  {
    name: 'Alfakhamah SA',
    category: 'Travel Agency',
    services: 'Design & development',
    year: '2024',
    image: '/thumbnails/alfakhamah.png'
  },
  {
    name: 'Vagari Drinks',
    category: 'Brand Site',
    services: 'Design & development',
    year: '2023',
    image: '/thumbnails/vagari.png'
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

/* Hide scrollbars for chrome/safari/firefox in carousel */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
.scrollbar-none {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
```

- [ ] **Step 2: Verify zero syntax or styling errors in WorkSection.vue**

---

### Task 2: Build Verification

- [ ] **Step 1: Run build verification**

Run `pnpm run build` and ensure compilation passes with zero errors.
