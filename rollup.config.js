export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
  ],
  external: [], // Add external dependencies here if needed
};
