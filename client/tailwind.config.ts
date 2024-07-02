import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@nextui-org/theme/dist/components/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-1': "url('https://i.imgur.com/YRrcv1H.png')",
        'homepage': "url('https://i.imgur.com/dY8a3MA.png')",
        'mobile': "url('https://i.imgur.com/JfV72lb.png')",
        'unauthorized': "url('https://i.imgur.com/pLeUvPM.png')"
      },
    },
  },
  plugins: [
    nextui()
  ],
};

export default config;
