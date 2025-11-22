# Architecture Overview

This document outlines the software architecture of the Zeeplan application after its refactoring.

## Core Principles

-   **Scalability:** The architecture is designed to be scalable, allowing new agricultural enterprises to be added with minimal code changes.
-   **Maintainability:** By separating concerns and using a centralized state management solution, the codebase is easier to understand, modify, and debug.
-   **Component-Based:** The UI is built with reusable React components, promoting consistency and reducing code duplication.

## Data Flow

The application's data flow is unidirectional and managed by a central state store.

1.  **Initialization:** On application load, the default partnership data is loaded from `data/partnershipData-refactored.json` into the Zustand store (`lib/store.ts`).
2.  **User Interaction:** The user interacts with the `ConsolidatedControls` component. When a value is changed (e.g., a slider is moved), an action is called from the Zustand store.
3.  **State Update:** The Zustand store updates its state. For example, the `updateEnterprise` action finds the correct enterprise in the `enterprises` array and modifies its properties.
4.  **Re-render:** Components that subscribe to the Zustand store (like the financial projection pages) are automatically re-rendered with the new data.
5.  **Recalculation:** The `calculateFinancialSummary` function is called with the updated data, and the UI displays the new projections.

## Key Components & Libraries

-   **`lib/partnershipData.ts` (Data Model):** Defines the core data structures for the application, centered around a flexible `Enterprise` interface.
-   **`lib/calculations.ts` (Business Logic):** Contains the pure functions responsible for all financial calculations. These functions are designed to be stateless and operate on the data passed to them.
-   **`lib/store.ts` (State Management):** The central Zustand store that holds the application's state (`PartnershipData`). It provides actions to modify the state in a predictable way.
-   **`components/ConsolidatedControls.tsx` (UI Controls):** The primary interface for user interaction. It is a "smart" component that reads from and sends actions to the Zustand store.
-   **`app/financials/page.tsx` (Display):** This is a "dumb" component that reads the calculated financial summary from the store and displays it. It does not contain any business logic itself.

## Scalability Example

To add a new "Sheep" enterprise, a developer would:

1.  Add a new `Enterprise` object for sheep to the `data/partnershipData-refactored.json` file.
2.  No other code changes are required. The `ConsolidatedControls` will automatically render a new tab for "Sheep", and the calculation functions will automatically include it in the financial summary.
