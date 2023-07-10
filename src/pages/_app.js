
import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../theme/my_theme'
import 'react-modal-video/css/modal-video.min.css';


export default function App({ Component, pageProps }) {  
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
