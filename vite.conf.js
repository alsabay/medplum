import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@medplum/react-hooks': 'node_modules/@medplum/react-hooks/dist/index.esm.js',
    },
  },
});
