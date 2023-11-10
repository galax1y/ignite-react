import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind course with SSR through Next.js',
  description: 'Developed by galax1y',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
