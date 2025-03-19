import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false, //this need to be false to comply with tailwind v4.0
  },
} satisfies Config;
