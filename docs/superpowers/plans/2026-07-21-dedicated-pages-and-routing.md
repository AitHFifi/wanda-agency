# Nuxt 3 Dedicated Pages & Navigation Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement file-based routing with dedicated `/about` and `/work` pages in Nuxt 3 without altering the home page design, and update header/footer navigation to smooth scroll on home page and navigate to dedicated pages when on sub-routes.

**Architecture:** Create `app/pages/index.vue`, `app/pages/about.vue`, and `app/pages/work.vue`. Update `app/app.vue` to use `<NuxtPage />`, and update `AppHeader.vue` and `AppFooter.vue` with smart route-aware links.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS, GSAP, Lenis.

---

### Task 1: Refactor app.vue and set up home page (`app/pages/index.vue`)

**Files:**
- Create: `app/pages/index.vue`
- Modify: `app/app.vue`

- [ ] **Step 1: Create `app/pages/index.vue` containing home page sections**

Create `app/pages/index.vue`:
```vue
<template>
  <div>
    <HeroSection />
    <AboutSection />
    <WorkSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Wanda Agency — Digital Agency',
  meta: [
    { name: 'description', content: 'Wanda Agency designs and builds modern web apps, custom CRMs, business tools, and SaaS web marketplaces in Libreville, Gabon.' }
  ]
})
</script>
```

- [ ] **Step 2: Update `app/app.vue` to render `<NuxtPage />`**

Replace `app/app.vue`:
```vue
<template>
  <div class="bg-bg text-primary min-h-screen relative font-sans selection:bg-primary selection:text-bg">
    <!-- Header Navigation -->
    <AppHeader @open-contact="isContactOpen = true" />

    <!-- Main Content Layout with Nuxt Page Router -->
    <main class="relative z-10">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <AppFooter @open-contact="isContactOpen = true" />

    <!-- Contact Drawer Overlay -->
    <ContactPopup :is-open="isContactOpen" @close="isContactOpen = false" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isContactOpen = ref(false)

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }
})
</script>
```

---

### Task 2: Create dedicated About Page (`app/pages/about.vue`)

**Files:**
- Create: `app/pages/about.vue`

- [ ] **Step 1: Implement `app/pages/about.vue` with agency mission, location, and services**

Create `app/pages/about.vue`:
```vue
<template>
  <div class="w-full pt-32 pb-24 px-6 md:px-12 bg-bg min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      
      <!-- Page Header -->
      <div class="flex flex-col gap-4 border-b border-primary/15 pb-12">
        <span class="text-xs font-semibold uppercase tracking-widest text-secondary">About Wanda Agency</span>
        <h1 class="font-serif italic text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-primary">
          We design &amp; build digital experiences that push standards forward.
        </h1>
      </div>

      <!-- Agency Overview Grid -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div class="md:col-span-3 flex flex-col gap-6 text-lg md:text-xl text-secondary leading-relaxed">
          <p>
            Based in <strong class="text-primary">Libreville, Gabon</strong>, Wanda Agency is a modern digital agency specializing in custom web platforms, business CRMs, and SaaS web marketplaces.
          </p>
          <p>
            We combine high-end minimalist visual aesthetics with powerful engineering to help brands stand out and scale efficiently across Africa and internationally.
          </p>
        </div>

        <div class="md:col-span-2 border border-primary/10 p-8 rounded-2xl bg-white/50 backdrop-blur-sm flex flex-col gap-6">
          <h3 class="text-xs font-bold uppercase tracking-wider text-muted">Agency Quick Info</h3>
          <div class="flex flex-col gap-4 text-sm">
            <div>
              <span class="text-secondary block">Location</span>
              <strong class="text-base text-primary">Libreville, Gabon</strong>
            </div>
            <div>
              <span class="text-secondary block">Core Services</span>
              <strong class="text-base text-primary">Websites, Custom CRMs, SaaS Marketplaces</strong>
            </div>
            <div>
              <span class="text-secondary block">Reach</span>
              <strong class="text-base text-primary">Gabon &amp; International</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Services Breakdown -->
      <div class="flex flex-col gap-8 border-t border-primary/15 pt-16">
        <h2 class="text-2xl md:text-4xl font-light">What We Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">01</span>
            <h3 class="text-xl font-bold">Websites &amp; Digital Presence</h3>
            <p class="text-sm text-secondary leading-relaxed">
              High-converting landing pages, corporate websites, and brand platforms built with cutting-edge design systems.
            </p>
          </div>
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">02</span>
            <h3 class="text-xl font-bold">Custom CRM &amp; Business Tools</h3>
            <p class="text-sm text-secondary leading-relaxed">
              Tailor-made dashboards, management software, and workflow automation engines built for operational efficiency.
            </p>
          </div>
          <div class="border border-primary/10 p-8 rounded-2xl bg-white/40 flex flex-col gap-4">
            <span class="text-xs font-mono text-secondary">03</span>
            <h3 class="text-xl font-bold">SaaS &amp; Web Marketplaces</h3>
            <p class="text-sm text-secondary leading-relaxed">
              Scalable multi-tenant web applications, subscription platforms, and digital marketplaces.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About — Wanda Agency',
  meta: [
    { name: 'description', content: 'Learn about Wanda Agency in Libreville, Gabon. Custom web applications, CRMs, and SaaS development.' }
  ]
})
</script>
```

---

### Task 3: Create dedicated Work Page (`app/pages/work.vue`)

**Files:**
- Create: `app/pages/work.vue`

- [ ] **Step 1: Implement `app/pages/work.vue` listing all project portfolio items**

Create `app/pages/work.vue`:
```vue
<template>
  <div class="w-full pt-32 pb-24 px-6 md:px-12 bg-bg min-h-screen">
    <div class="max-w-7xl mx-auto flex flex-col gap-16">
      
      <!-- Page Header -->
      <div class="flex flex-col gap-4 border-b border-primary/15 pb-12">
        <span class="text-xs font-semibold uppercase tracking-widest text-secondary">Portfolio</span>
        <h1 class="font-serif italic text-4xl sm:text-6xl font-normal leading-tight text-primary">
          Selected Projects &amp; Products
        </h1>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a 
          v-for="project in projects" 
          :key="project.name" 
          :href="project.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex flex-col gap-4 border border-primary/10 p-5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all"
        >
          <div class="aspect-[4/3] w-full bg-white border border-primary/10 overflow-hidden rounded-xl">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-bold tracking-tight">{{ project.name }}</h3>
              <svg class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p class="text-sm text-secondary">{{ project.category }} · {{ project.year }}</p>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'AitHStore',
    link: 'https://aithstore.vercel.app/',
    category: 'Digital Marketplace',
    year: '2026',
    image: '/thumbnails/aithstore.png'
  },
  {
    name: 'OliExpress',
    link: 'https://oli-express.vercel.app/',
    category: 'Logistics & E-Commerce',
    year: '2026',
    image: '/thumbnails/oliexpress.png'
  },
  {
    name: 'Pay Bridge',
    link: 'https://pay-bridge.app/',
    category: 'Fintech Platform',
    year: '2026',
    image: '/thumbnails/paybridge.png'
  }
]

useHead({
  title: 'Selected Work — Wanda Agency',
  meta: [
    { name: 'description', content: 'Explore selected projects built by Wanda Agency.' }
  ]
})
</script>
```

---

### Task 4: Update Header and Footer Smart Navigation Links

**Files:**
- Modify: `app/components/AppHeader.vue`
- Modify: `app/components/AppFooter.vue`

- [ ] **Step 1: Update `AppHeader.vue` and `AppFooter.vue` link routes**

Update navigation links to use `NuxtLink` pointing to `/about` and `/work` when off home route, or anchor links `#about` / `#work` when on home route.

---

### Task 5: Build Verification

- [ ] **Step 1: Run build verification**

Run `pnpm run build` and ensure compilation passes with zero errors.
