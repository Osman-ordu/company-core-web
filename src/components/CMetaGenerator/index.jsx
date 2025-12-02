import { SITE_CONFIG } from '../../config';

const CMetaGenerator = ({ title, description, keywords, path, image = '/default-og-image.jpg' }) => {
  const baseUrl = `${SITE_CONFIG.baseUrl}/${path}`;

  return (
    <>
      {/* --- Standart SEO Meta --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_CONFIG.companyName} />
      <link rel="canonical" href={baseUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* --- Open Graph (Facebook/LinkedIn) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.companyName} />
      <meta property="og:image" content={image} />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* --- Misc / Tavsiye Edilen Meta --- */}
      <meta httpEquiv="content-language" content={SITE_CONFIG.language} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};

export default CMetaGenerator;
