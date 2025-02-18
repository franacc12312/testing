import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Web3Provider } from './context/Web3Context'
import { ColorProvider } from './context/ColorContext'
import theme from './theme'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ColorProvider>
        <Web3Provider>
          <App />
        </Web3Provider>
      </ColorProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
