import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const scroll: boolean = true

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='fixed top-0 z-[9999] left-0 w-full'>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
