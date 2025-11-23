import templEslintConfig from '@templ-project/eslint';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'docs-html/**',
      '.jscpd/**',
      'node_modules/**',
      '**/*.config.js',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '*.md',
      '*.html',
      'package.json',
      'package-lock.json',
      '.gitignore',
      '.prettierignore',
      '.eslintignore',
      'LICENSE',
      'tsconfig*.json',
      'typedoc.json',
      'jsconfig.json',
    ],
  },
  ...templEslintConfig,
];
