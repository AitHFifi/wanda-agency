# Mobile Footer Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `AppFooter.vue` mobile layout so that Branding is centered at top, Menu and Social are side-by-side in a 2-column grid, and "Get in touch" is positioned at the bottom aligned in the center.

**Architecture:** Update `app/components/AppFooter.vue` grid/flex structure:
- Mobile (< md):
  1. Branding: `flex flex-col items-center text-center`
  2. Menu & Social: `grid grid-cols-2 gap-8 text-center` (Menu on left, Social on right)
  3. Get in touch: `flex flex-col items-center text-center` at the bottom
- Desktop (>= md): maintain clean 4-column layout (`md:grid-cols-4 md:text-left md:items-start`).

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS.

---

### Task 1: Refactor AppFooter.vue mobile layout

**Files:**
- Modify: `app/components/AppFooter.vue`

- [ ] **Step 1: Replace AppFooter.vue template with mobile centered & side-by-side grid structure**

```vue
<template>
  <footer class="w-full bg-bg text-primary pt-16 md:pt-20 pb-8 px-6 md:px-12 border-t border-primary/10 relative z-20">
    <div class="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
      
      <!-- Footer Layout Container -->
      <div class="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-12 items-center md:items-start text-center md:text-left">
        
        <!-- Branding column -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 w-full md:col-span-1">
          <NuxtLink to="/" class="font-serif italic font-bold text-3xl tracking-tight">
            Wanda.
          </NuxtLink>
          <p class="text-sm text-secondary max-w-[260px] md:max-w-[200px]">
            Elevating digital design &amp; custom development to the next level.
          </p>
        </div>

        <!-- Menu & Social Side-by-Side Wrapper on Mobile -->
        <div class="w-full grid grid-cols-2 gap-8 text-center md:contents">
          <!-- Links column (Menu) -->
          <div class="flex flex-col items-center md:items-start gap-3">
            <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Menu</h4>
            <a href="#about" class="text-base hover:opacity-70 transition-opacity">About</a>
            <a href="#work" class="text-base hover:opacity-70 transition-opacity">Work</a>
            <button @click="$emit('open-contact')" class="text-base hover:opacity-70 transition-opacity focus:outline-none">
              Contact
            </button>
          </div>

          <!-- Social column -->
          <div class="flex flex-col items-center md:items-start gap-3">
            <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Social</h4>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Linkedin</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-base hover:opacity-70 transition-opacity">Github</a>
          </div>
        </div>

        <!-- Contact details column (Bottom & Centered on Mobile) -->
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full border-t border-primary/10 pt-8 md:border-none md:pt-0">
          <h4 class="text-xs uppercase font-bold text-muted tracking-widest mb-1">Get in touch</h4>
          <a href="mailto:hello@wanda.agency" class="text-base font-medium hover:opacity-70 transition-opacity break-all">
            hello@wanda.agency
          </a>
          <div class="flex flex-col items-center md:items-start gap-0.5 mt-1">
            <span class="text-xs font-bold text-muted uppercase tracking-wider">Location</span>
            <span class="text-sm text-secondary">
              Libreville, Gabon
            </span>
          </div>
        </div>

      </div>

      <!-- Giant Typography Footer Decor -->
      <div class="w-full select-none pointer-events-none mt-4 md:mt-8 border-t border-primary/5 pt-8 md:pt-12">
        <h2 class="w-full text-center text-primary/10 font-serif italic text-[12vw] font-bold leading-none uppercase tracking-tighter">
          Wanda Agency
        </h2>
      </div>

      <!-- Bottom Credits bar -->
      <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-muted border-t border-primary/5 pt-6 md:pt-8 gap-4 text-center sm:text-left">
        <span>© {{ new Date().getFullYear() }} Wanda Agency. All rights reserved.</span>
        <div class="flex gap-6">
          <NuxtLink to="/" class="hover:underline">Privacy Policy</NuxtLink>
          <NuxtLink to="/" class="hover:underline">Terms of Service</NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
defineEmits(['open-contact'])
</script>
