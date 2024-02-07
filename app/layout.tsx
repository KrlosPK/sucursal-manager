import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/organisms/Navbar'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sucursal Manager',
  description:
    'Optimize your business strategy in LATAM with our comprehensive sales management platform. From detailed control of suppliers, sales representatives, and customers to precise tracking of products and transactions across multiple branches. Streamline your operation, maximize efficiency, and adapt currency automatically based on the country. Explore a new era in commercial administration with our system, designed to empower your success in the Latin American market.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <body className={`${openSans.className} flex flex-col min-h-dvh`}>
        <header>
          <Navbar />
        </header>

        <main className="flex-col p-4 gap-32 max-w-screen-xl flex justify-center mx-auto">
          {children}
        </main>

        <footer className="min-h-20 bg-blue-500 mt-auto"></footer>
      </body>
    </html>
  )
}
