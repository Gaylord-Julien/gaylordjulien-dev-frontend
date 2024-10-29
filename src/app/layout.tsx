import './global.css';
import PlausibleProvider from 'next-plausible';
import { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Inter_Tight } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from './providers';
import { Nav } from '@/common/layout';

// eslint-disable-next-line new-cap
const interTight = Inter_Tight({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

type RootLayoutProps = {
  children: ReactNode;
};
export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],

    other: [
      {
        url: '/site.webmanifest',
        rel: 'manifest',
      },
      {
        url: 'https://pble.gaylordjulien.dev/',
        rel: 'preconnect',
      },
    ],
  },
};

const fontsClassNames = [interTight.variable].join(' ');

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="fr" className={fontsClassNames}>
      <head>
        <PlausibleProvider
          taggedEvents
          trackOutboundLinks
          domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          enabled
          customDomain={'https://pble.gaylordjulien.dev'}
          trackLocalhost={false}
          selfHosted
        />
      </head>
      <body>
        <Providers>
          <Nav />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
