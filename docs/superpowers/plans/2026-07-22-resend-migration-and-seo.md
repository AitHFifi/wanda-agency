# Resend Migration & Free Google Indexing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Swap Supabase out for Resend (100% free email form delivery), remove all Supabase dependencies, configure Nuxt server route, set up free SEO indexing assets (`sitemap.xml`, `robots.txt`), and establish a 2-branch Cloudflare workflow (`main` / `dev`).

**Architecture:** Create a server API endpoint (`server/api/contact.post.ts`) using the official `resend` SDK. Update the `ContactPopup.vue` component to call this endpoint via `$fetch`. Remove `@nuxtjs/supabase` package and configuration.

**Tech Stack:** Nuxt 3/4, TypeScript, Resend SDK, Tailwind CSS, Cloudflare Pages.

---

### Task 1: Dependencies & Nuxt Configuration Cleanup

**Files:**
- Modify: `package.json`
- Modify: `nuxt.config.ts`
- Modify: `.env`

- [ ] **Step 1: Install `resend` package and remove `@nuxtjs/supabase`**

Run: `pnpm remove @nuxtjs/supabase && pnpm add resend`
Expected: `@nuxtjs/supabase` uninstalled, `resend` added to `dependencies`.

- [ ] **Step 2: Update `nuxt.config.ts` to remove Supabase module and add Resend runtimeConfig**

Modify `nuxt.config.ts`:
```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [],
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactToEmail: process.env.CONTACT_TO_EMAIL || ''
  },
  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        'gsap',
        'gsap/ScrollTrigger',
        'lenis'
      ]
    }
  }
})
```

- [ ] **Step 3: Update `.env` file**

Replace contents of `.env`:
```env
RESEND_API_KEY=re_placeholder_key
CONTACT_TO_EMAIL=your-email@example.com
```

- [ ] **Step 4: Commit task changes**

```bash
git add package.json pnpm-lock.yaml nuxt.config.ts .env
git commit -m "chore: remove supabase and configure resend runtime config"
```

---

### Task 2: Create Resend Server Route Handler

**Files:**
- Create: `server/api/contact.post.ts`

- [ ] **Step 1: Create `server/api/contact.post.ts` file**

```typescript
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, message } = body || {}

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required.'
    })
  }

  const apiKey = config.resendApiKey
  if (!apiKey || apiKey.startsWith('re_placeholder')) {
    // Graceful fallback for local development without active API key
    console.warn('[Resend API] No active RESEND_API_KEY configured. Mocking success.')
    return { success: true, mocked: true }
  }

  const resend = new Resend(apiKey)
  const recipientEmail = config.contactToEmail || 'contact@example.com'

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [recipientEmail],
      replyTo: email,
      subject: `New Lead Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #000;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `
    })

    return { success: true, data }
  } catch (error: any) {
    console.error('[Resend Error]:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to send email'
    })
  }
})
```

- [ ] **Step 2: Commit server route**

```bash
git add server/api/contact.post.ts
git commit -m "feat: add resend contact form server endpoint"
```

---

### Task 3: Update ContactPopup Component & Locales

**Files:**
- Modify: `app/components/ContactPopup.vue`
- Modify: `app/locales/en.js`
- Modify: `app/locales/fr.js`

- [ ] **Step 1: Replace Supabase client with `$fetch` in `ContactPopup.vue`**

Update `submitForm` in `app/components/ContactPopup.vue`:
```typescript
const submitForm = async () => {
  loading.value = true
  status.value = null

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      }
    })

    status.value = {
      success: true,
      message: t('contactPopup.success')
    }
    
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      emit('close')
      status.value = null
    }, 2500)
    
  } catch (err: any) {
    console.warn('Contact form error:', err.message)
    status.value = {
      success: false,
      message: err.statusMessage || t('contactPopup.error') || 'Failed to send message.'
    }
  } finally {
    loading.value = false
  }
}
```

- [ ] **Step 2: Update Privacy Policy text in `en.js` and `fr.js`**

In `app/locales/en.js`:
Change `s4Text` reference from `(including Supabase database infrastructure)` to `(including secure cloud email API processing)`.

In `app/locales/fr.js`:
Change `s4Text` reference from `(notamment via l'infrastructure de base de données Supabase)` to `(notamment via l'infrastructure sécurisée de traitement d'emails)`.

- [ ] **Step 3: Commit component & locale updates**

```bash
git add app/components/ContactPopup.vue app/locales/en.js app/locales/fr.js
git commit -m "refactor: replace supabase logic with resend api call and update privacy policy"
```

---

### Task 4: Free SEO & Google Indexing Setup

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt`

- [ ] **Step 1: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-project.pages.dev/</loc>
    <lastmod>2026-07-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://your-project.pages.dev/privacy</loc>
    <lastmod>2026-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://your-project.pages.dev/terms</loc>
    <lastmod>2026-07-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Update `public/robots.txt`**

```text
User-Agent: *
Allow: /

Sitemap: https://your-project.pages.dev/sitemap.xml
```

- [ ] **Step 3: Commit SEO assets**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "seo: add sitemap.xml and robots.txt for Google indexing"
```

---

### Task 5: Build Verification

- [ ] **Step 1: Test Nuxt Build**

Run: `pnpm build`
Expected: Build succeeds without errors or missing module warnings.
