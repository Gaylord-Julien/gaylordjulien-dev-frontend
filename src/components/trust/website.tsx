import { ComponentHomepageTrust, Maybe } from '@/typings/types';
import ScreenshotSlider from '@/components/trust/sreenshotSlider';
import { type BlocksContent } from '@strapi/blocks-react-renderer';
import Block from '@/components/trust/block';
import { Button } from '@/common/buttons';

const Website = ({ item }: { item: Maybe<ComponentHomepageTrust> }) => {
  const { screenshot, description, website } = item ?? {};
  return (
    <section
      className={
        'bg-surface container rounded-lg mt-10 px-10 py-20 mb-44 lg:px-24 lg:py-24 w-11/12 mx-auto'
      }
      id={'services'}
    >
      <div className={'flex flex-col gap-y-10 lg:gap-y-0'}>
        <div className={'col-span-12 flex flex-col gap-y-5 lg:grid grid-cols-12 gap-x-20'}>
          <div className={'col-span-4 self-center'}>
            <Block description={description as BlocksContent} />
            {website && (
              <a href={website} target={'_blank'} rel={'noreferrer'}>
                <Button variant={'outline'} className={'mt-5 hidden lg:flex'}>
                  Visiter le site
                </Button>
              </a>
            )}
          </div>
          <div className={'col-span-8'}>
            <ScreenshotSlider screenshot={screenshot} />
          </div>
        </div>
        {website && (
          <a href={website} target={'_blank'} rel={'noreferrer'}>
            <Button variant={'outline'} className={'mt-5 flex lg:hidden'}>
              Visiter le site
            </Button>
          </a>
        )}
      </div>
    </section>
  );
};

export default Website;
