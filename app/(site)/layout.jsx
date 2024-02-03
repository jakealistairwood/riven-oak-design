import { Inter, Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import "../../assets/styles/base.scss";
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer';
import CTA from '@/components/global/CTA';

const inter = Inter({ subsets: ['latin'], weight: ["400", "500", "700"], variable: "--inter" });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ["400"], variable: "--instrument-serif", adjustFontFallback: false });
const instrumentSans = Instrument_Sans({ subsets: ['latin'], weight: ["400", "500", "600", "700"], variable: "--instrument-sans", adjustFontFallback: false });

export const metadata = {
  title: 'Riven Oak Design',
  description: 'Handmade oak furniture, bespoke to you',
}

export default function RootLayout({ children }) {
  console.log(children);
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${inter.variable}`}>
        <Header />
        {children}
        {/* <CTA /> */}
        <Footer />
      </body>
    </html>
  )
}
