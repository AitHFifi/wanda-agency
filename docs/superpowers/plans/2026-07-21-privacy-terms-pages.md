# Privacy Policy & Terms of Service Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build dedicated, styled Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages with sticky TOC navigation and update footer links for Wanda Agency.

**Architecture:** Create Nuxt 4 pages using Vue 3 SFCs in `app/pages/`, styled with Tailwind CSS, supporting Lenis smooth scrolling and section jump anchors, and updating `AppFooter.vue`.

**Tech Stack:** Nuxt 4, Vue 3, Tailwind CSS v4, Lucide Vue icons.

---

### Task 1: Update Footer Navigation Links

**Files:**
- Modify: `app/components/AppFooter.vue`

- [ ] **Step 1: Modify `AppFooter.vue` to update links**

Replace `to="/"` on legal links in `app/components/AppFooter.vue`:
```vue
<NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
<NuxtLink to="/terms" class="hover:underline">Terms of Service</NuxtLink>
```

- [ ] **Step 2: Verify footer rendered output**

Ensure `AppFooter.vue` has no syntax errors and links point to `/privacy` and `/terms`.

---

### Task 2: Create Privacy Policy Page

**Files:**
- Create: `app/pages/privacy.vue`

- [ ] **Step 1: Create `app/pages/privacy.vue`**

Write the complete code for `app/pages/privacy.vue`:

```vue
<template>
  <div class="pt-28 md:pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <!-- Hero Header -->
    <header class="mb-16 border-b border-primary/10 pb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold mb-4">
        <span>Legal & Privacy</span>
      </div>
      <h1 class="font-serif italic font-bold text-4xl md:text-6xl text-primary mb-4 tracking-tight">
        Privacy Policy
      </h1>
      <p class="text-secondary text-lg max-w-2xl font-light">
        Transparency, security, and data protection are fundamental to how Wanda Agency operates. Here is how we collect, handle, and safeguard your information.
      </p>
      <div class="mt-6 text-xs uppercase tracking-wider text-muted">
        Effective Date: July 21, 2026
      </div>
    </header>

    <!-- Main Content Layout with Sticky Sidebar -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
      <!-- Sticky Navigation Index -->
      <aside class="md:col-span-1 sticky top-28 hidden md:flex flex-col gap-3 p-5 rounded-2xl bg-primary/5 border border-primary/10 text-xs">
        <span class="uppercase tracking-widest font-bold text-muted mb-2">On This Page</span>
        <a href="#overview" class="text-secondary hover:text-primary transition-colors">1. Overview</a>
        <a href="#information-collected" class="text-secondary hover:text-primary transition-colors">2. Information Collected</a>
        <a href="#how-we-use" class="text-secondary hover:text-primary transition-colors">3. How We Use Data</a>
        <a href="#data-storage" class="text-secondary hover:text-primary transition-colors">4. Storage & Security</a>
        <a href="#cookies" class="text-secondary hover:text-primary transition-colors">5. Cookies & Tracking</a>
        <a href="#third-party" class="text-secondary hover:text-primary transition-colors">6. Third-Party Sharing</a>
        <a href="#your-rights" class="text-secondary hover:text-primary transition-colors">7. Your Rights</a>
        <a href="#contact-us" class="text-secondary hover:text-primary transition-colors">8. Contact Us</a>
      </aside>

      <!-- Legal Body Text -->
      <main class="md:col-span-3 space-y-12 text-secondary text-base leading-relaxed">
        <section id="overview" class="scroll-mt-32">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">1. Overview</h2>
          <p>
            Wanda Agency ("we", "our", or "us"), based in Libreville, Gabon, provides digital design, branding, and custom software development services. This Privacy Policy explains our commitment to protecting your personal data when you visit our website or communicate with our team.
          </p>
        </section>

        <section id="information-collected" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
          <p class="mb-4">We collect information that you directly provide to us, as well as technical data automatically generated during your site visit:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong class="text-primary">Inquiry & Contact Information:</strong> Name, business email, company name, project details, budget range, and messages sent via our contact forms.</li>
            <li><strong class="text-primary">Technical & Usage Data:</strong> IP address, browser type, operating system, pages visited, duration of visit, and referrer URLs collected automatically via standard server logs and analytical metrics.</li>
          </ul>
        </section>

        <section id="how-we-use" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h2>
          <p class="mb-4">We strictly process your personal data for legitimate business purposes:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Responding to client inquiries and preparing custom project proposals.</li>
            <li>Executing, delivering, and supporting contracted digital design & custom development services.</li>
            <li>Improving our website performance, user experience, and service offerings.</li>
            <li>Fulfilling legal, tax, and accounting compliance obligations under Gabonese and international law.</li>
          </ul>
        </section>

        <section id="data-storage" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">4. Storage & Security</h2>
          <p>
            We implement technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. Contact form submissions and inquiries are processed securely using encrypted database connections (including Supabase database infrastructure).
          </p>
        </section>

        <section id="cookies" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">5. Cookies & Tracking Technologies</h2>
          <p>
            Our website uses minimal, essential cookies and local browser storage to maintain session state and optimize smooth page transitions. We do not use intrusive third-party cross-site tracking or sell user data to advertising networks.
          </p>
        </section>

        <section id="third-party" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">6. Third-Party Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information. We may share data only with trusted infrastructure providers (such as hosting platforms and database providers) under strict data protection agreements, or when required by law or legal proceedings.
          </p>
        </section>

        <section id="your-rights" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">7. Your Rights</h2>
          <p class="mb-4">Regardless of your location, you hold rights regarding your personal information:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Right to request access to the personal data we hold about you.</li>
            <li>Right to request correction of inaccurate or incomplete data.</li>
            <li>Right to request erasure ("right to be forgotten") of your personal data.</li>
            <li>Right to object to or restrict processing of your information.</li>
          </ul>
        </section>

        <section id="contact-us" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
          <p class="mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact our privacy representative:
          </p>
          <div class="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div class="font-serif text-lg font-bold text-primary">Wanda Agency Data Team</div>
              <div class="text-sm text-secondary">Libreville, Gabon</div>
              <div class="text-sm text-secondary mt-1">Email: <a href="mailto:hello@wanda.agency" class="text-primary hover:underline">hello@wanda.agency</a></div>
            </div>
            <a href="mailto:hello@wanda.agency" class="px-6 py-3 rounded-full bg-primary text-bg font-medium text-sm hover:opacity-90 transition-opacity">
              Contact Data Team
            </a>
          </div>
        </section>

        <!-- Document Switcher -->
        <div class="border-t border-primary/10 pt-12 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="text-sm text-muted">Looking for terms & conditions?</div>
          <NuxtLink to="/terms" class="text-sm font-bold text-primary hover:underline inline-flex items-center gap-2">
            <span>Read Terms of Service</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy | Wanda Agency',
  description: 'Learn how Wanda Agency collects, protects, and manages data for our custom design and development services.'
})
</script>
```

- [ ] **Step 2: Verify `app/pages/privacy.vue` component syntax**

---

### Task 3: Create Terms of Service Page

**Files:**
- Create: `app/pages/terms.vue`

- [ ] **Step 1: Create `app/pages/terms.vue`**

Write the complete code for `app/pages/terms.vue`:

```vue
<template>
  <div class="pt-28 md:pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
    <!-- Hero Header -->
    <header class="mb-16 border-b border-primary/10 pb-12">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs uppercase tracking-widest font-bold mb-4">
        <span>Legal Terms</span>
      </div>
      <h1 class="font-serif italic font-bold text-4xl md:text-6xl text-primary mb-4 tracking-tight">
        Terms of Service
      </h1>
      <p class="text-secondary text-lg max-w-2xl font-light">
        These terms govern your access to Wanda Agency’s website and define the contractual standards for our digital design and custom software engagements.
      </p>
      <div class="mt-6 text-xs uppercase tracking-wider text-muted">
        Effective Date: July 21, 2026
      </div>
    </header>

    <!-- Main Content Layout with Sticky Sidebar -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
      <!-- Sticky Navigation Index -->
      <aside class="md:col-span-1 sticky top-28 hidden md:flex flex-col gap-3 p-5 rounded-2xl bg-primary/5 border border-primary/10 text-xs">
        <span class="uppercase tracking-widest font-bold text-muted mb-2">On This Page</span>
        <a href="#acceptance" class="text-secondary hover:text-primary transition-colors">1. Acceptance of Terms</a>
        <a href="#services-scope" class="text-secondary hover:text-primary transition-colors">2. Scope of Services</a>
        <a href="#intellectual-property" class="text-secondary hover:text-primary transition-colors">3. Intellectual Property</a>
        <a href="#client-responsibilities" class="text-secondary hover:text-primary transition-colors">4. Client Responsibilities</a>
        <a href="#payment-terms" class="text-secondary hover:text-primary transition-colors">5. Payment & Invoicing</a>
        <a href="#warranties-liability" class="text-secondary hover:text-primary transition-colors">6. Warranties & Liability</a>
        <a href="#termination" class="text-secondary hover:text-primary transition-colors">7. Termination</a>
        <a href="#governing-law" class="text-secondary hover:text-primary transition-colors">8. Governing Law</a>
      </aside>

      <!-- Legal Body Text -->
      <main class="md:col-span-3 space-y-12 text-secondary text-base leading-relaxed">
        <section id="acceptance" class="scroll-mt-32">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website operated by Wanda Agency ("Agency", "we", "us"), or by engaging us for digital design, brand identity, or software development services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
          </p>
        </section>

        <section id="services-scope" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">2. Scope of Digital Services</h2>
          <p class="mb-4">Wanda Agency offers professional design and custom technology services, including:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>User experience (UX) & user interface (UI) design.</li>
            <li>Custom web application design and engineering (e.g. Nuxt, Vue, React, Tailwind).</li>
            <li>Brand identity, motion graphics, and digital design systems.</li>
          </ul>
          <p class="mt-4">
            Specific deliverables, timelines, milestones, and project fees for individual engagements are detailed in a separate Statement of Work (SOW) or formal client agreement.
          </p>
        </section>

        <section id="intellectual-property" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">3. Intellectual Property Rights</h2>
          <p class="mb-4"><strong class="text-primary">Client Ownership:</strong> Upon full receipt of agreed project payments, all final custom design assets, code deliverables, and branding produced specifically for the Client under an active SOW transfer to Client ownership.</p>
          <p class="mb-4"><strong class="text-primary">Agency Portfolio Rights:</strong> Wanda Agency retains the right to display non-confidential project deliverables, designs, and screenshots in our online portfolio, case studies, and social media showcase unless explicitly agreed otherwise in a signed NDA.</p>
          <p><strong class="text-primary">Pre-existing Assets:</strong> Pre-existing frameworks, open-source libraries, and internal agency starter templates remain the intellectual property of their respective owners or Wanda Agency.</p>
        </section>

        <section id="client-responsibilities" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">4. Client Responsibilities</h2>
          <p class="mb-4">Clients engaging Wanda Agency agree to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Provide timely feedback, required project content, brand assets, and necessary access credentials.</li>
            <li>Ensure all client-provided materials (logos, copy, images) do not infringe third-party copyrights or intellectual property rights.</li>
            <li>Adhere to agreed milestone feedback windows to avoid project schedule delays.</li>
          </ul>
        </section>

        <section id="payment-terms" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">5. Payment & Invoicing</h2>
          <p class="mb-4">
            Services are billed according to project milestones outlined in the relevant statement of work. Deposits are required before project kickoff. Invoices are payable within 14 calendar days of issuance unless specified otherwise.
          </p>
          <p>
            Late payments may incur interest charges of 1.5% per month or the legal maximum permitted by law, and work on active milestones may be paused until outstanding accounts are settled.
          </p>
        </section>

        <section id="warranties-liability" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">6. Warranties & Limitation of Liability</h2>
          <p class="mb-4">
            We deliver services with high standards of professional craft and diligence. However, this website and informational materials are provided "as is".
          </p>
          <p>
            To the maximum extent permitted by applicable law, Wanda Agency shall not be liable for any indirect, incidental, special, or consequential damages resulting from site usage or service interruptions. Total cumulative liability under any claim shall not exceed the total fees paid by Client to Agency in the preceding 6 months.
          </p>
        </section>

        <section id="termination" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">7. Termination</h2>
          <p>
            Either party may terminate an active project engagement with 14 days written notice if the other party materially breaches these terms or an active SOW. Upon termination, Client shall pay for all work completed up to the effective termination date.
          </p>
        </section>

        <section id="governing-law" class="scroll-mt-32 border-t border-primary/10 pt-10">
          <h2 class="font-serif text-2xl font-bold text-primary mb-4">8. Governing Law & Jurisdiction</h2>
          <p class="mb-6">
            These Terms of Service are governed by and construed in accordance with the laws of Gabon. Any dispute arising under or in connection with these terms shall be submitted to the exclusive jurisdiction of the competent courts of Libreville, Gabon, or settled via mutual commercial arbitration.
          </p>
          <div class="p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <div class="font-serif text-lg font-bold text-primary">Questions regarding our terms?</div>
            <div class="text-sm text-secondary mt-1">Reach out to our team at <a href="mailto:hello@wanda.agency" class="text-primary hover:underline">hello@wanda.agency</a></div>
          </div>
        </section>

        <!-- Document Switcher -->
        <div class="border-t border-primary/10 pt-12 mt-16 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="text-sm text-muted">Looking for our data policy?</div>
          <NuxtLink to="/privacy" class="text-sm font-bold text-primary hover:underline inline-flex items-center gap-2">
            <span>Read Privacy Policy</span>
            <span>&rarr;</span>
          </NuxtLink>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Terms of Service | Wanda Agency',
  description: 'Review the Terms of Service governing Wanda Agency digital design and custom web development engagements.'
})
</script>
```

- [ ] **Step 2: Verify `app/pages/terms.vue` component syntax**

---

### Task 4: Build Verification

- [ ] **Step 1: Check Nuxt development server / build compilation**

Run `pnpm build` to verify that Nuxt 4 compiles both routes without errors.
