# Contributing to Zeeplan

Thank you for your interest in the Zeeplan project! This guide will help you get started with development.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** 8.x or higher
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JustAGhosT/zeeplan.git
cd zeeplan
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
zeeplan/
├── app/                    # Next.js app directory (pages and routes)
│   ├── contexts/          # React contexts (Theme, Data)
│   ├── cattle/            # Cattle enterprise page
│   ├── chicken/           # Chicken enterprise page
│   ├── crops/             # Crop production pages
│   ├── financials/        # Financial projections page
│   ├── goats/             # Goat dairy enterprise page
│   ├── pigs/              # Pig enterprise page
│   ├── operations/        # Operations dashboard
│   ├── proposal/          # Full proposal page
│   ├── sekelbos/          # Sekelbos clearance plan
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── lib/                   # Utility functions and business logic
│   ├── calculations.ts    # Financial calculations
│   ├── constants.ts       # Business constants
│   ├── formatting.ts      # Currency and number formatting
│   ├── hooks.ts           # Custom React hooks
│   ├── validation.ts      # Input validation
│   └── partnershipData.ts # Data model definitions
├── docs/                  # Documentation files
│   ├── CODE_ANALYSIS.md   # Code analysis and bug report
│   └── *.md               # Business plan documents
└── data/                  # Financial data files
```

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

### Test Files

- `lib/calculations.test.ts` - Financial calculation tests
- `lib/formatting.test.ts` - Formatting utility tests
- `lib/validation.test.ts` - Validation function tests

## 🎨 Code Style

This project uses:

- **ESLint** for JavaScript/TypeScript linting
- **Prettier** for code formatting
- **TypeScript** for type safety

### Format Code

```bash
npm run format
```

### Lint Code

```bash
npm run lint
```

## 🏗️ Building

### Create Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🔧 Development Guidelines

### Code Standards

1. **TypeScript**: Use TypeScript for all new code. Add proper type annotations.
2. **Components**: Use functional components with hooks.
3. **Styling**: Use CSS Modules for component-specific styles.
4. **Constants**: Extract magic numbers to `lib/constants.ts`.
5. **Testing**: Write tests for all business logic functions.

### File Naming

- **Components**: PascalCase (e.g., `Header.tsx`, `FinancialProjections.tsx`)
- **Utilities**: camelCase (e.g., `calculations.ts`, `formatting.ts`)
- **Styles**: Match component name (e.g., `Header.module.css`)
- **Tests**: Same name as file being tested with `.test.ts` extension

### Component Structure

```typescript
'use client'; // If using client-side features

import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentProps {
  // Define props with TypeScript
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    <div className={styles.container}>
      {/* JSX */}
    </div>
  );
}
```

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run tests: `npm test`
4. Run linter: `npm run lint`
5. Format code: `npm run format`
6. Commit changes: `git commit -m "Description of changes"`
7. Push to GitHub: `git push origin feature/your-feature-name`
8. Create a Pull Request

## 📚 Key Concepts

### Partnership Structure

The application models a three-way partnership:
- **Oom Hein**: 35% equity (Land + Operations)
- **Eben**: 35% equity (Infrastructure + Family)
- **Hans**: 30% equity (Sweat Equity + Livestock)

### Financial Calculations

All financial calculations use min-max ranges:
```typescript
type Range = [number, number]; // [min, max]
```

This allows for conservative (min) and optimistic (max) projections.

### Data Flow

1. `partnershipData.json` contains baseline data
2. `DataContext` provides global state management
3. Components use `useData()` hook to access/update data
4. `calculations.ts` performs all financial computations
5. Results are cached for performance

## 🐛 Reporting Issues

Please refer to `docs/CODE_ANALYSIS.md` for known issues and improvement opportunities.

When reporting new issues, include:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS information

## 💡 Adding Features

### Before Adding a Feature

1. Check if it aligns with the project goals
2. Review existing code for similar patterns
3. Consider impact on financial calculations
4. Plan for mobile responsiveness
5. Consider dark mode compatibility

### Feature Checklist

- [ ] TypeScript types defined
- [ ] Component created with CSS module
- [ ] Dark mode styles added
- [ ] Mobile responsive
- [ ] Tests written
- [ ] Documentation updated
- [ ] Accessibility considered (ARIA labels, keyboard navigation)

## 🎯 Performance

### Best Practices

1. Use `React.memo()` for expensive components
2. Use `useMemo()` for expensive calculations
3. Use `useCallback()` for event handlers passed to children
4. Lazy load images and heavy components
5. Keep bundle size small

### Caching

The financial summary calculation is cached:
```typescript
const summaryCache = new Map<string, FinancialSummary>();
```

## 🔒 Security

- Never commit sensitive data (API keys, passwords, etc.)
- Keep dependencies updated: `npm audit` and `npm audit fix`
- Validate all user inputs
- Sanitize data before display

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Support

For questions or support:
- Check existing documentation in `/docs`
- Review the code analysis: `docs/CODE_ANALYSIS.md`
- Contact the project maintainer

## 📄 License

This project is intended for the Zeerust farm partnership. For licensing inquiries, please contact the repository owner.

---

Thank you for contributing to Zeeplan! 🌱
