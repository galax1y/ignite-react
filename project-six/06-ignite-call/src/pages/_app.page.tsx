import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import '../lib/dayjs' // locale pt-br global para o dayjs
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

// executa estilos globais na aplicação vindos de styles/global.ts
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
