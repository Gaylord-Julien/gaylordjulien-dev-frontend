import { ComponentHomepageIntro, Maybe } from '@/typings/types';
import Image from 'next/image';

const Card = ({ item }: { item: Maybe<ComponentHomepageIntro> }) => {
  const { id, image, title, content } = item ?? {};
  const { url, alternativeText, width, height } = image ?? {};
  return (
    <div key={id} className={'col-span-3 flex flex-col gap-y-5'}>
      {url && (
        <div className={'flex justify-center'}>
          <Image src={url} alt={alternativeText ?? ''} width={width ?? 0} height={height ?? 0} />
        </div>
      )}
      <h2 className={'text-white text-center text-2xl'}>{title}</h2>
      <p className={'text-white text-center w-8/12 mx-auto'}>{content}</p>
    </div>
  );
};

export default Card;
