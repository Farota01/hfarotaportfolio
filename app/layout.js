import './globals.css'
import { Inter } from 'next/font/google';
import Header from '../components/Header'
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Footer/>
        
        {children}
      
        </body>
    </html>
  )
}
