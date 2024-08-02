import { DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: { default: 'Mineering', template: '%s | Mineering' },
  description:
    'PT Mineering Energi International, a rapidly growing leader in offshore technology development and consulting, is headquartered in Jakarta, Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
