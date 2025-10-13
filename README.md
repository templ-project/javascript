# JavaScript Bootstrap Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/templ-project/javascript/workflows/Node.js%20CI/badge.svg)](https://github.com/templ-project/javascript/actions)

> A modern JavaScript project template with ESM, testing, linting, and quality tools built-in.

## Quick Start

**Bootstrap a new project:**

```bash
npx --yes --package=github:templ-project/javascript bootstrap ./my-project
cd my-project
npm install
npm test
```

That's it! You now have a fully configured JavaScript project.

## What's Included

- ✅ **ESM Modules** - Modern JavaScript with Node.js 20+
- ✅ **Vitest** - Fast unit testing with coverage
- ✅ **ESLint + Prettier** - Code formatting and linting
- ✅ **Husky** - Git hooks for pre-commit validation
- ✅ **esbuild** - Multiple build formats (ESM/CJS/IIFE/Browser)
- ✅ **JSDoc** - API documentation generation
- ✅ **CI/CD** - GitHub Actions workflows included

## Common Commands

```bash
npm start              # Run the app
npm test               # Run tests
npm run test:coverage  # Run tests with coverage
npm run lint           # Lint and auto-fix
npm run format         # Format code with Prettier
npm run build          # Build for production
npm run docs           # Generate JSDoc documentation
npm run validate       # Run all quality checks
```

## Project Structure

```text
src/
├── index.js           # Main entry point
└── lib/
    ├── greeter.js     # Example module with JSDoc
    └── greeter.spec.js # Unit tests
```

## Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[Usage Guide](USAGE.md)** - Detailed usage instructions
- **[Architecture](ARCHITECTURE.md)** - Design decisions and architecture
<!-- - **[API Documentation](docs/)** - Generated from JSDoc comments -->

## Requirements

- Node.js 20+
- npm 10+

## Building

The template builds multiple formats for different use cases:

```bash
npm run build
```

Outputs:

- `dist/esm/` - ES Modules (for Node.js and modern bundlers)
- `dist/cjs/` - CommonJS (for older Node.js)
- `dist/iife/` - Browser bundle (for direct `<script>` usage)
- `dist/browser/` - Optimized browser ESM

## Configuration

All configuration uses shared packages for consistency:

- **ESLint**: `@templ-project/eslint` (Google JavaScript Style Guide)
- **Prettier**: `@templ-project/prettier`
- **Vitest**: `@templ-project/vitest`
- **JSDoc**: `jsdoc.json`
- **License Check**: `.licensee.json`

## Quality Checks

Every commit is validated with:

- Code formatting (Prettier)
- Linting (ESLint)
- Type checking (JSDoc)
- Unit tests (Vitest)

CI runs additional checks:

- Test coverage
- Duplicate code detection
- License compliance

## Using as a Library

```javascript
// ES Modules
import { hello, Greeter } from '@templ-project/javascript-template';

// CommonJS
const { hello } = require('@templ-project/javascript-template');

// Browser (after npm run build)
<script src="./dist/iife/your-lib.min.js"></script>
<script>
  console.log(YourLib.hello('World'));
</script>
```

## License

MIT © [Templ Project](https://github.com/templ-project)

## Support

- 🐛 [Report Issues](https://github.com/templ-project/javascript/issues)
- 📖 [Read the Docs](https://github.com/templ-project/javascript#readme)
- ⭐ [Star on GitHub](https://github.com/templ-project/javascript)
