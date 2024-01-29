import { Inter, Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import "../../assets/styles/base.scss";
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer';
import CTA from '@/components/global/CTA';

const inter = Inter({ subsets: ['latin'], variable: "--inter" });
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ["400"], variable: "--instrument-serif" });
const instrumentSans = Instrument_Sans({ subsets: ['latin'], weight: ["400"], variable: "--instrument-sans" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400"], variable: "--ibm-plex-mono" });

export const metadata = {
  title: 'Riven Oak Design',
  description: 'Handmade oak furniture, bespoke to you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        <Header />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  )
}
