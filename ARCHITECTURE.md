# Architecture & Design Decisions

## Overview

This template is designed as a minimal but complete starting point for JavaScript projects, emphasizing modern tooling and best practices without overwhelming complexity.

## Design Principles

1. **ESM-First**: Uses ES Modules as the primary module format
2. **Zero Config**: Works out of the box with sensible defaults
3. **Multi-Target**: Builds for Node.js, browsers, and bundlers
4. **Quality-Focused**: Built-in linting, testing, and validation
5. **Developer Experience**: Fast feedback loops and helpful tooling

## Technology Choices

### Why ESM (ES Modules)?

- Native JavaScript standard
- Better tree-shaking and optimization
- Future-proof (widely supported)
- Works in browsers without bundlers

### Why Vitest over Jest?

- Native ESM support (no transpilation needed)
- Faster test execution
- Better DX with Vite-powered HMR
- Smaller dependency footprint
- Compatible with Jest API (easy migration)

### Why esbuild for Building?

- Extremely fast (10-100x faster than webpack/rollup)
- Single tool for multiple formats
- Built-in minification and source maps
- Native ESM and TypeScript support
- Simple configuration

### Why ESLint + Prettier?

- **ESLint**: Catches bugs and enforces code quality rules
- **Prettier**: Handles formatting without arguments
- Separation of concerns (quality vs. style)
- Widely adopted industry standard

### Why JSDoc over TypeScript?

This is a JavaScript template (TypeScript has its own template).

JSDoc provides:
- Type hints without compilation
- Documentation generation
- IDE autocomplete
- Gradual typing adoption path
- No build step for type checking

### Why Husky + lint-staged?

- Catches issues before they reach CI
- Faster feedback loop
- Automatic code formatting
- Prevents bad commits

### Why JSCPD (Duplicate Detection)?

- Identifies copy-paste code
- Encourages refactoring
- Maintains code quality over time
- Low overhead (runs in CI)

### Why licensee?

- Configuration file support
- SPDX standard compliance
- Active maintenance
- Clear error messages

## Build System

### Multiple Output Formats

The template builds 4 formats to support different use cases:

1. **ESM** (`dist/esm/`)
   - For Node.js 18+ with `import`
   - For modern bundlers (webpack 5, rollup, vite)
   - Supports code splitting

2. **CommonJS** (`dist/cjs/`)
   - For Node.js with `require()`
   - For older bundlers
   - Single file bundle

3. **IIFE** (`dist/iife/`)
   - For direct browser `<script>` tags
   - Single file, minified
   - Global variable export

4. **Browser ESM** (`dist/browser/`)
   - For native browser ESM
   - Import maps compatible
   - Code splitting support

### Why Multiple Formats?

Different consumers have different needs:
- Library authors: ESM + CJS
- Browser scripts: IIFE
- Import maps: Browser ESM

Users can keep only the formats they need.

## Testing Architecture

### Test Organization

```
src/
├── index.js
├── lib/
│   ├── greeter.js
│   └── greeter.spec.js  # Co-located with source
```

**Why co-located tests?**
- Easier to find related tests
- Encourages test writing
- Clear file structure
- Common in modern projects

### Test Philosophy

- **Unit Tests**: Fast, isolated, test single functions
- **Integration Tests**: Test module interactions
- **No E2E**: Keep template simple (add E2E in real projects)

### Coverage Goals

- Aim for 80%+ coverage
- Focus on critical paths
- Don't chase 100% (diminishing returns)

## Code Quality Pipeline

### Pre-commit Checks (Local)

```
Stage Changes → lint-staged runs:
  1. ESLint (auto-fix)
  2. Prettier (format)
  3. Git add fixed files
```

Fast feedback (~1-5 seconds)

### CI Checks (GitHub Actions)

```
Push/PR → GitHub Actions runs:
  1. Install dependencies
  2. Lint check (no auto-fix)
  3. Format check
  4. Run all tests with coverage
  5. Duplicate detection
  6. License compliance
  7. Build verification
```

Complete validation (~2-5 minutes)

### Why Both?

- Pre-commit: Catch simple issues early
- CI: Complete validation, multiple Node versions

## Configuration Strategy

### Shared Configurations

Uses `@templ-project/*` packages for consistency:

- `@templ-project/eslint`
- `@templ-project/prettier`
- `@templ-project/vitest`

**Benefits:**
- Single source of truth
- Easy updates (bump version)
- Consistent across projects
- Reduced configuration boilerplate

### Local Overrides

Users can extend configurations:

```javascript
// eslint.config.mjs
import templConfig from '@templ-project/eslint';

export default [
  ...templConfig,
  {
    rules: {
      // Your overrides
    }
  }
];
```

## Package.json Strategy

### Exports Field

```json
"exports": {
  ".": {
    "browser": { "import": "./dist/esm/index.js" },
    "import": "./dist/esm/index.js",
    "require": "./dist/cjs/index.cjs",
    "default": "./dist/esm/index.js"
  }
}
```

**Why this structure?**
- Modern Node.js respects `exports`
- Conditional exports for different environments
- Prevents deep imports (encapsulation)
- ESM-first with CJS fallback

### Files Field

```json
"files": ["dist"]
```

Only ships compiled code, not source. Users don't need:
- Source files (they use dist/)
- Tests
- Config files
- Development dependencies

Keeps published package small.

## Security Considerations

### Dependencies

- All devDependencies (no runtime deps)
- Regular updates via Dependabot (in real projects)
- License checking to avoid problematic licenses

### No Runtime Dependencies

The template produces zero-dependency builds:
- Smaller bundle size
- No supply chain attacks
- Faster installs
- No security vulnerabilities from deps

## Future Considerations

### What's NOT Included (Intentionally)

- **TypeScript**: Separate template
- **React/Vue/Framework**: Keep template minimal
- **Database/Backend**: Focus on library template
- **E2E Testing**: Project-specific
- **Docker**: Deployment concern
- **Monorepo Tools**: Different template

### Extension Points

Users should add based on needs:
- Testing: E2E (Playwright, Cypress)
- Bundling: Advanced webpack/vite config
- Deployment: CI/CD for their platform
- Monitoring: Error tracking, analytics

## Performance Considerations

### Build Performance

- esbuild: Sub-second builds
- Parallel builds: Using `npm-run-all`
- Incremental builds: Not implemented (keep simple)

### Test Performance

- Vitest: Parallel test execution
- No watch mode in CI
- Coverage only when needed

### Developer Experience

- Fast iteration: `npm run test:watch`
- Quick validation: `npm run validate`
- Instant formatting: Prettier

## Maintenance

### Version Updates

Regular updates needed:
- Node.js versions in CI matrix
- Dependencies (weekly/monthly)
- Config packages
- Documentation

### Breaking Changes

When updating:
1. Update CHANGELOG.md
2. Document migration path
3. Version bump (semver)
4. Test bootstrap script

## References

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Node.js ESM Documentation](https://nodejs.org/api/esm.html)
- [Package.json Exports](https://nodejs.org/api/packages.html#exports)
- [Vitest Documentation](https://vitest.dev/)
- [JSDoc Documentation](https://jsdoc.app/)
