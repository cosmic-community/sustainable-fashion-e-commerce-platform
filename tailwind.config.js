/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
          foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(17 24 39)',
            a: {
              color: 'rgb(45 66 9)',
              textDecoration: 'underline',
              fontWeight: '600',
              '&:hover': {
                color: 'rgb(54 83 11)',
              },
            },
            h2: {
              color: 'rgb(17 24 39)',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              marginTop: '1.75em',
              marginBottom: '0.75em',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            strong: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}