import { graphFetchApi } from '@/lib/query';
import { Homepage } from '@/typings/types';
import { IMAGE_FRAGMENT } from '@/api/fragments';

export const getIntroduction = async () => {
  const query = `#graphql
    ${IMAGE_FRAGMENT}
    query {
        homepage {
            intro {
                id
                image {
                    ...ImageFragment
                }
                title
                content
            }
        }
    }


    `;
  const { homepage } = await graphFetchApi.post<{
    homepage: Homepage;
  }>({
    query,
  });
  return { intro: homepage?.intro };
};
