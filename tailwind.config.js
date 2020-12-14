const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUI = require('@tailwindcss/ui')

const sizing = {
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
}

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.svelte',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.svx',
      './src/**/*.svexy',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g)
        const matchedTokens = [];
        let match = regExp.exec(content)
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6))
          } else {
            matchedTokens.push(match[0])
          }
          match = regExp.exec(content)
        }
        return matchedTokens
      },
    },
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    darkModeVariant: false,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  theme: {
    extend: {
      colors: {
        'summer-sky': {
          default: '#22ACE2',
          '100': '#D6F0FA',
          '200': '#A9DFF4',
          '300': '#7CCEEE',
          '400': '#4FBDE8',
          '500': '#22ACE2',
          '600': '#188BB9',
          '700': '#12698C',
          '800': '#0C475F',
          '900': '#062532'
        },
        'paris-daisy': {
          default: '#F6EE55',
          '100': '#FCFACA',
          '200': '#FBF7AD',
          '300': '#F9F490',
          '400': '#F8F172',
          '500': '#F6EE55',
          '600': '#F4E925',
          '700': '#DAD00B',
          '800': '#AAA209',
          '900': '#797306'
        },
      },
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily: {
        sans: [
          'Work Sans',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing,
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing,
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['hover', 'disabled'],
    borderColor: ['active', 'focus', 'disabled'],
    textColor: ['hover', 'active', 'disabled'],
    opacity: ['hover', 'active', 'focus', 'disabled'],
  },
  dark: 'class',
  plugins: [
    tailwindUI({}),
    function({ addVariant, e }) {
      const variants = [
        {
          name: 'focus-not-active',
          rule: 'focus:not(:active)',
        },
        {
          name: 'hover-not-focus',
          rule: 'hover:not(:focus)',
        },
        {
          name: 'not-first',
          css: 'not(:first-child)',
        },
        {
          name: 'not-last',
          css: 'not(:last-child)',
        },
      ]

      variants.forEach((variant) => {
        addVariant(variant.name, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`
          })
        })
      })
    },
  ]
}
