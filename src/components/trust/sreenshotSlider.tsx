'use client';
import { Maybe, UploadFile } from '@/typings/types';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import StrapiImage from '@/common/utils/StrapiImage';
import useMediaQuery from '@/common/utils/useMediaQuery';

const ScreenshotSlider = ({ screenshot }: { screenshot: Maybe<UploadFile>[] | undefined }) => {
  const [grabbing, setGrabbing] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      loop: true,
      dragFree: false,
      skipSnaps: true,
    },
    // eslint-disable-next-line new-cap
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', () => setGrabbing(true));
      emblaApi.on('pointerUp', () => setGrabbing(false));
    }
  }, [emblaApi]);

  if (!screenshot?.length) {
    return null;
  }

  return (
    <section className={'relative w-full'}>
      <div className="relative z-40 embla__viewport bg-gray-skewed" ref={emblaRef}>
        <div
          className={clsx('embla__container', {
            'cursor-grab': !grabbing,
            'cursor-grabbing': grabbing,
          })}
        >
          {screenshot?.map((image) => {
            const { url, alternativeText, documentId } = image ?? {};
            return (
              <div key={documentId} className="embla__slide" data-embla={'mutlitple-image'}>
                <div className="embla__slide__inner relative">
                  {url && (
                    <StrapiImage
                      src={url}
                      alt={alternativeText ?? ''}
                      modifiers={isMobile ? 'w=400&h=300' : 'w=800&h=500'}
                      fill={true}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSlider;
