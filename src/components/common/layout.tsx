import { getSetting } from '@/api/setting';
import Image from 'next/image';

export const Nav = async () => {
  const { setting } = await getSetting();
  const { url, height, width } = setting?.logo ?? {};
  return (
    <nav
      className={
        'absolute top-0 py-5 text-white px-10 flex items-center border-primary border-b lg:border-b-0 w-full lg:max-w-7xl lg:justify-center'
      }
    >
      {url && <Image src={url} alt="logo" height={height ?? 0} width={width ?? 0} priority />}
      <h1 className={'ml-5 text-xl font-extralight'}>{setting.websiteName}</h1>
    </nav>
  );
};
