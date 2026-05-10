// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Deep Royal Blue
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Warm Gold/Yellow
          light: '#FBBF24',
          dark: '#D97706',
        },
        accent: '#FFFFFF', // Clean White
        text: {
          DEFAULT: '#1F2937', // Dark Gray for readability
          light: '#6B7280',
        },
        background: '#F9FAFB',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'accessible-lg': '1.125rem', // 18px for better readability
        'accessible-xl': '1.25rem', // 20px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}