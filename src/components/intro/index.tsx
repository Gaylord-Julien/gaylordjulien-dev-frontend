import { getIntroduction } from '@/api/intro';
import Card from '@/components/intro/card';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';

const Introduction = async () => {
  const { intro } = await getIntroduction();

  return (
    <>
      <section
        className={'bg-surface py-10 container rounded-lg pb-28 w-11/12 mb-14'}
        id={'services'}
      >
        <h2
          className={'text-white text-center text-4xl font-extralight mb-20 mt-12 tracking-tighter'}
        >
          Je vous propose
        </h2>
        <div className={'grid grid-cols-1 lg:grid-cols-12 gap-y-10'}>
          {intro?.map((item) => <Card key={item?.id} item={item} />)}
        </div>
      </section>
      <VelocityScroll
        text="Node.js React Next.js TypeScript Tailwind GraphQL Prisma PostgreSQL Docker GitHub Minio Strapi PWA Jest Cypress Storybook CI/CD PM2 Rest Zustand DevOps MySQL"
        defaultVelocity={1}
        className="font-display text-center text-4xl font-extralight tracking-[-0.02em] text-white drop-shadow-sm md:text-7xl md:leading-[5rem] dark:text-white"
      />
    </>
  );
};

export default Introduction;
