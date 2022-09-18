import '../styles/globals.css'
import {getLibrary} from '../config/web3'
import {Web3ReactProvider} from '@web3-react/core'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
