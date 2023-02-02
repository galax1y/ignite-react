import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'

// executa estilos globais na aplicação vindos de styles/global.ts
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
