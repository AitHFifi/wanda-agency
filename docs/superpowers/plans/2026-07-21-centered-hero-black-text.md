# Hero Section Centered Layout & Solid Black Text Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Position the cutout portrait image in the middle of the screen, place the solid black text metadata strip cleanly at the bottom without overlap, and maintain `h-[100dvh]` so section 2 is accessible after scrolling.

**Architecture:** Refactor `app/components/HeroSection.vue` layout to place the portrait in the middle of the viewport above `bottom-[115px]`, style the bottom metadata strip with solid black (`text-primary` / `#1a1a1a`) text, and remove `mix-blend-difference` / `text-white` overrides.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS.

---

### Task 1: Refactor HeroSection.vue to center image and style solid black metadata

**Files:**
- Modify: `app/components/HeroSection.vue`

- [ ] **Step 1: Replace HeroSection.vue template and styles with centered portrait & solid black text layout**

```vue
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
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">Crafting</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">web</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">apps</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">and</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">experiences</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">that</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">differ</span>
        </div>
        <div class="animate-marquee flex text-primary" aria-hidden="true">
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">Crafting</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">web</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">apps</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">and</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">experiences</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">that</span>
          <span class="inline-block font-serif italic text-[90px] sm:text-[130px] md:text-[170px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">differ</span>
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
        <div class="relative z-[4] text-primary py-5 sm:py-6 md:py-8">
          <div class="flex justify-between items-end gap-2">
            <div class="flex flex-col gap-[2px]">
              <p class="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Services</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">Websites &amp; Digital Presence</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">Custom CRM &amp; Business Tools</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">SaaS &amp; Web Marketplaces</p>
            </div>
            <div class="flex flex-col gap-[2px] items-end text-right">
              <p class="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Location</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">Located in :</p>
              <p class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-primary">Libreville, Gabon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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
