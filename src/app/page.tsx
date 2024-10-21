import Header from '@/components/header';
import Introduction from '@/components/intro';
import { Metadata } from 'next';
import { getHomepageSeo } from '@/api/homepageSeo';
import generateSeo from '@/common/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHomepageSeo();
  if (!seo) {
    return {
      title: process.env.NEXT_PUBLIC_SITE_NAME,
      description: '',
    };
  }
  return generateSeo(seo);
}

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-x-hidden font-inter-tight">
      <Header />
      <Introduction />
    </main>
  );
};

export default Page;
