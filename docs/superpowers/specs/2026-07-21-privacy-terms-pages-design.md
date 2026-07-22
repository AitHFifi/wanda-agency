# Design Specification: Privacy Policy & Terms of Service Pages

**Date**: 2026-07-21  
**Project**: Wanda Agency Website (`wanda-agency`)  
**Status**: Approved  

---

## 1. Overview & Objectives

The goal is to implement dedicated, professionally crafted **Privacy Policy** (`/privacy`) and **Terms of Service** (`/terms`) pages for Wanda Agency. The pages will reflect Wanda Agency's premium dark editorial aesthetic (`font-serif` headings, sleek dark background, clean borders, high legibility) and provide clear, comprehensive legal protections and data transparency tailored for a modern digital design & custom development agency based in Libreville, Gabon.

---

## 2. Architecture & File Structure

```
app/
├── components/
│   └── AppFooter.vue       # Update footer links to /privacy and /terms
└── pages/
    ├── privacy.vue         # Privacy Policy page with sticky section index
    └── terms.vue           # Terms of Service page with sticky section index
```

---

## 3. UI & UX Design Specification

### Visual Styling
- **Theme**: Dark background (`bg-bg`), primary text (`text-primary`), secondary muted text (`text-secondary`), subtle borders (`border-primary/10`).
- **Typography**: Header tags (`h1`, `h2`, `h3`) set in `font-serif` italic/regular accents matching the agency branding. Section index links set in `text-xs uppercase tracking-widest font-bold`.
- **Layout**:
  - Top Hero Section: Category badge (`LEGAL`), Main Title (`Privacy Policy` or `Terms of Service`), Subtitle summary, and Effective Date (`July 21, 2026`).
  - Main Body Grid: 4-column responsive grid on desktop (`md:grid-cols-4`, 1 col for sticky sidebar TOC navigation, 3 cols for scrollable legal document content).
  - Mobile UX: Horizontal sticky/scrollable navigation bar for section jumping.

### Interactive Features
- **Table of Contents (TOC)**: Interactive jump links targeting HTML section IDs with smooth scrolling behavior (`lenis` integration compatible).
- **Cross-document Switcher**: Bottom callout card encouraging effortless navigation between Privacy Policy and Terms of Service.
- **Back to Top**: Quick anchor button to scroll back to the top of the page.

---

## 4. Document Content Requirements

### Privacy Policy (`/privacy`)
1. **Introduction & Entity Info**: Wanda Agency operating details, commitment to data privacy, jurisdiction (Libreville, Gabon).
2. **Information Collected**:
   - Direct information provided via contact/project inquiry forms (Name, Email, Budget, Message details).
   - Automatically collected technical information (IP addresses, browser type, device information, performance metrics).
3. **Use of Information**: Communication, contract preparation, project fulfillment, service improvement, fraud prevention.
4. **Data Storage & Infrastructure**: Supabase database protection, encryption protocols, secure hosting measures.
5. **Cookies & Tracking**: Essential session cookies, analytical tracking preferences.
6. **Third-Party Data Sharing**: Policy on non-disclosure of personal data to third parties except service providers under strict confidentiality.
7. **User Data Rights**: Rights to access, rectify, restrict, or request deletion of personal information under applicable regulations.
8. **Contact & Data Requests**: Dedicated contact path via `hello@wanda.agency`.

### Terms of Service (`/terms`)
1. **Agreement to Terms**: Binding contract terms upon site access or agency service engagement.
2. **Services Offered**: Bespoke web development, UI/UX design, digital branding, software engineering.
3. **Intellectual Property Rights**:
   - Final deliverables transferred to client upon 100% payment receipt.
   - Agency retains rights to showcase non-confidential work in portfolios and promotional materials.
   - Pre-existing tools, open-source libraries, and proprietary agency code libraries remain agency IP.
4. **Client Responsibilities**: Timely delivery of project assets, prompt feedback, accurate project specifications.
5. **Payment Terms & Invoicing**: Payment schedules, deposit requirements, late payment conditions, currency/billing guidelines.
6. **Warranties & Disclaimers**: Provided "as-is" for website browsing; project warranty terms defined in individual statement of work (SOW) contracts.
7. **Limitation of Liability**: Exclusion of indirect, consequential damages; liability capped at total fees paid under relevant engagement.
8. **Termination**: Cancellation procedures for active client projects.
9. **Governing Law & Dispute Resolution**: Laws of Libreville, Gabon & international business arbitration standards.

---

## 5. Verification & Testing Plan

- **Routing Verification**: Navigate to `/privacy` and `/terms` directly and via footer links in `AppFooter.vue`.
- **Responsive Layout Verification**: Check layout responsiveness across desktop, tablet, and mobile screens.
- **Section Link Verification**: Ensure all sticky TOC links jump to the correct section IDs cleanly.
- **Build & Lint Verification**: Run `pnpm build` or `npx nuxt typecheck` / dev server check to ensure zero build or runtime errors.
