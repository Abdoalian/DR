import type { Metadata } from 'next';
import './globals.css';
import GoogleAppShell from '@/components/GoogleAppShell';
import ApplyModal from '@/components/ApplyModal';

export const metadata: Metadata = {
  title: 'حاضنة الأعمال التكنولوجية رواق | مركز الابتكار وريادة الأعمال - جامعة الأزهر',
  description:
    'حاضنة الأعمال التكنولوجية رواق (RWAQ) بمركز الابتكار وريادة الأعمال جامعة الأزهر - تبني الشركات الناشئة وتطوير نماذج الأعمال القابلة للاستثمار.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700;800&family=Cairo:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <GoogleAppShell>
          {children}
        </GoogleAppShell>
        <ApplyModal />
      </body>
    </html>
  );
}
