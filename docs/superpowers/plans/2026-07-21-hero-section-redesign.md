# Hero Section Redesign & Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the hero section to remove the blur overlay, integrate the clean transparent cutout portrait from the reference site, update services and location to Libreville, Gabon, and enhance the mobile layout to match mahmoudashrf.vercel.app.

**Architecture:** Update the static asset in `public/hero_portrait.webp`, refactor `app/components/HeroSection.vue` to remove backdrop blur containers and adjust layout classes for pixel-perfect mobile and desktop responsiveness, and update metadata strings across the app.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS, GSAP, Lenis.

---

### Task 1: Fetch and set up transparent cutout portrait asset

**Files:**
- Create/Overwrite: `public/hero_portrait.webp`

- [ ] **Step 1: Download the transparent cutout portrait from reference website**

Run script or fetch utility to save `https://mahmoudashrf.vercel.app/hero_mahmoud.webp` to `public/hero_portrait.webp`.

- [ ] **Step 2: Verify asset existence and format**

Verify file exists at `public/hero_portrait.webp` and is non-empty.

---

### Task 2: Refactor HeroSection.vue to remove blur, update services, location, and mobile view

**Files:**
- Modify: `app/components/HeroSection.vue`

- [ ] **Step 1: Update services, location, image source, and styling in HeroSection.vue**

Replace the contents of `app/components/HeroSection.vue`:
```vue
<template>
  <section 
    ref="heroRef"
    class="relative h-[70dvh] lg:h-[100dvh] w-full flex flex-col justify-end overflow-hidden select-none bg-bg"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Background Infinite Scrolling Marquee -->
    <div class="absolute top-[120px] left-0 w-full overflow-hidden pointer-events-none z-0">
      <div class="flex whitespace-nowrap">
        <!-- Double the contents for seamless looping -->
        <div class="animate-marquee flex text-primary">
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">Crafting</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">web</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">apps</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">and</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">experiences</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">that</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">differ</span>
        </div>
        <div class="animate-marquee flex text-primary" aria-hidden="true">
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">Crafting</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">web</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">apps</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">and</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">experiences</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">that</span>
          <span class="inline-block font-serif italic text-[80px] md:text-[150px] lg:text-[230px] leading-none uppercase px-4 md:px-6 lg:px-8">differ</span>
        </div>
      </div>
    </div>

    <!-- Centered Parallax Cutout Image Container -->
    <div class="flex size-full justify-center overflow-hidden items-end pointer-events-none">
      <div 
        class="absolute bottom-[-10px] z-[3] transition-transform duration-300 ease-out will-change-transform"
        :style="{ transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` }"
      >
        <img 
          src="/hero_portrait.webp" 
          alt="Wanda Creative Portfolio" 
          class="h-[420px] sm:h-[480px] lg:h-[550px] xl:h-[645px] object-contain opacity-100 pointer-events-auto"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>

    <!-- Bottom Metadata Strip (No blur overlay, crisp text layout) -->
    <div class="absolute bottom-0 left-0 w-full z-[4]">
      <div class="container mx-auto relative px-6 md:px-12">
        <span class="absolute left-0 top-0 z-[2] w-full">
          <span class="w-full block h-[1px] bg-black/20"></span>
        </span>
        <div class="relative z-[4] text-primary py-6 md:py-8">
          <div class="flex justify-between items-end">
            <div class="flex flex-col gap-1">
              <p class="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Services</p>
              <p class="text-sm md:text-base lg:text-lg">Websites &amp; Digital Presence</p>
              <p class="text-sm md:text-base lg:text-lg">Custom CRM &amp; Business Tools</p>
              <p class="text-sm md:text-base lg:text-lg">SaaS &amp; Web Marketplaces</p>
            </div>
            <div class="flex flex-col gap-1 items-end text-right">
              <p class="text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Location</p>
              <p class="text-sm md:text-base lg:text-lg font-medium">Located in :</p>
              <p class="text-sm md:text-base lg:text-lg font-medium">Libreville, Gabon</p>
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
```

- [ ] **Step 2: Verify changes in HeroSection.vue**

Ensure all references to old services and Cairo, Egypt have been replaced with the new services and Libreville, Gabon, and that all `backdrop-blur-sm` and blurry background overlays have been removed.

---

### Task 3: Build Verification & Handoff

- [ ] **Step 1: Check code syntax and imports**

Verify component structure and ensure no syntax errors exist.

- [ ] **Step 2: Run dev/build verification**

Run build or dev check to confirm zero compilation errors.
