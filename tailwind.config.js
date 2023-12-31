/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem"
      }
    },
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "crimson-pro": ["Crimson Pro", "serif"],
        "fraunces": ["Fraunces", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "accent": "#CCA074",
        "dark-grey": "#2D3036",
        "light-beige": "#F4F0EC",
      }
    },
  },
  plugins: [],
}
