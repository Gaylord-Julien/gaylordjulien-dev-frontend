import { graphFetchApi } from '@/lib/query';
import { IMAGE_FRAGMENT } from '@/api/fragments';
import { Setting } from '@/typings/types';

export const getSetting = async () => {
  const query = `#graphql
  ${IMAGE_FRAGMENT}
  query {
      setting {
          logo {
              ...ImageFragment
          }
          websiteName
      }
  }
  `;
  const { setting } = await graphFetchApi.post<{
    setting: Setting;
  }>({
    query,
  });
  return { setting: setting };
};
