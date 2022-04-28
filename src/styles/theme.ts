import { extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({
  styles: {
    global: {
      '#nprogress .peg': {
        display: 'none !important',
      },
      '#nprogress .bar': {
        background: 'orange.500',
        height: '3px',
        boxShadow: 'none',
      },
      body: {
        fontFamily: "body",
        bg: '#FFFFFF',
        color: '#000000',
      },
      _focus: {
        boxShadow: 'none'
      }
    },
  },
})
