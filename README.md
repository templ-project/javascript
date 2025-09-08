# JavaScript Bootstrap Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js CI](https://github.com/templ-project/javascript/workflows/Node.js%20CI/badge.svg)](https://github.com/templ-project/javascript/actions)

> A comprehensive JavaScript Bootstrap/Template project using modern tools and best practices

This template provides a complete setup for modern JavaScript development with Node.js, featuring ESM modules, comprehensive testing, linting, and code quality tools.

## 🚀 Features

- **Modern JavaScript**: ESM modules with Node.js 18+ support
- **Testing**: Vitest testing framework with coverage reporting
- **Code Quality**: ESLint + Prettier + JSHint configuration
- **Git Hooks**: Husky + lint-staged for pre-commit validation
- **Duplicate Detection**: JSCPD for code duplication analysis
- **License Checking**: Automated license compliance verification
- **Build System**: Rollup for dual ESM/CommonJS builds
- **Documentation**: Comprehensive JSDoc comments
- **CI/CD Ready**: GitHub Actions workflow included

## 📦 Built With

- **[@templ-project/eslint](https://github.com/templ-project/javascript-extensions)** - ESLint configuration
- **[@templ-project/prettier](https://github.com/templ-project/javascript-extensions)** - Prettier configuration
- **[@templ-project/vitest](https://github.com/templ-project/javascript-extensions)** - Vitest configuration
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[JSHint](https://jshint.com/)** - JavaScript linter
- **[JSCPD](https://github.com/kucherenko/jscpd)** - Copy/paste detector
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit linting

## 🏁 Quick Start

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 8+ (or yarn/pnpm equivalent)

### Installation

```bash
# Clone the template
git clone https://github.com/templ-project/javascript.git my-project
cd my-project

# Install dependencies
npm install

# Set up git hooks
npm run prepare
```

### Development

```bash
# Run the application
npm start

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format

# Type check with JSHint
npm run type-check

# Check for duplicated code
npm run duplicate-check

# Verify license compliance
npm run license-check

# Validate all (lint + format + test)
npm run validate
```

### Building

```bash
# Build for production (ESM + CommonJS)
npm run build

# Clean build artifacts
npm run clean
```

## 📁 Project Structure

```
src/
├── index.js                 # Main entry point
├── index.test.js            # Integration tests
└── lib/
    ├── greeter.js           # Example module
    └── greeter.test.js      # Unit tests
```

## 🧪 Testing Strategy

This template follows **Test-Driven Development (TDD)** principles:

- **Unit Tests**: Test individual functions and modules
- **Integration Tests**: Test module interactions
- **Coverage**: Comprehensive test coverage reporting
- **Mocking**: Vitest mocking capabilities for external dependencies

### Example Test Structure

```javascript
import {describe, it, expect} from "vitest";
import {hello} from "../lib/greeter.js";

describe("greeter module", () => {
  describe("hello function", () => {
    it("should return a greeting message", () => {
      const result = hello("World");
      expect(result).toBe("Hello, World!");
    });
  });
});
```

## 🔧 Configuration

### ESLint (`eslint.config.mjs`)

Uses `@templ-project/eslint` for comprehensive JavaScript linting following Google JavaScript Style Guide.

### Prettier (`package.json`)

```json
{
  "prettier": "@templ-project/prettier"
}
```

### Vitest (`vitest.config.js`)

Configured with coverage reporting and optimized for JavaScript projects.

### JSHint (`.jshintrc`)

Type definitions and code quality checking for JavaScript.

### JSCPD (`.jscpd.json`)

Copy/paste detection configuration with HTML and console reporting.

## 🔒 Code Quality

### Pre-commit Hooks

```json
{
  "*.{js,mjs,cjs}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

### Quality Gates

- **Linting**: ESLint with automatic fixing
- **Formatting**: Prettier with consistent style
- **Testing**: Comprehensive test coverage
- **Type Checking**: JSHint for JavaScript validation
- **Duplication**: JSCPD for code quality analysis
- **License**: Automated license compliance checking

## 🚀 Deployment

### ESM Module Export

```javascript
// Direct import
import {hello} from "@your-org/your-package";

// Default import
import greeter from "@your-org/your-package";
```

### CommonJS Compatibility

```javascript
// CommonJS require
const {hello} = require("@your-org/your-package");
```

## 📚 API Documentation

### `hello(name: string): string`

Creates a greeting message for the specified name.

**Parameters:**

- `name` (string) - The name to greet

**Returns:**

- `string` - A formatted greeting message

**Throws:**

- `Error` - When name is not provided or is not a string

**Example:**

```javascript
import {hello} from "./src/lib/greeter.js";

const message = hello("World");
console.log(message); // "Hello, World!"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the established patterns
4. Run quality checks (`npm run validate`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- Write tests for all new features (TDD approach)
- Maintain comprehensive JSDoc documentation
- Ensure all quality gates pass
- Keep dependencies up to date

## 🐛 Troubleshooting

### Common Issues

**Node.js Version**

```bash
# Check Node.js version
node --version
# Should be 18.0.0 or higher
```

**Module Resolution**

```bash
# Ensure you're using ESM-compatible imports
import { hello } from './lib/greeter.js'; // ✅ Include .js extension
import { hello } from './lib/greeter';    // ❌ Missing extension
```

**Test Failures**

```bash
# Run tests with verbose output
npm run test -- --reporter=verbose

# Run specific test file
npm run test src/lib/greeter.test.js
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [Templ Project](http://templ-project.github.io/) - More project templates
- [JavaScript Extensions](https://github.com/templ-project/javascript-extensions) - Configuration packages

## 👨‍💻 Author

**Templ Project**

- GitHub: [@templ-project](https://github.com/templ-project)
- Email: [contact@templ-project.io](mailto:contact@templ-project.io)

## 💝 Support

If you find this template useful:

- ⭐ Star the repository
- 🐛 Report bugs and request features
- 📖 Improve documentation
- 🚀 Share with the community

---

**Happy Coding! 🎉**
