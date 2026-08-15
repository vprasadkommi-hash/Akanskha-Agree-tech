# Akanksha Agreetech - QA Defect Report

**Date:** August 15, 2026  
**Target URL:** `http://localhost:5173/`  
**Environment:** Development / Preview  

---

## 📋 List of Identified Defects

### 1. [CRITICAL] Sensitive Customer Data Committed to Repository
* **Bug ID:** `BUG-001`
* **Priority:** P0
* **Area:** Security & Privacy
* **Affected Files:**
  * `AKANKSHA_AGREE_TECH_PVT_LTD_customer_details.xlsx` (40.9 KB)
  * `AKANKSHA_AGREE_TECH_PVT_LTD_customer_details.pdf` (68.6 KB)
* **Description:** Live customer records containing personal data (names, phone numbers, addresses) are committed directly to the project root and tracked in Git.
* **Suggested Fix:** Add `*.xlsx` and `*.pdf` to `.gitignore`, remove tracked files with `git rm --cached`, and purge history before pushing upstream.

---

### 2. [HIGH] ESLint Crash Breaking Linting Pipeline
* **Bug ID:** `BUG-002`
* **Priority:** P1
* **Area:** Build & Tooling
* **Affected File:** `eslint.config.js` (Line 15)
* **Description:** Running `npm run lint` crashes with `TypeError: Cannot read properties of undefined (reading 'recommended')` because `reactHooks.configs.flat.recommended` is invalid in `eslint-plugin-react-hooks` v5.0.0.
* **Suggested Fix:** Change `reactHooks.configs.flat.recommended` to `reactHooks.configs.recommended` or use plugin rule mapping.

---

### 3. [MEDIUM] Missing Catch-All 404 Route
* **Bug ID:** `BUG-003`
* **Priority:** P2
* **Area:** UI & Routing
* **Affected File:** `src/App.tsx` (Lines 27–47)
* **Description:** Only `/` and `/roadmap` routes are defined. Visiting any unknown path (e.g. `/services`, `/contact`, `/404`) renders an empty blank page between Header and Footer with no error or redirect.
* **Suggested Fix:** Create a `NotFound.tsx` component and register `<Route path="*" element={<NotFound />} />` in `App.tsx`.

---

### 4. [MEDIUM] Broken Footer Anchor Links
* **Bug ID:** `BUG-004`
* **Priority:** P2
* **Area:** UI & Navigation
* **Affected File:** `src/components/Footer.tsx` (Lines 9–10)
* **Description:** Quick links point to `#how-it-works` and `#about`, but these element IDs do not exist in the DOM (the vision section uses `id="vision"`).
* **Suggested Fix:** Update the links to `/#solutions` and `/#vision` or alias the section IDs.

---

### 5. [MEDIUM] AI Crop Doctor Mobile Image Rendered Off-Screen
* **Bug ID:** `BUG-005`
* **Priority:** P2
* **Area:** Responsive & Mobile Compatibility
* **Affected File:** `src/components/AICropDoctor.tsx` (Line 98)
* **Description:** On mobile screen sizes (`xs` < 600px), the phone preview graphic is styled with `width: 0` and `top: -700px`, causing it to disappear or glitch.
* **Suggested Fix:** Apply clean responsive sizing (`width: { xs: "100%", md: 900 }`, `position: "relative"` on mobile) or use `display: { xs: "none", md: "block" }`.

---

### 6. [LOW] Roadmap Page Bottom CTA Button Has No Click Action
* **Bug ID:** `BUG-006`
* **Priority:** P3
* **Area:** UI & Functional
* **Affected File:** `src/pages/Roadmap.tsx` (Lines 562–578)
* **Description:** The "Join the Network" primary button at the bottom of the Roadmap page is missing an `onClick` handler, `href`, or modal trigger.
* **Suggested Fix:** Wrap the button with `ContactDialogButton` or attach a contact trigger handler.

---

### 7. [LOW] Missing Screen Reader Labels (`aria-label`) on Icon Buttons
* **Bug ID:** `BUG-007`
* **Priority:** P3
* **Area:** Accessibility (WCAG 2.1 AA)
* **Affected Files:**
  * `src/components/Header.tsx` (Line 272 - Mobile menu button)
  * `src/pages/Roadmap.tsx` (Lines 260, 276 - Carousel navigation chevrons)
* **Description:** Several `<IconButton>` elements lack `aria-label` attributes, announcing only "button" to screen reader users.
* **Suggested Fix:** Add descriptive `aria-label` attributes (e.g. `aria-label="Open navigation menu"`).

---

### 8. [LOW] Uncompressed Large Static Media Assets (>30 MB Total)
* **Bug ID:** `BUG-008`
* **Priority:** P3
* **Area:** Performance & Asset Optimization
* **Affected Files:**
  * `src/assets/services/servicesbg.png` (8.12 MB)
  * `src/assets/handphone.png` (2.78 MB)
  * `src/assets/visionbg.png` (1.59 MB)
  * `src/assets/aibg.png` (1.43 MB)
* **Description:** High-resolution PNGs are bundled without WebP/AVIF compression, causing high payload weights and slow load times on mobile 3G/4G connections.
* **Suggested Fix:** Compress background PNGs to WebP/AVIF at ~80% quality and implement lazy loading.

---

### 9. [LOW] Unsafe Direct Translation Object Access in AICropDoctor
* **Bug ID:** `BUG-009`
* **Priority:** P3
* **Area:** Code Quality & Internationalization
* **Affected File:** `src/components/AICropDoctor.tsx` (Line 35)
* **Description:** Accesses `resources[lang].translation.aiCropDoctor` directly rather than using standard `t('aiCropDoctor.badge')`, bypassing `fallbackLng` and risking runtime crashes on missing keys.
* **Suggested Fix:** Refactor to use the standard `useTranslation` hook (`const { t } = useTranslation()`).

---

## 💡 Code Clean-Up & Optimization Notes
1. **Dead Component:** `src/components/LanguageToggle.tsx` is defined but never used or imported.
2. **Inline Ternary Translations:** Components (`Hero.tsx`, `LegacyStatement.tsx`, `PartnerBrands.tsx`, etc.) use inline `isTe ? "..." : "..."` ternaries instead of centralized `i18n` translation keys.
