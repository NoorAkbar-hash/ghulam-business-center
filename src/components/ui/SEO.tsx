import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, image = '/logo.png', url = 'https://theghulamgroup.com' }: SEOProps) {
  const fullTitle = `${title} | Ghulam Business Center Doha`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Primary keywords */}
      <meta name="keywords" content="Business setup Doha, Qatar company formation, PRO services Qatar, Premium offices Doha, Virtual office Qatar, Business center Doha" />
    </Helmet>
  );
}
