import './globals.css';

export const metadata = {
  title: 'אייירונמיינד - עיצוב מסגרות מקצועי',
  description: 'אייירונמיינד - עיצוב וייצור מסגרות מקצועיות לבתים ומשרדים',
  metadataBase: new URL('https://ironmind-website-djk5.vercel.app'),
  openGraph: {
    title: 'אייירונמיינד - עיצוב מסגרות מקצועי',
    description: 'עיצוב וייצור מסגרות מקצועיות בחומרים איכותיים',
    url: 'https://ironmind-website-djk5.vercel.app',
    siteName: 'IronMind',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אייירונמיינד - עיצוב מסגרות מקצועי',
    description: 'עיצוב וייצור מסגרות מקצועיות',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'IronMind',
              description: 'עיצוב וייצור מסגרות מקצועיות',
              url: 'https://ironmind-frames.com',
              telephone: '+972-123-456-789',
              email: 'info@ironmind.co.il',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'רחוב העיר',
                addressLocality: 'תל אביב',
                addressRegion: 'IL',
                postalCode: '12345',
                addressCountry: 'IL',
              },
              image: '/logo.jpg',
              sameAs: [
                'https://www.facebook.com/ironmind',
                'https://www.instagram.com/ironmind',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
