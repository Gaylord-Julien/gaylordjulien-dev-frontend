import Image from 'next/image';
import React, { FC } from 'react';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt: string;
  placeholder?: string;
  modifiers?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
} & (
  | {
      fill: true;
      width?: never;
      height?: never;
    }
  | {
      fill: false;
      width: number;
      height: number;
    }
  | {
      fill: undefined;
      width: number;
      height: number;
    }
);

const StrapiImage: FC<ImageProps> = ({
  src,
  alt,
  fill,
  modifiers,
  placeholder,
  width,
  className,
  height,
  priority,
  sizes,
}) => {
  const getApiUrl = () => {
    const params = new URLSearchParams({ image: src });
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    return `/api/image-transformation?${params.toString()}`;
  };

  const imageUrl = modifiers ? `${getApiUrl()}&${modifiers}` : `${src}`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      sizes={sizes}
      {...(fill ? { fill: true } : { width, height })}
      placeholder={placeholder ? 'blur' : 'empty'}
      className={clsx(className)}
      blurDataURL={placeholder ?? ''}
      priority={priority}
    />
  );
};

export default StrapiImage;
