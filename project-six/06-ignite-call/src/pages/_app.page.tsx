import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

// executa estilos globais na aplicação vindos de styles/global.ts
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
