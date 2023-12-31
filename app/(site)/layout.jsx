import { Inter } from 'next/font/google'
import "../../assets/styles/base.scss";
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer';
import CTA from '@/components/global/CTA';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Riven Oak Design',
  description: 'Handmade oak furniture, bespoke to you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  )
}
