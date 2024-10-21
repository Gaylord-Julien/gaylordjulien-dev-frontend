import { graphFetchApi } from '@/lib/query';
import { Homepage } from '@/typings/types';
import { SEO_FRAGMENT } from '@/api/fragments';

export const getHomepageSeo = async () => {
  const query = `#graphql
  ${SEO_FRAGMENT}
  query {
      homepage {
          seo {
              ...SeoFragment
          }
      }
  }


  `;
  const { homepage } = await graphFetchApi.post<{
    homepage: Homepage;
  }>({
    query,
  });
  return { seo: homepage?.seo };
};
