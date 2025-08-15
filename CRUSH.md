# Project CRUSH Guidelines

This document outlines the essential guidelines and commands for developers working on this project, ensuring consistency and efficiency.

## Build/Lint/Test Commands

- **Build:** `npm run build` (or `vite build`)
- **Lint:** `npm run lint`
- **Test:** No explicit test command found. For React projects, `npm test` or a testing framework specific command (e.g., `jest`) is typically used. Please configure a testing solution if needed.

## Code Style Guidelines

### Imports
- Use absolute imports when possible, relative imports for sibling/child modules.
- Group imports: React/library imports first, then third-party, then local.

### Formatting
- Adhere to Prettier settings (if configured, otherwise use standard TypeScript/React formatting).
- Use 2 spaces for indentation.
- Single quotes for strings.
- Trailing commas where appropriate.

### Types
- Utilize TypeScript for strong typing.
- Explicitly define prop types for React components.
- Use interfaces or types for data structures.

### Naming Conventions
- **Components:** PascalCase (e.g., `SolarSystem`, `PlanetInfo`).
- **Functions/Variables:** camelCase (e.g., `fetchPlanetData`, `planetData`).
- **Constants:** UPPER_SNAKE_CASE (e.g., `API_KEY`).

### Error Handling
- Use `try-catch` blocks for asynchronous operations.
- Provide meaningful error messages to the console or UI.

## Contribution Guidelines
- Ensure all new code adheres to the existing project conventions.
- Run linting and build commands before submitting changes.
