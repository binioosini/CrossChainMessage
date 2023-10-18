'use client'

import { Inter } from 'next/font/google'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain={'goerli'} >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  )
}
