import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    plugins: [
      babel(),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    plugins: [
      babel(),
    ],
  },
];
