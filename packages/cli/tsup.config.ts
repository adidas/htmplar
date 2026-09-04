import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts',
    bin: 'src/bin.ts',
  },
  format: ['esm'],
  dts: false, // CLI doesn't need type declarations
  clean: true,
  sourcemap: true,
  treeshake: true,
  shims: true,
  external: [
    'vite',
    '@vitejs/plugin-react',
    'express',
    'commander',
    'chalk',
    'ora',
    'inquirer',
    'chokidar',
    'cosmiconfig',
    'zod',
  ],
});
