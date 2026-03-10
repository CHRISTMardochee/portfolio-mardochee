import './globals.css';
import { I18nProvider } from '@/hooks/useI18n';

export const metadata = {
  title: 'Mardochée KIKIGBAGBAN — Developer & Product Consultant | Python, Django, AWS',
  description: 'Developer & Product Consultant specializing in scalable full-stack systems. 5+ years delivering high-impact projects across healthcare, fintech, e-commerce & industry. Python, Django, FastAPI, React, Next.js, AWS.',
  keywords: 'Python, Django, FastAPI, Full-stack Developer, Product Consultant, REST API, AWS, React, Next.js, Docker, Portfolio, Dakar, Senegal, Remote, Freelance',
  authors: [{ name: 'Mardochée KIKIGBAGBAN' }],
  icons: {
    icon: '/portfolio-mardochee/icon.png',
    apple: '/portfolio-mardochee/assets/profile.png',
  },
  openGraph: {
    title: 'Mardochée KIKIGBAGBAN — Developer & Product Consultant',
    description: 'I design and ship scalable full-stack systems — from product conception to production deployment on AWS. 5+ years of high-impact projects.',
    type: 'website',
    images: [{ url: '/portfolio-mardochee/assets/profile.png', width: 400, height: 400 }],
  },
  manifest: '/portfolio-mardochee/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050510',
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="192x192" href="/portfolio-mardochee/assets/profile.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
