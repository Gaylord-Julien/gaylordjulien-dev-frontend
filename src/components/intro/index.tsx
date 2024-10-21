import { getIntroduction } from '@/api/intro';
import Card from '@/components/intro/card';

const Introduction = async () => {
  const { intro } = await getIntroduction();

  return (
    <section className={'bg-surface py-10 container rounded-lg'} id={'services'}>
      <h2
        className={'text-white text-center text-4xl font-medium mb-16 mt-10 mb-24 tracking-tighter'}
      >
        Je vous propose
      </h2>
      <div className={'grid grid-cols-1 lg:grid-cols-12 gap-y-10'}>
        {intro?.map((item) => <Card key={item?.id} item={item} />)}
      </div>
    </section>
  );
};

export default Introduction;
