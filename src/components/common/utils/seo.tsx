import { ComponentSharedSeo, Maybe } from '@/typings/types';
import type { Metadata } from 'next';

type SeoProps = {
  titlePostfix?: string;
  seo: Maybe<ComponentSharedSeo> | undefined;
};

const generateSeo = (seo: SeoProps['seo'], titlePostfix = '') => {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const openGraphTitle = seo?.metaSocial?.[0]?.title ?? `${seo?.metaTitle} ${titlePostfix}`;
  const encodedTitle = encodeURIComponent(openGraphTitle);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_PROD_URL),
    title: `${seo?.metaTitle} ${titlePostfix} | ${siteName}`,
    description: seo?.metaDescription,
    authors: siteName,
    applicationName: siteName,
    openGraph: {
      title: openGraphTitle,
      description: seo?.metaSocial?.[0]?.description ?? seo?.metaDescription,
      type: 'website',
      siteName: siteName,
      countryName: 'France',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_PROD_URL}/api/open-graph/v1?title=${encodedTitle}&url=${
            seo?.metaSocial?.[0]?.image?.url ?? seo?.metaImage?.url
          }`,
          alt: seo?.metaSocial?.[0]?.image?.alternativeText,
        },
      ],
    },
    creator: 'Gaylord Julien',
    robots: 'follow, homepage',
  } as Metadata;
};

export default generateSeo;
