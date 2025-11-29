# Contributing to Zeeplan

We're excited that you're interested in contributing to the Zeeplan project! Your contributions are essential for making this tool a success. This guide will help you get started.

## Project Philosophy

Zeeplan is a financial modeling tool designed for a specific regenerative agriculture proposal. Our development philosophy prioritizes:
- **Clarity and Simplicity:** Code should be easy to understand and maintain.
- **Accuracy:** The financial calculations are the core of the application and must be correct and thoroughly tested.
- **Interactivity:** The user experience should be fluid and allow for real-time exploration of financial scenarios.

## Getting Started

1.  **Fork & Clone:** Fork the repository on GitHub and clone your fork locally.
2.  **Install Dependencies:** We use `npm` for package management.
    ```bash
    npm install
    ```
3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## Key Development Tasks

### Running Tests
We use Jest for unit testing. It's crucial that all tests pass before you submit a pull request.
```bash
npm test
```

### Formatting and Linting
We use Prettier for code formatting and ESLint for identifying potential issues.
```bash
# To format all files
npm run format

# To run the linter
npm run lint
```

## Project Structure Overview

The repository is organized to separate concerns and make the codebase easy to navigate.

```
/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable React components
├── data/               # Static data files (e.g., partnershipData-refactored.json)
├── docs/               # Project documentation (architecture, design system)
├── lib/                # Core application logic, types, and utilities
│   ├── calculations.ts   # Core financial calculation engine (pure functions)
│   ├── partnershipData.ts# TypeScript types for our data model
│   ├── store.ts          # Zustand store for global state management
│   └── ...               # Other utilities (formatting, validation, etc.)
├── tests/              # Test files (Jest configuration)
├── public/             # Static assets
└── ...                 # Configuration files
```

## Architectural Principles

-   **Stateless Logic:** All core financial logic resides in `lib/calculations.ts`. These functions are pure, stateless, and have no side effects, which makes them easy to test and reason about.
-   **Centralized State:** Global application state is managed by a Zustand store in `lib/store.ts`. UI components should subscribe to this store for data and use its actions to update state. Avoid local state (`useState`) for complex, shared data.
-   **Data Model:** The primary data structure is an array of `Enterprise` objects, defined in `lib/partnershipData.ts`. This model is designed to be flexible and scalable to new types of agricultural enterprises.
-   **Component-Based UI:** The user interface is built with React components in the `components/` directory. We use CSS Modules for styling to keep styles scoped to their respective components.

## Submitting a Pull Request

1.  Create a new branch for your feature or bug fix.
2.  Make your changes, adhering to the architectural principles above.
3.  Add or update tests in the `tests/` directory to cover your changes.
4.  Ensure all tests and lint checks pass.
5.  Push your branch and open a pull request with a clear title and a detailed description of your changes.

Thank you for your contributions!
