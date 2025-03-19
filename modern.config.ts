import { appTools, defineConfig } from '@modern-js/app-tools';
import tailwindcssPlugin from '@modern-js/plugin-tailwindcss';
import moduleFederationPlugin from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({ bundler: 'experimental-rspack' }),
    moduleFederationPlugin(),
    tailwindcssPlugin(),
  ],
  dev: {
    https: true,
  },
  server: {},
  security: {
    sri: {
      hashFuncNames: ['SHA512'],
      enabled: true,
    },
  },
});
