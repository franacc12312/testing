import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#1a1a1a',
        color: 'white',
      },
    },
  },
  colors: {
    highlight: '#66BB6A',
    pastelGreen: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
    },
    pastelBlue: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
    darkBg: {
      900: '#1a1a1a',
      800: '#2d2d2d',
      700: '#3d3d3d',
      600: '#4d4d4d',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'pastelGreen.400',
          color: 'white',
          _hover: {
            bg: 'pastelGreen.500',
          },
        },
        outline: {
          borderColor: 'pastelGreen.400',
          color: 'pastelGreen.400',
          _hover: {
            bg: 'pastelGreen.400',
            color: 'white',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'darkBg.800',
          borderRadius: 'xl',
          p: 4,
        },
      },
    },
  },
})

export default theme 