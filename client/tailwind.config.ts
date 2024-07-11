import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/(modal|scroll-shadow).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-1': "url('https://i.imgur.com/YRrcv1H.png')",
        'homepage': "url('https://i.imgur.com/dY8a3MA.png')",
        'mobile': "url('https://i.imgur.com/JfV72lb.png')",
        'unauthorized': "url('https://i.imgur.com/pLeUvPM.png')",
        'admin': "url('https://i.imgur.com/x4ddXxw.png')",
        'load': "url('https://i.imgur.com/bDRIcqr.png')"
      },
      screen:{
        xsm: '300px',
      },
      fontFamily: {
        GaMaamli: ["'Ga Maamli'", "sans-serif"],
        Bebas: ["'Bebas Neue'", "sans-serif"],
        Alfa: ["'Alfa Slab One'", "serif"],
        Anton: ["'Anton SC'", "sans-serif"],
        Merienda: ["'Merienda'", "cursive"],
        Expletus: ["'Expletus Sans'", "sans-serif"],
        Inter: ["'Inter'", "sans-serif"],
        DmSans: ["'DM Sans'", "sans-serif"]
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
};

export default config;