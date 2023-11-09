/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        galax1y: '#3473FB',

        violet: {
          25: '#fcfaff',
        },
      },
      borderWidth: {
        6: '6px',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      keyframes: {
        // slideUpAndFade: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        // slideUpAndFade: 'slideUpAndFade 400ms linear',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)'
      },
    },
  },
  plugins: [],
}
