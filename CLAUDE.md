# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Zeeplan** — Interactive business plan for a regenerative agriculture partnership in Zeerust, North West Province, South Africa. Web app with financial projections and enterprise planning.

## Status: Consolidation Pending

Multiple agriculture-related repos exist (zeeplan, pigpro, farm-plan, cheesypork). These should be consolidated — most archived in favor of one primary repo. cognitive-mesh integration tracked in Issue #298.

## Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Testing**: Jest (`jest.config.cjs`, `jest.setup.js`)
- **Linting**: ESLint 9
- **Deployment**: Netlify (zeeplan.netlify.app)

## Key Commands

```bash
npm install               # Install dependencies
npm run dev               # Start dev server
npm run build             # Production build
npm run lint              # ESLint
npm test                  # Jest tests
```

## Architecture

- `app/` — Next.js App Router pages
- `components/` — React components
- `data/` — Business plan data and projections
- `lib/` — Shared utilities
- `docs/` — Documentation

## AgentKit Forge

This project has not yet been onboarded to [AgentKit Forge](https://github.com/phoenixvc/agentkit-forge). To request onboarding, [create a ticket](https://github.com/phoenixvc/agentkit-forge/issues/new?title=Onboard+zeeplan&labels=onboarding).

## Baton Integration

Baton is the shared task graph for cross-repo work. When the `baton` MCP server is available, agents should check for existing work with `task_check` at the start of meaningful tasks, create or claim visible work with `task_notify`/`log_agent_message`, update the task when significant new information becomes available, and log completion or blockers before handing off.
