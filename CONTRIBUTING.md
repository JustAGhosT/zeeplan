# Contributing to Zeeplan

We welcome contributions to the Zeeplan project! Whether you're fixing a bug, adding a new feature, or improving the documentation, your help is appreciated.

## Getting Started

1.  **Fork the repository** and clone it to your local machine.
2.  **Install dependencies** by running `npm install`.
3.  **Run the development server** with `npm run dev`.

## Development Workflow

1.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/my-new-feature` or `bugfix/fix-for-that-thing`.
2.  **Make your changes.** Please adhere to the coding style and architectural patterns outlined below.
3.  **Write or update tests** to cover your changes. Run the test suite with `npm test`.
4.  **Format your code** with `npm run format` and **lint your code** with `npm run lint`.
5.  **Commit your changes** with a clear and descriptive commit message.
6.  **Push your branch** and open a pull request.

## Coding Style & Architecture

-   **Data Model:** All core data structures are defined in `lib/partnershipData.ts`. The model is based on a flexible array of `Enterprise` objects.
-   **State Management:** We use Zustand for centralized state management. The store is located in `lib/store.ts`. UI components should interact with the store, not manage their own complex state.
-   **Business Logic:** All financial calculations are pure functions located in `lib/calculations.ts`. They should be stateless and thoroughly unit-tested.
-   **Components:** UI components are located in `components/`. Strive to create small, reusable components.
-   **Styling:** We use CSS Modules for component-level styling.

## Pull Request Guidelines

-   Your pull request should have a clear title and description.
-   Please link to any relevant issues.
-   Ensure that all tests are passing in CI.
-   Your PR will be reviewed by at least one other developer before it is merged.

Thank you for contributing!
