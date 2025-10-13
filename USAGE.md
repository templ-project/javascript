# Usage Guide

## Installation Methods

### Method 1: Bootstrap Script (Recommended)

```bash
# Bootstrap in current directory
npx --yes --package=github:templ-project/javascript bootstrap

# Bootstrap in specific directory
npx --yes --package=github:templ-project/javascript bootstrap ./my-project

# Bootstrap for monorepo (removes git hooks and CI)
npx --yes --package=github:templ-project/javascript bootstrap --part-of-monorepo

# Bootstrap with specific build targets
npx --yes --package=github:templ-project/javascript bootstrap --target esm,cjs
```

See [Bootstrap Documentation](../.install/README.md) for all options.

### Method 2: Manual Clone

```bash
# Clone the template
git clone https://github.com/templ-project/javascript.git my-project
cd my-project

# Remove git history
rm -rf .git

# Install dependencies
npm install

# Initialize new git repository
git init
git add .
git commit -m "Initial commit from template"
```

## Development Workflow

### Running the Application

```bash
npm start
```

### Testing

```bash
# Run all tests
npm test

# Watch mode (auto-rerun on changes)
npm run test:watch

# With coverage report
npm run test:coverage
```

Coverage reports are generated in `coverage/` directory.

### Code Quality

```bash
# Lint code (with auto-fix)
npm run lint

# Check linting without fixing
npm run lint:check

# Format code
npm run format

# Check formatting
npm run format:check

# Check for duplicate code
npm run duplicate-check

# Check license compliance
npm run license-check

# Run all checks
npm run validate
```

### Building

```bash
# Build all formats
npm run build

# Clean build artifacts
npm run clean
```

Build outputs:

- `dist/esm/` - ES Modules
- `dist/cjs/` - CommonJS
- `dist/iife/` - Browser IIFE bundle
- `dist/browser/` - Browser ESM with code splitting

### Documentation

```bash
# Generate API documentation from JSDoc
npm run docs
```

Documentation is generated in `docs/` directory.

## Testing Strategy

### Writing Tests

All test files should end with `.spec.js`:

```javascript
import {describe, it, expect, beforeEach} from "vitest";
import {myFunction} from "./my-module.js";

describe("myModule", () => {
  describe("myFunction", () => {
    it("should handle valid input", () => {
      const result = myFunction("test");
      expect(result).toBe("expected output");
    });

    it("should throw on invalid input", () => {
      expect(() => myFunction(null)).toThrow("Error message");
    });
  });
});
```

### Test Categories

1. **Unit Tests**: Test individual functions
2. **Integration Tests**: Test module interactions
3. **Edge Cases**: Test boundary conditions
4. **Error Handling**: Test error cases

## JSDoc Documentation

All functions should include JSDoc comments:

```javascript
/**
 * Brief description of the function
 *
 * @param {string} name - Parameter description
 * @returns {string} Return value description
 * @throws {Error} When error conditions occur
 *
 * @example
 * const result = myFunction('example');
 * console.log(result); // Expected output
 */
export function myFunction(name) {
  // Implementation
}
```

Generate docs with: `npm run docs`

## Import Maps (Browser)

You can use native browser ESM with import maps. Create an HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Browser ESM Example</title>
  </head>
  <body>
    <h1>Check the console</h1>

    <script type="importmap">
      {
        "imports": {
          "@templ-project/javascript-template": "./dist/esm/index.js"
        }
      }
    </script>

    <script type="module">
      import {hello} from "@templ-project/javascript-template";
      console.log(hello("World"));
    </script>
  </body>
</html>
```

Serve locally:

```bash
npm run build
npm run serve
# Open http://localhost:3000/your-file.html
```

## Git Hooks

Husky automatically sets up pre-commit hooks:

- **Pre-commit**: Runs lint-staged
  - Auto-formats JavaScript files
  - Auto-fixes linting issues
  - Formats JSON, Markdown, YAML

To skip hooks (not recommended):

```bash
git commit --no-verify
```

## Troubleshooting

### Node Version Issues

```bash
# Check your Node.js version
node --version

# Should be 18.0.0 or higher
# Use nvm to switch: nvm use 18
```

### Module Resolution Errors

Make sure to include `.js` extension in imports:

```javascript
// ✅ Correct
import {hello} from "./lib/greeter.js";

// ❌ Wrong
import {hello} from "./lib/greeter";
```

### Test Failures

```bash
# Run with verbose output
npm run test -- --reporter=verbose

# Run specific test file
npm run test src/lib/greeter.spec.js
```

### Build Issues

```bash
# Clean and rebuild
npm run clean
npm run build
```

## Publishing

Before publishing to npm:

1. Update `package.json`:
   - Change `name` to your package name
   - Update `repository`, `bugs`, `homepage` URLs
   - Update `author` field

2. Update build configuration:
   - In `build:iife` script, change `--global-name=YourLib`
   - Change `--outfile` names from `your-lib.min.js`

3. Test the build:

   ```bash
   npm run build
   npm pack
   ```

4. Publish:
   ```bash
   npm publish
   ```

## Using with Deno

This package is Deno-compatible through npm specifiers:

```typescript
import {hello, Greeter} from "npm:@templ-project/javascript-template";

console.log(hello("Deno"));
```

Requires Deno 1.28 or later.
