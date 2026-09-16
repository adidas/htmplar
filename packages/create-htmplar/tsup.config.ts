import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    bin: 'src/bin.ts',
  },
  format: ['esm'],
  dts: {
    entry: 'src/index.ts',
  },
  clean: true,
  sourcemap: true,
  treeshake: true,
  shims: true,
  splitting: false,
  bundle: true,
});
