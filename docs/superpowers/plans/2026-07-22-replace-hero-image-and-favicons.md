# Replace Hero Image, Header Logo, and Favicons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero portrait with the Wanda "W" SVG logo (`/logo-wanda-classic-light.svg`), replace the top-left header logo icon with the W logo, copy all favicon and app icons from `public/favicon_io (2)/` into `public/`, and update app metadata head tags.

**Architecture:** Copy favicon files from `public/favicon_io (2)/` into `public/`, configure head meta links in `app/app.vue`, replace generic diamond SVG in `app/components/AppHeader.vue` with `logo-wanda-classic-light.svg`, and update image source & sizing in `app/components/HeroSection.vue` and `components/HeroSection.vue`.

**Tech Stack:** Nuxt 4, Vue 3, HTML Head Metadata.

---

### Task 1: Copy Favicon Assets & Configure Head Meta Links

**Files:**
- Create/Overwrite: `public/favicon.ico`
- Create: `public/favicon-16x16.png`
- Create: `public/favicon-32x32.png`
- Create: `public/apple-touch-icon.png`
- Create: `public/android-chrome-192x192.png`
- Create: `public/android-chrome-512x512.png`
- Create: `public/site.webmanifest`
- Modify: `app/app.vue:19-26`

- [ ] **Step 1: Copy favicon files into public/**

Copy all contents of `public/favicon_io (2)/` into `public/`.

- [ ] **Step 2: Update head configuration in app/app.vue**

Add head metadata configuration using `useHead` in `app/app.vue`:
```vue
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
```

- [ ] **Step 3: Commit favicon changes**

```bash
git add public/ app/app.vue
git commit -m "feat: update site favicons and webmanifest metadata"
```

---

### Task 2: Replace Top-Left Header Logo Icon with W Logo

**Files:**
- Modify: `app/components/AppHeader.vue:11-15`

- [ ] **Step 1: Replace diamond SVG icon with W logo image in app/components/AppHeader.vue**

Replace lines 11-14 in `app/components/AppHeader.vue` with:
```vue
            <img 
              src="/logo-wanda-classic-light.svg" 
              alt="Wanda Logo" 
              class="h-8 lg:h-10 w-auto object-contain"
            />
```

- [ ] **Step 2: Commit header logo change**

```bash
git add app/components/AppHeader.vue
git commit -m "feat: update header top-left logo icon to Wanda W emblem"
```

---

### Task 3: Replace Hero Portrait Image with Wanda W Logo

**Files:**
- Modify: `app/components/HeroSection.vue:39-46`
- Modify: `components/HeroSection.vue:40-46`

- [ ] **Step 1: Update image source and alt text in app/components/HeroSection.vue**

Replace `src="/hero_portrait.webp"` with `src="/logo-wanda-classic-light.svg"` and update styling for clean display of the W emblem:
```vue
        <img 
          src="/logo-wanda-classic-light.svg" 
          alt="Wanda Logo" 
          class="h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] xl:h-[580px] w-auto object-contain opacity-100 pointer-events-auto filter drop-shadow-md"
          loading="eager"
          decoding="async"
        />
```

- [ ] **Step 2: Update components/HeroSection.vue to keep in sync**

Replace `src="/hero_portrait.png"` with `src="/logo-wanda-classic-light.svg"`.

- [ ] **Step 3: Verify build**

Run: `npx nuxt prepare`
Expected: Success with no errors.

- [ ] **Step 4: Commit hero section changes**

```bash
git add app/components/HeroSection.vue components/HeroSection.vue
git commit -m "feat: replace hero portrait image with Wanda W logo"
```
