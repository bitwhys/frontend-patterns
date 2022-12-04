import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import typography from '@tailwindcss/typography'
import lineClamp from '@tailwindcss/line-clamp'

const blankDesignSystemTailwindPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        base: {
          light: 'rgba(255, 255, 255, 1)',
          dark: 'rgba(31, 62, 79, 1)',
          alert: 'rgba(255, 204, 0, 1)',
          success: 'rgba(45, 203, 72, 1)',
          destructive: 'rgba(255, 67, 67, 1)',
          secondary: 'rgba(69, 148, 192, 0.08)',
          accent: 'rgba(69, 148, 192, 1)',
        },
        canvas: {
          'light-primary': 'rgba(255, 255, 255, 1)',
          'light-secondary': 'rgba(250, 251, 252, 1)',
          'dark-primary': 'rgba(21, 46, 59, 1)',
          'dark-secondary': 'rgba(30, 55, 69, 1)',
        },
      },
      fontFamily: {
        sans: ['CabinVariable', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-3px', fontWeight: 600 }],
        'display-2': ['3.5rem', { lineHeight: '3.875rem', letterSpacing: '-2.4px', fontWeight: 600 }],
        'display-3': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-1.5px', fontWeight: 600 }],
        'label-1': ['1.375rem', { lineHeight: '1.875', letterSpacing: '-0.55px', fontWeight: 600 }],
        'label-2': ['1rem', { lineHeight: '1.375rem', letterSpacing: '-0.4px', fontWeight: 600 }],
        'button-lg': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.5px', fontWeight: 600 }],
        'button-big': ['1.125rem', { lineHeight: '1.375rem', letterSpacing: '-0.4px', fontWeight: 600 }],
        'button-sm': ['1rem', { lineHeight: '1.1875', letterSpacing: '-0.4px', fontWeight: 600 }],
        'copy-1': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.4px', fontWeight: 400 }],
        'copy-2': ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-0.3px', fontWeight: 400 }],
        'copy-3': ['1rem', { lineHeight: '1.625rem', letterSpacing: '-0.2px', fontWeight: 500 }],
        'copy-4': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.4px', fontWeight: 400 }],
      },
    },
  },
  plugins: [forms(), aspectRatio, lineClamp, typography()],
}
export default blankDesignSystemTailwindPreset
