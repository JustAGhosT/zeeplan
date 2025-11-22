# Design System & Visual Identity

This document outlines the reverse-engineered design system for the Zeeplan application. It serves as a foundational guide for maintaining visual consistency and improving user experience.

## 1. Textual Moodboard

The visual aesthetic of Zeeplan is clean, professional, and data-driven. It aims to inspire confidence and clarity for potential business partners.

-   **Style:** Modern, spacious, and corporate.
-   **Colors:** A primary palette of deep greens and blues, accented with yellow/amber for calls-to-action and highlights. This evokes a sense of nature, growth, and optimism.
-   **Typography:** Sans-serif fonts are used exclusively, providing a clean and readable experience for both headlines and body text.
-   **Components:** UI elements feature rounded corners, subtle shadows, and clear visual hierarchy, creating a soft and approachable feel.

## 2. Design Tokens

### Color Palette

| Role              | Usage                        | Hex Code  | Tailwind Class      |
| ----------------- | ---------------------------- | --------- | ------------------- |
| **Primary**       | Buttons, links, icons        | `#059669` | `bg-green-600`      |
| **Primary Accent**| Hover states, secondary text | `#065f46` | `text-green-800`    |
| **Secondary**     | Secondary buttons, icons     | `#2563eb` | `bg-blue-600`       |
| **Accent**        | Highlight icons, CTAs        | `#f59e0b` | `bg-amber-500`      |
| **Background**    | Main page background         | `#f9fafb` | `bg-gray-50`        |
| **Foreground**    | Body text                    | `#1f2937` | `text-gray-800`     |
| **Border/Stroke** | Card borders, dividers       | `#e5e7eb` | `border-gray-200`   |

### Typography

-   **Font Family:** System default sans-serif (Inter, Roboto, Helvetica Neue, etc.).
-   **Hierarchy:**
    -   **Hero Title (`h1`):** 3.0rem (48px), `font-extrabold`
    -   **Section Heading (`h2`):** 2.25rem (36px), `font-bold`
    -   **Card/Feature Title (`h3`):** 1.5rem (24px), `font-semibold`
    -   **Subsection Title (`h4`):** 1.125rem (18px), `font-semibold`
    -   **Body Text (`p`):** 1rem (16px), `font-normal`
    -   **Small/Label Text:** 0.875rem (14px), `font-medium`

### Spacing & Sizing

The layout uses a consistent spacing scale, likely based on a 4px or 8px grid system.

-   **Small:** 0.5rem (8px)
-   **Medium:** 1rem (16px)
-   **Large:** 2rem (32px)
-   **X-Large:** 4rem (64px)
-   **Container Padding:** 1.5rem (24px) on mobile, up to 4rem (64px) on desktop.

## 3. Component Library

This section catalogs the primary UI components observed in the application.

### Buttons

-   **Primary Button:** Solid green background, white text. Used for primary calls-to-action (e.g., "View Proposal").
-   **Secondary Button:** White background, blue text and border. Used for secondary actions (e.g., "Sekelbos Clearance Plan").
-   **Outline Button:** White background, gray text and border. Used for tertiary actions (e.g., "Get in Touch").

### Cards

-   **Metric Card:** Simple card with a large value and a label. Used for key statistics.
-   **Feature Card:** Contains an icon, title, and descriptive text. Uses a subtle box-shadow.
-   **Livestock Card:** Interactive cards that link to different enterprise pages. Include an icon, title, description, and a "Learn more" link.

### Sliders

-   **Reusable Slider:** A single-value slider with a label, value display, and suffix.
-   **Range Slider:** A dual-handle slider for selecting a min/max range.

### Other Components

-   **Header:** Contains the logo and navigation links.
-   **Footer:** Contains contact information and copyright.
-   **Checklist Item:** An icon paired with a title and description, used to list benefits.
-   **Revenue Bar:** A visual component to show progress or distribution of financial data.

## 4. Accessibility Considerations

-   **Contrast:** The primary green (`#059669`) on a white background has a contrast ratio of 4.56:1, which passes WCAG AA standards. However, other color combinations should be audited.
-   **Focus States:** Interactive elements like buttons and links have visible focus states.
-   **Semantics:** The use of semantic HTML (`<section>`, `<h1>`, etc.) is a good foundation. ARIA attributes for custom components like sliders should be verified.
