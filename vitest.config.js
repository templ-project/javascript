import {defineConfig} from 'vitest/config';

export default defineConfig({
  server: {
    fs: {
      deny: ['.jscpd', '.install'],
    },
  },
  test: {
    globals: true,
    environment: 'node',
    exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/.jscpd/**', '**/.install/**', '**/*.config.*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.js'],
      exclude: [
        '**/.install/**',
        '**/coverage/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/.jscpd/**',
        '**/src/**/*.spec.js',
        '**/src/**/*.test.js',
        '**/src/cli.js',
        '**/*.config.*',
      ],
      all: true,
      skipFull: false,
    },
  },
});
