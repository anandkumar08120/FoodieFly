
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import ReduxProvider from '../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FoodieFly',
  description: 'Best Pizza in the town',

}

export default function RootLayout({ children, }: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
