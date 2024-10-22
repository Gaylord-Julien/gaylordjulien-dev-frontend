import { graphFetchApi } from '@/lib/query';
import { Homepage } from '@/typings/types';
import { IMAGE_FRAGMENT } from '@/api/fragments';

export const getTrust = async () => {
  const query = `#graphql
  ${IMAGE_FRAGMENT}
  query {
      homepage {
          trust {
              id
              screenshot {
                  ...ImageFragment
              }
              title
              description
              website
          }
      }
  }


  `;
  const { homepage } = await graphFetchApi.post<{
    homepage: Homepage;
  }>({
    query,
  });
  return { trust: homepage?.trust };
};
