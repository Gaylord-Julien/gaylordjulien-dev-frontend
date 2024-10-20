import { graphFetchApi } from '@/lib/query';
import { Homepage } from '@/typings/types';
import { IMAGE_FRAGMENT } from '@/api/fragments';

export const getHeader = async () => {
  const query = `#graphql
    ${IMAGE_FRAGMENT}
    query {
        header: homepage {
            header {
                title
                content
            }
            intro {
                image {
                    ...ImageFragment
                }
            }
        }
    }


    `;
  const { header } = await graphFetchApi.post<{
    header: Homepage;
  }>({
    query,
  });
  return { header: header?.header };
};
