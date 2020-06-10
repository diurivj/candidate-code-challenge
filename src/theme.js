import { theme } from '@chakra-ui/core'

const breakpoints = ['746px', '1160px', '1441px', '1681px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  ...theme,
  breakpoints,
  fonts: {
    ...theme.fonts,
    body: 'Open Sans, sans-serif',
    heading: 'Open Sans, sans-serif'
  },
  colors: {
    ...theme.colors,
    black: {
      100: '#000',
      200: '#000',
      300: '#000',
      400: '#000',
      500: '#000',
      600: '#000',
      700: '#000',
      800: '#000',
      900: '#000'
    }
  }
}
