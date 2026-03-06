import './globals.css';
import { I18nProvider } from '@/hooks/useI18n';

export const metadata = {
  title: 'Mardochée KIKIGBAGBAN — Développeur Full-stack Python',
  description: 'Développeur Full-stack spécialisé en Python et Django. 5+ ans d\'expérience, 30+ API REST, architectures MVC & n-tiers. Basé à Dakar, Sénégal.',
  keywords: 'Python, Django, Full-stack, Developer, REST API, Dakar, Senegal, Portfolio',
  authors: [{ name: 'Mardochée KIKIGBAGBAN' }],
  openGraph: {
    title: 'Mardochée KIKIGBAGBAN — Full-stack Python Developer',
    description: 'Full-stack developer specialized in Python/Django. 30+ REST APIs, MVC & n-tier architectures.',
    type: 'website',
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
