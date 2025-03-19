import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'federation_consumer',
  remotes: {
    federation_provider:
      'federation_provider@http://localhost:3002/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    tailwindcss: {
      singleton: true,
      // requiredVersion: dependencies.tailwindcss,
    },
  },
});
