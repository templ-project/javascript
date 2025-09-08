import defineConfig from '@templ-project/vitest';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'coverage/**',
        'dist/**',
        'node_modules/**',
        '.jscpd/**',
        '**/*.config.*',
        '**/*.test.*',
        '**/*.spec.*',
      ],
      include: ['src/**/*.js'],
      exclude: [
        'coverage/**',
        'dist/**',
        'node_modules/**',
        '.jscpd/**',
        '**/*.config.*',
        '**/*.test.*',
        '**/*.spec.*',
        'src/**/*.test.js',
        'src/**/*.spec.js',
      ],
    },
  },
});
