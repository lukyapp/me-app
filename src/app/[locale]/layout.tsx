import { PersonJsonLd, WebsiteJsonLd } from '@/components/json-ld';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo' });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('title'),
      template: '%s | Lucas Landru',
    },
    description: t('description'),
    keywords: [
      'Full-Stack Developer',
      'Web Developer',
      'React Developer',
      'Next.js Developer',
      'Node.js Developer',
      'TypeScript',
      'JavaScript',
      'Frontend Developer',
      'Backend Developer',
      'Freelance Developer',
      'Lucas Landru',
    ],
    authors: [{ name: 'Lucas Landru', url: siteUrl }],
    creator: 'Lucas Landru',
    publisher: 'Lucas Landru',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: locale.replace('-', '_'),
      alternateLocale: locale === 'en-US' ? 'fr_FR' : 'en_US',
      url: `${siteUrl}/${locale}`,
      siteName: 'Lucas Landru - Full-Stack Developer',
      title: t('og.title'),
      description: t('og.description'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('og.image.alt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en-US': `${siteUrl}/en-US`,
        'fr-FR': `${siteUrl}/fr-FR`,
      },
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      className="h-full antialiased"
      dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PersonJsonLd locale={locale} />
        <WebsiteJsonLd locale={locale} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
