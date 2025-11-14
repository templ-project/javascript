# Welcome to JavaScript Template

Modern JavaScript/Node.js project template following best practices and Google JavaScript Style Guide conventions.

## Features

- 🚀 Modern ES Modules (ESM) with backwards compatibility (CJS)
- 📦 Multiple build targets (Node.js, Browser, IIFE)
- ✅ Comprehensive testing with Vitest
- 📝 Automated API documentation
- 🎨 Code formatting with Prettier
- 🔍 Linting with ESLint (Google JavaScript Style Guide)
- 🪝 Pre-commit hooks with Husky
- 🔧 Task-based build system
- 📊 Code duplication detection
- 🔒 License and security audit checks
- 🌍 Cross-platform support (Linux, macOS, Windows/WSL)

## Quick Start

```bash
git clone https://github.com/templ-project/javascript.git
cd javascript
npm install
npm run build
npm test
```

## Project Structure

```text
src/
├── index.js          # Main entry point
├── cli.js            # CLI entry point
└── lib/
    └── greeter.js    # Example module
```

## Build Targets

- **ESM** (`dist/esm/`) - Modern ES Modules
- **CJS** (`dist/cjs/`) - CommonJS for Node.js
- **Browser** (`dist/browser/`) - Browser-optimized
- **IIFE** (`dist/iife/`) - Standalone browser script

## Documentation

- [API Reference](API.md) - Auto-generated API documentation

## License

MIT License
