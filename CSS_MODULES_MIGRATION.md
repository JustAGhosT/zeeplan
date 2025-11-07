# CSS Modules Migration - Implementation Guide

## Overview
This document describes the approach taken to migrate from Tailwind-like utility classes to CSS Modules while maintaining proper light/dark mode functionality.

## Current State

### Completed Conversions to CSS Modules
The following components have been fully converted to use CSS modules with proper dark mode support:

1. **Header.tsx** → `Header.module.css`
   - Fully modular with dark mode variants
   - Responsive navigation
   - Mobile menu support

2. **Footer.tsx** → `Footer.module.css`  
   - Fully modular with dark mode variants
   - Social links and contact information

3. **Navigation.tsx** → `Navigation.module.css`
   - Modular navigation component
   - Active section tracking
   - Dark mode support

4. **UIComponents.tsx** → `UIComponents.module.css`
   - Reusable components: Card, Section, Table, MetricCard, InputGroup, RangeInputGroup
   - All components support dark mode
   - Can be imported and used throughout the application

### Utility Classes (utilities.css)
- **Status**: Retained as global utilities
- **Reason**: 650+ usages across 24 files; provides consistent styling patterns
- **Dark Mode**: All utility classes have `.dark` variants that work with the global dark mode toggle

## Dark Mode Implementation

### How It Works
1. The `Header.tsx` component manages dark mode state
2. When toggled, it adds/removes the `.dark` class on `document.documentElement`
3. All CSS (both modules and utilities) have dark mode variants using `.dark` selector
4. Dark mode preference is persisted in localStorage

### Example Pattern
```tsx
// In a CSS Module component
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const checkDarkMode = () => {
    setIsDark(document.documentElement.classList.contains('dark'));
  };
  checkDarkMode();
  const observer = new MutationObserver(checkDarkMode);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}, []);

// Use in className
<div className={`${styles.myClass} ${isDark ? styles.dark : ''}`}>
```

## Migration Pattern for Remaining Components

To convert additional components to CSS modules, follow this pattern:

### 1. Create the CSS Module file
```css
/* Component.module.css */
.container {
  background-color: white;
  padding: 1rem;
}

.container.dark {
  background-color: #1f2937;
}

.title {
  color: #111827;
  font-size: 1.5rem;
}

.title.dark {
  color: #f9fafb;
}
```

### 2. Update the Component
```tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './Component.module.css';

export function Component() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.container} ${isDark ? styles.dark : ''}`}>
      <h1 className={`${styles.title} ${isDark ? styles.dark : ''}`}>
        Title
      </h1>
    </div>
  );
}
```

## Benefits of CSS Modules

1. **Scoped Styles**: No class name conflicts
2. **Type Safety**: Can integrate with TypeScript for class name checking
3. **Better Organization**: Styles live next to components
4. **Tree Shaking**: Unused styles can be eliminated
5. **Dark Mode**: Explicit dark variants prevent inconsistencies

## Remaining Work

To complete the full migration:

1. Convert remaining components:
   - ExecutiveSummary.tsx
   - FinancialCharts.tsx
   - FinancialProjections.tsx
   - ControlsPanel.tsx
   - SekelbosClearance.tsx
   - TransformationPlan.tsx

2. Convert page components:
   - app/page.tsx (Home)
   - app/about/page.tsx
   - app/proposal/page.tsx
   - app/financials/page.tsx
   - app/sekelbos/page.tsx
   - app/cattle/page.tsx
   - app/goats/page.tsx
   - app/pigs/page.tsx
   - app/chicken/page.tsx
   - app/contact/page.tsx

3. Once all components are converted, utilities.css can be removed

## Testing

After converting a component:
1. Run `npm run build` to ensure no errors
2. Test both light and dark modes
3. Verify responsive behavior
4. Check print styles if applicable

## Notes

- The `utilities.css` file provides Tailwind-like utilities and should remain until all components are migrated
- All new components should use CSS Modules pattern
- Dark mode must be explicitly handled in each CSS module with `.dark` variants
- Use the existing converted components (Header, Footer, Navigation, UIComponents) as reference examples
