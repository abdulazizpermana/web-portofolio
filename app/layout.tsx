import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdul Aziz Permana | Software Engineer & QA Automation',
  description:
    'Software Engineer with expertise in QA Automation, Laravel backend development, and Flutter mobile development. Banking and enterprise systems specialist.',
  keywords: [
    'QA Automation',
    'Automation Test Engineer',
    'Laravel Developer',
    'Flutter Developer',
    'Backend Developer',
    'Software Engineer',
    'Selenium',
    'Banking',
    'Enterprise',
  ],
  authors: [{ name: 'Abdul Aziz Permana' }],
  creator: 'Abdul Aziz Permana',
  metadataBase: new URL('https://abdulazizpermana.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdulazizpermana.com',
    siteName: 'Abdul Aziz Permana',
    title: 'Abdul Aziz Permana | Software Engineer & QA Automation',
    description:
      'Software Engineer with experience in QA Automation, Laravel backend development, and Flutter mobile development.',
    images: [
      {
        url: 'https://abdulazizpermana.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abdul Aziz Permana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Aziz Permana | Software Engineer & QA Automation',
    description:
      'Software Engineer with experience in QA Automation, Laravel backend development, and Flutter mobile development.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
