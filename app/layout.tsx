import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const outfit = localFont({
  src: [{ path: './fonts/Outfit-VariableFont_wght.ttf', style: 'normal' }],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});
const plusJakartaSans = localFont({
  src: [
    { path: './fonts/PlusJakartaSans-VariableFont_wght.ttf', style: 'normal' },
  ],
  variable: '--font-plusJakartaSans',
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
  },
  openGraph: {
    title: 'Code & Create',
    description: 'Welcome to Code & Create',
    url: baseUrl,
    siteName: 'Code & Create',
    images: [{ url: `${baseUrl}/og.png` }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code & Create',
    description: 'Welcome to Code & Create',
    images: [`${baseUrl}/twitter.png`],
    creator: '@codeandcreate',
  },
  abstract:
    'Code & Create is a platform for developers and creators to share their projects and ideas.',
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
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
