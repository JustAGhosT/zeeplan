# Zeeplan Design Guidelines

This document outlines the design system for the Zeeplan project, including the color palette, typography, and component styling. These guidelines should be followed to ensure a consistent and professional look and feel across the application.

## Color Palette

The color palette is defined in `tailwind.config.js` and is based on a primary brand color and a secondary green for positive financial indicators.

-   **Brand:**
    -   `light`: `#3fbaeb`
    -   `DEFAULT`: `#0fa9e6`
    -   `dark`: `#0c87b8`
-   **Green (for financial gains):**
    -   `light`: `#d1fae5`
    -   `DEFAULT`: `#059669`
    -   `dark`: `#065f46`
-   **Grays:** Standard Tailwind CSS grays are used for text, backgrounds, and borders.

## Typography

-   **Font Family:** The primary font is **Inter**, a clean and readable sans-serif font. It is applied globally via `tailwind.config.js`.
-   **Headings:**
    -   `h1`: `text-4xl` to `text-6xl`, `font-extrabold`
    -   `h2`: `text-3xl` to `text-4xl`, `font-extrabold`
    -   `h3`: `text-2xl`, `font-bold`
-   **Body Text:** `text-base` or `text-lg` for readability.

## Component Styling

Components should be built using **Tailwind CSS utility classes**. Avoid using custom CSS Modules or inline styles unless absolutely necessary.

-   **Buttons:**
    -   **Primary:** `bg-brand`, `text-white`, `hover:bg-brand-dark`
    -   **Secondary:** `border-gray-300`, `text-gray-200`, `hover:bg-gray-800`
-   **Cards:** `bg-white`, `rounded-lg`, `shadow-lg`, `p-8`
-   **Inputs:** Standard form elements should be styled with a consistent border radius and focus ring.

These guidelines will be expanded as the component library grows.
