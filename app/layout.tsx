import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/organisms/Navbar'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sucursal Manager',
  description:
    'Optimiza tu estrategia comercial en LATAM con nuestra plataforma integral de gestión de ventas. Desde el control detallado de proveedores, vendedores y clientes hasta un seguimiento preciso de productos y transacciones en diversas sucursales. Simplifica tu operación, maximiza la eficiencia y adapta la moneda automáticamente según el país. Descubre una nueva era en la administración comercial con nuestro sistema, diseñado para potenciar tu éxito en el mercado latinoamericano.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.className} flex flex-col min-h-dvh`}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="min-h-20 bg-blue-500 mt-auto"></footer>
      </body>
    </html>
  )
}
