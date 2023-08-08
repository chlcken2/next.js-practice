import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head/>
      <body>
        <header className={styles.header}>
          <h1>header nav bar</h1>
          <nav className={styles.nav}>
            <a href='/products'>Products</a>
            <a href='/contact'>Contact</a>
            <a href='/about'>about</a>
          </nav>
        </header>
        {children}
      </body> 
    </html>
  )
}
