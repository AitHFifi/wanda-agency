# Project Thumbnails & Preview Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder portfolio thumbnail images with actual screenshots for AitHStore, Oli'Express, and Pay Bridge, and update the hover preview & work page image rendering.

**Architecture:** Copy extracted image assets into `public/thumbnails/` and adjust CSS object position to `object-top` for clean header-focused screenshot previews.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS v4

---

### Task 1: Asset Replacement & Integration

**Files:**
- Modify: `public/thumbnails/aithstore.png`
- Modify: `public/thumbnails/oliexpress.png`
- Modify: `public/thumbnails/paybridge.png`

- [x] **Step 1: Copy uploaded image artifacts to public/thumbnails/**
- [x] **Step 2: Verify image files match expected project screenshots**

---

### Task 2: Hover Preview & Work Page Styling Update

**Files:**
- Modify: `app/components/WorkSection.vue`
- Modify: `app/pages/work.vue`

- [x] **Step 1: Add `object-top` class to hover popup image in WorkSection.vue**
- [x] **Step 2: Add `object-top` class to mobile carousel images in WorkSection.vue**
- [x] **Step 3: Add `object-top` class to grid cards in app/pages/work.vue**
