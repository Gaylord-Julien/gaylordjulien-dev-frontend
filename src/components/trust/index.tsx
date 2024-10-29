import { getTrust } from '@/api/trust';
import Website from '@/components/trust/website';

const Trust = async () => {
  const { trust } = await getTrust();

  return (
    <>
      <h2
        className={
          'text-white text-center text-4xl lg:text-5xl font-extralight mt-48 mb-12 tracking-tighter'
        }
      >
        Ils me font confiance
      </h2>

      {trust?.map((item) => <Website key={item?.id} item={item} />)}
    </>
  );
};

export default Trust;
