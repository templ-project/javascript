import templEslintConfig from '@templ-project/eslint';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      '.jscpd/**',
      'node_modules/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '*.md',
      'package.json',
      'package-lock.json',
      '.gitignore',
      '.prettierignore',
      '.eslintignore',
      'LICENSE',
      'tsconfig.json',
      'jsconfig.json',
    ],
  },
  ...templEslintConfig,
];
