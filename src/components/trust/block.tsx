'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

const Block = ({ description }: { description: BlocksContent }) => {
  return (
    <BlocksRenderer
      content={description}
      blocks={{
        heading: ({ children }) => (
          <h2 className={'text-white text-left text-2xl mb-8'}>{children}</h2>
        ),
        paragraph: ({ children }) => (
          <p className={'text-white font-extralight mb-5'}>{children}</p>
        ),
      }}
    />
  );
};

export default Block;
