import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: 'Code & Create', template: '%s | Code & Create' },
  description: 'Welcome to Code & Create',
  alternates: {
    canonical: baseUrl,
    media: {
      'only screen and (max-width: 600px)': [
        { url: 'https://example.com/small-screen' },
      ],
    },
  },
  openGraph: {
    title: 'Code & Create',
    description: 'Welcome to Code & Create',
    url: baseUrl,
    siteName: 'Code & Create',
    images: [{ url: 'https://example.com/og.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code & Create',
    description: 'Welcome to Code & Create',
    images: ['https://example.com/twitter.png'],
    creator: '@codeandcreate',
  },
  abstract: 'Code & Create is a platform for developers and creators to share their projects and ideas.',
  keywords: ['code', 'create', 'development', 'creativity'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Technology',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-16x16.svg',
    apple: '/apple-touch-icon.svg',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
