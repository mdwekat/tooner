import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
      json: 'src/json.ts',
      yaml: 'src/yaml.ts',
      toml: 'src/toml.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
    outDir: 'dist',
    external: ['yaml', '@iarna/toml', 'commander'],
  },
  {
    entry: {
      cli: 'cli/index.ts',
    },
    format: ['esm'],
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: true,
    outDir: 'dist',
    shims: true,
    external: ['commander'],
    esbuildOptions(options) {
      options.banner = {
        js: '#!/usr/bin/env node',
      };
    },
  },
]);
