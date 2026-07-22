# Hero Conversion CTA Button & Contact Drawer Location Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a high-converting "Start a Project" CTA button in the center of the hero bottom metadata bar between Services and Location for both laptop and mobile screens, and update the Contact drawer location from "Cairo, Egypt" to "Libreville, Gabon".

**Architecture:** Create a reactive `useContactModal` composable to trigger the drawer globally, update `HeroSection.vue` layout with a responsive 3-column metadata bar, and update `ContactPopup.vue` footer location text.

**Tech Stack:** Nuxt 3, Vue 3, Tailwind CSS v4

---

### Task 1: Create Global Contact State Composable

**Files:**
- Create: `app/composables/useContactModal.js`
- Modify: `app/app.vue`

- [x] **Step 1: Implement `useContactModal.js` with Nuxt `useState`**
- [x] **Step 2: Connect `app.vue` drawer state to `useContactModal`**

---

### Task 2: Update Contact Drawer Location Text

**Files:**
- Modify: `app/components/ContactPopup.vue`

- [x] **Step 1: Replace "Cairo, Egypt" with "Libreville, Gabon" in ContactPopup footer**

---

### Task 3: Hero Bottom Bar Conversion CTA Button

**Files:**
- Modify: `app/components/HeroSection.vue`

- [x] **Step 1: Update metadata grid layout (`grid-cols-2 md:grid-cols-3`) in HeroSection**
- [x] **Step 2: Add high-converting pill CTA button ("Start a Project →") in middle column**
- [x] **Step 3: Connect button click to `openContact()`**
