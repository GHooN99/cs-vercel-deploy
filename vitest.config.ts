import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    include: ['**/*.test.ts(x)?'],
    exclude: ['**/node_modules/**'],
    // coverage: {
    //   provider: 'v8',
    //   statements: 50,
    //   branches: 50,
    //   functions: 50,
    //   lines: 50,
    // },
    environment: 'jsdom',
    setupFiles: './src/configs/unit-test/setup.ts',
  },
});
